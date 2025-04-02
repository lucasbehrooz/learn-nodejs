const { Router } = require("express");
const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({
        message: "OK",
        status: 200,
        dateTime: new Date().toISOString(),
    });
});

module.exports = routes;
