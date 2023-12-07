import getConnection from "../application/db.js";
import donorService from "../service/donor-service.js";

const getAllPmi = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await donorService.getAllPmi(
      req.query.loc || "",
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getDetailPmi = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const id = req.params.pmiId;
    const result = await donorService.getDetailPmi(id, connection);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getEvent = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    if (!req.user) {
      const result = await donorService.getEvent(connection);
      return res
        .status(200)
        .json({
          data: result,
        })
        .end();
    }
    const result = await donorService.getEventWithAuth(
      req.user.email,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const reminderMe = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    await donorService.reminderMe(
      req.user.email,
      req.body.event_id,
      connection
    );
    res.status(201).json({
      data: "OK",
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const eventDetail = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    if (!req.user) {
      const result = await donorService.eventDetail(req.params.id, connection);
      return res.status(200).json({
        data: result,
      });
    }

    const result = await donorService.eventDetailWithAuth(
      req.params.id,
      req.user.email,
      connection
    );
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const deleteRemind = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    await donorService.deleteRemind(
      req.user.email,
      req.body.event_id,
      connection
    );
    res.status(200).json({
      data: "OK",
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getStockBlood = async (req, res, next) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await donorService.getStockBlood(req.params.id, connection);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

export default {
  getAllPmi,
  getDetailPmi,
  getEvent,
  reminderMe,
  eventDetail,
  deleteRemind,
  getStockBlood,
};
