import * as services from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAll = async (req, res, next) => {
  try {
    const result = await services.listContacts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await services.getContactById(id);
    if (!result) throw HttpError(404, "Not found");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await services.removeContact(id);
    if (!result) throw HttpError(404, "Not found");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const add = async (req, res, next) => {
  try {
    const result = await services.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await services.updateContact(id, req.body);
    if (!result) throw HttpError(404, "Not found");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
