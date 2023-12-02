import db from "../application/db.js";
import donorService from "../service/donor-service.js";

const getAllPmi = async (req, res, next) => {
  try {
    const result = await donorService.getAllPmi();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    db.release();
  }
};

const getDetailPmi = async (req, res, next) => {
  try {
    const id = req.params.pmiId;
    const result = await donorService.getDetailPmi(id);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    db.release();
  }
};

const getEvent = async (req, res, next) => {
  try {
    if (!req.user) {
      const result = await donorService.getEvent();
      return res
        .status(200)
        .json({
          data: result,
        })
        .end();
    }
    const result = await donorService.getEventWithAuth(req.user.email);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  } finally {
    db.release();
  }
};

const reminderMe = async (req, res, next) => {
  try {
    await donorService.reminderMe(req.user.email, req.body.event_id);
    res.status(201).json({
      data: "OK",
    });
  } catch (e) {
    next(e);
  } finally {
    db.release;
  }
};

export default {
  getAllPmi,
  getDetailPmi,
  getEvent,
  getEvent,
  reminderMe,
};
