import { RespondError } from "../error/ressponse-error.js";
import { ubahIsiArray } from "../lib/changeArray.js";
import { modify } from "../lib/modify.js";
import { organizedData } from "../lib/transformdata.js";
import { emailValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";

const getAllPmi = async (key, db) => {
  key = `%${key}%`;
  const [pmi] = await db.execute(
    "SELECT pm.id, pm.name, pd.image, pd.location FROM pmi_details pd JOIN pmi pm where pm.id = pd.pmi_id AND( pm.name LIKE ? OR pd.location LIKE ?) order by name asc",
    [key, key]
  );

  return pmi;
};

const getDetailPmi = async (id, db) => {
  const [pmi] = await db.execute(
    "SELECT pm.id, pm.name, pd.location, pd.operational, pd.start , pd.end, pd.description, pd.lng, pd.lat FROM pmi pm JOIN pmi_details pd ON pm.id = pd.pmi_id WHERE pm.id = ?",
    [id]
  );

  if (!pmi[0]) {
    throw new RespondError(404, "Pmi not found");
  }

  return pmi[0];
};

const getEvent = async (db) => {
  const [event] = await db.execute(
    "SELECT id,name,city, date AS dt ,DATE_FORMAT(date, '%e %M %Y') AS date , start, end, 0 as remind FROM events ORDER BY dt DESC"
  );

  return event;
};

const getEventWithAuth = async (email, db) => {
  email = validate(emailValidation, email);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (emailInDb.length === 0) {
    throw new RespondError(404, "User Not Found");
  }

  const [event] = await db.execute(
    "SELECT e.id,e.date AS dt, e.name, DATE_FORMAT(e.date, '%e %M %Y') AS date , e.start, e.end, CASE WHEN rm.user_id IS NOT NULL THEN true ELSE false END AS remind FROM events e LEFT JOIN reminder_me rm ON e.id = rm.event_id AND rm.user_id = (select id from users where email = ?) ORDER BY dt DESC",
    [email]
  );

  return event;
};

const reminderMe = async (email, eventId, db) => {
  email = validate(emailValidation, email);

  if (!eventId) {
    throw new RespondError(400, "Please input event id in body");
  }

  const [isReady] = await db.execute(
    "SELECT * FROM reminder_me WHERE event_id = ? AND user_id = (SELECT id FROM users WHERE email = ?)",
    [eventId, email]
  );

  if (isReady.length >= 1) {
    throw new RespondError(400, "User already remind this event");
  }

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (emailInDb.length === 0) {
    throw new RespondError(404, "User Not Found");
  }

  const [eventInDb] = await db.execute("SELECT * FROM events WHERE id = ?", [
    eventId,
  ]);

  if (eventInDb.length === 0) {
    throw new RespondError(404, "Event not found");
  }

  await db.execute(
    "INSERT INTO reminder_me (user_id, event_id) VALUES ((SELECT id FROM users WHERE email = ?),?)",
    [email, eventId]
  );
};

const eventDetail = async (eventId, db) => {
  if (!eventId) {
    throw new RespondError(404, "Please input event id in body");
  }

  const [event] = await db.execute(
    "SELECT id, name, city, location, DATE_FORMAT(date, '%e %M %Y') AS date, start, end, description, image, lng, lat FROM events WHERE id = ?",
    [eventId]
  );

  if (event.length === 0) {
    throw new RespondError(404, "Event not found");
  }

  event[0].remind = 0;

  return event[0];
};

const eventDetailWithAuth = async (eventId, email, db) => {
  if (!eventId) {
    throw new RespondError(404, "Please input event id in body");
  }

  const [event] = await db.execute(
    "SELECT id, name, city, location, DATE_FORMAT(date, '%e %M %Y') AS date, start, end, description, image, lng, lat FROM events WHERE id = ?",
    [eventId]
  );

  if (event.length === 0) {
    throw new RespondError(404, "Event not found");
  }

  const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (user.length === 0) {
    throw new RespondError(404, "User not found");
  }

  const [eventa] = await db.execute(
    "SELECT e.id, e.name, e.city, e.location, e.date, e.start, e.end, e.description, e.image, e.lng, e.lat, COALESCE(rm.user_id IS NOT NULL, 0) AS remind FROM events e LEFT JOIN  reminder_me rm ON e.id = rm.event_id AND rm.user_id = (SELECT id FROM users WHERE email = ?) WHERE e.id = ?",
    [email, eventId]
  );

  if (!eventa[0]) {
    throw new RespondError(404, "Event not found");
  }

  return eventa[0];
};

const deleteRemind = async (email, eventId, db) => {
  const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (!user[0]) {
    throw new RespondError(404, "user not found");
  }

  const [event] = await db.execute("SELECT * FROM events WHERE id = ?", [
    eventId,
  ]);

  if (!event[0]) {
    throw new RespondError(404, "event not found");
  }

  const [remind] = await db.execute(
    "SELECT * FROM reminder_me WHERE user_id = ? AND event_id = ?",
    [user[0].id, event[0].id]
  );

  if (!remind[0]) {
    throw new RespondError(404, "Reminder not found");
  }

  await db.execute(
    "DELETE FROM reminder_me WHERE user_id = ? AND event_id = ?",
    [user[0].id, event[0].id]
  );
};

const getStockBlood = async (pmiId, db) => {
  if (!pmiId) {
    throw new RespondError(400, "Bad Request");
  }
  const [pmi] = await db.execute("SELECT * FROM pmi WHERE id = ?", [pmiId]);

  if (!pmi[0]) {
    throw new RespondError(404, "Not Found");
  }

  const result = {};

  let [stock] = await db.execute(
    'SELECT CONCAT_WS("", bt.blood_type, rh.rhs) AS golongan_darah, COALESCE(COUNT(*), 0) AS total_stok FROM blood_types bt LEFT JOIN rhesus rh ON 1 LEFT JOIN blood_stocks bs ON bs.blood_type_id = bt.id AND bs.rhesus_id = rh.id JOIN pmi ON bs.pmi_id = pmi.id WHERE pmi.id = ? GROUP BY bt.blood_type, rh.rhs, pmi.id ORDER BY bt.blood_type, rh.rhs',
    [pmiId]
  );

  result.stock = ubahIsiArray(stock);

  const [detail_stock] = await db.execute(
    `
SELECT
  types.type AS type,
  types.alias AS alias,
  CONCAT_WS('', blood_types.blood_type, rhesus.rhs) as golongan_darah,
  COALESCE(COUNT(*), 0) AS total_stok
FROM
  blood_stocks
        JOIN
    pmi ON blood_stocks.pmi_id = pmi.id
        JOIN
    blood_types ON blood_stocks.blood_type_id = blood_types.id
        JOIN
    rhesus ON blood_stocks.rhesus_id = rhesus.id
        JOIN
    types ON blood_stocks.type_id = types.id
    WHERE
  pmi.id = ?
GROUP BY
  types.alias,
  blood_types.blood_type,
  rhesus.rhs,
  types.type

    `,
    [pmiId]
  );
  const details = organizedData(modify(detail_stock));

  result.details = details;

  return result;
};

export default {
  getAllPmi,
  getDetailPmi,
  getEvent,
  getEventWithAuth,
  reminderMe,
  eventDetail,
  eventDetailWithAuth,
  deleteRemind,
  getStockBlood,
};
