import { Sequelize } from "sequelize";

class User extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.Customer, { foreignKey: "customer_id" });
    }
}

export default User;
