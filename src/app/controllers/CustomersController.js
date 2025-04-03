let customers = [
    { id: 1, name: "Youtube", site: "http://youtube.com.br" },
    { id: 2, name: "Google", site: "https://google.com.br" },
    { id: 3, name: "UOL", site: "http://uol.com.br" },
];

class CustomersController {
    constructor() {}

    index(req, res) {
        return res.json(customers);
    }

    show(req, res) {
        const id = parseInt(req.params.id, 10);
        const customer = customers.find((item) => item.id === id);
        const status = customer ? 200 : 404;

        console.warn("GET :: /customers/:id", JSON.stringify(customer));
        return res
            .status(status)
            .json(customer || { error: "Customer not found" });
    }

    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;

        const newCustomer = { id, name, site };
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }

    update(req, res) {
        const id = parseInt(req.params.id, 10);
        const { name, site } = req.body;

        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = { id: parseInt(id), name, site };
        }
        return res
            .status(status)
            .json(customers[index] || { error: "Customer not found" });
    }
    destroy(req, res) {
        const id = parseInt(req.params.id, 10);
        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;
        if (index >= 0) {
            customers.splice(index, 1);
        }
        return res
            .status(status)
            .json(customers[index] || { error: "Customer not found" });
    }
}

export default new CustomersController();
