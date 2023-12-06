import db from "../application/db.js";
import donorService from "../service/donor-service.js";

const getAllPmi = async (req, res, next) => {
  try {
    const result = await donorService.getAllPmi(req.query.loc || "");
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
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
  }
};

const eventDetail = async (req, res, next) => {
  try {
    if (!req.user) {
      const result = await donorService.eventDetail(req.params.id);
      return res.status(200).json({
        data: result,
      });
    }

    const result = await donorService.eventDetailWithAuth(
      req.params.id,
      req.user.email
    );
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const deleteRemind = async (req, res, next) => {
  try {
    await donorService.deleteRemind(req.user.email, req.body.event_id);
    res.status(200).json({
      data: "OK",
    });
  } catch (e) {
    next(e);
  }
};

const getStockBlood = async (req, res, next) => {
  try {
    const result = await donorService.getStockBlood(req.params.id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
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
