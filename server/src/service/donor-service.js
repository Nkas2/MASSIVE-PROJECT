import db from "../application/db.js";
import { RespondError } from "../error/ressponse-error.js";
import { emailValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";

const getAllPmi = async () => {
  const [pmi] = await db.execute(
    "SELECT pm.id, pm.name, pd.image, pd.location FROM pmi_details pd JOIN pmi pm where pm.id = pd.pmi_id order by name asc "
  );

  return pmi;
};

const getDetailPmi = async (id) => {
  const [pmi] = await db.execute(
    "SELECT pm.id, pm.name, pd.location, pd.operational, pd.start , pd.end, pd.description, pd.lng, pd.lat FROM pmi pm JOIN pmi_details pd ON pm.id = pd.pmi_id WHERE pm.id = ?",
    [id]
  );

  if (!pmi[0]) {
    throw new RespondError(404, "Pmi not found");
  }

  return pmi[0];
};

const getEvent = async () => {
  const [event] = await db.execute(
    "SELECT id,name,city, date, start, end  FROM events ORDER BY date desc"
  );

  return event;
};

const getEventWithAuth = async (email) => {
  email = validate(emailValidation, email);

  const [emailInDb] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (emailInDb.length === 0) {
    throw new RespondError(404, "User Not Found");
  }

  const [event] = await db.execute(
    "SELECT e.id, e.name, e.date, e.start, e.end, CASE WHEN rm.user_id IS NOT NULL THEN true ELSE false END AS remind FROM events e LEFT JOIN reminder_me rm ON e.id = rm.event_id AND rm.user_id = (select id from users where email = ?) ORDER BY e.date DESC",
    [email]
  );

  return event;
};

const reminderMe = async (email, eventId) => {
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

export default {
  getAllPmi,
  getDetailPmi,
  getEvent,
  getEventWithAuth,
  reminderMe,
};
