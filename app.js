"use strict";

module.exports = (app, agenda, options) => {
  options = options || {};

  const agendash = require("./lib/controllers/agendash")(agenda, options);
  const middlewarePath = "./lib/middlewares/express";

  try {
    return require(middlewarePath)(app, agendash);
  } catch (error) {
    console.error(error);
    throw new Error(`Middleware load failed with ${JSON.stringify(options)}`);
  }
};
