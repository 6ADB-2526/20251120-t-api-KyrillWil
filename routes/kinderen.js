const express = require("express")
const crlKind = require("../controllers/kinderen")

const routes = express.Router();

routes.get("/", crlKind.alleInfo);
routes.get("/getKind/:ID", crlKind.getOne)
routes.get("/addKind", crlKind.addKind)

module.exports = routes;