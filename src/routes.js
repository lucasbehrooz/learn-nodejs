import { Router } from "express";
import customers from "./app/controllers/CustomersController";
const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({
        message: "OK",
        status: 200,
        dateTime: new Date().toISOString(),
    });
});

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);

export default routes;
