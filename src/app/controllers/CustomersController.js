class CustomersController {
    constructor() {
        this.customers = [
            { id: 1, name: "Youtube", site: "http://youtube.com.br" },
            { id: 2, name: "Google", site: "https://google.com.br" },
            { id: 3, name: "UOL", site: "http://uol.com.br" },
        ];
    }
    index(req, res) {
        return res.json(this.customers);
    }

    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = this.customers.find((item) => item.id === id);
        const status = customer ? 200 : 404;

        console.log("GET :: /customers/:id", JSON.stringify(customer));
        return res
            .status(status)
            .json(customer || { error: "Customer not found" });
    }

    create(req, res) {
        const { name, site } = req.body;
        const id = this.customers[this.customers.length - 1].id + 1;

        const newCustomer = { id, name, site };
        this.customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }

    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = this.customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            this.customers[index] = { id: parseInt(id), name, site };
        }
        return res
            .status(status)
            .json(this.customers[index] || { error: "Customer not found" });
    }
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = this.customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;
        if (index >= 0) {
            this.customers.splice(index, 1);
        }
        return res
            .status(status)
            .json(this.customers[index] || { error: "Customer not found" });
    }
}

module.exports = new CustomersController();
