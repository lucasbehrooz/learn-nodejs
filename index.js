const express = require("express");
const server = express();

server.use(express.json());

let customers = [
    { id: 1, name: "Youtube", site: "http://youtube.com.br" },
    { id: 2, name: "Google", site: "https://google.com.br" },
    { id: 3, name: "UOL", site: "http://uol.com.br" },
];
server.get("/", (req, res) => {
    return res.json({
        message: "OK",
        status: 200,
        dateTime: new Date().toISOString(),
    });
});

server.get("/customers", (req, res) => {
    return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer || { error: "Customer not found" });
});

server.post("/customers", (req, res) => {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});

server.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});
server.listen(3000, () => {
    console.log("Aplicação Executando http://localhost:3000");
});
