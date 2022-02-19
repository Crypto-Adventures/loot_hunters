
import { connect, Connection } from "@textile/tableland" //"https://cdn.skypack.dev/@textile/tableland@0.0.8-dev2";

export class Provider {
    private connection: Connection;

    constructor() {
        this.getConnection();
    }

    private async getConnection () {
        const payload = {
            network: "testnet",
            host: "https://testnet.tableland.network"
        };

        this.connection = await connect(payload);
    }

    public async getItems() {
        await this.connection.query('SELECT * FROM LootAttributes_3;').then(response => {
            console.log(response)
            return response;
        });
    }

    public async getTodos() {
        this.connection.query('SELECT * FROM todo_todos_example_34 ORDER BY id ASC;').then(response => {
            console.log(response)
            return response;
        });
    }
}