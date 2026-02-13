import Joi from "joi";

export const addSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9\-+() ]+$/).required(),
});

export const updateSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[0-9\-+() ]+$/),
}).min(1); // хоча б одне поле
