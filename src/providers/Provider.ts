
import { connect, Connection } from "@textile/tableland";
import { Item } from "../models/Item";

export class Provider {
    private connection: Connection;

    public async connect () {
        const payload = {
            network: "testnet",
            host: "https://testnet.tableland.network"
        };

        this.connection = await connect(payload);
    }

    public async getItems() {
        this.connection.query('SELECT * FROM LootAttributes_3;').then((response: any) => {
            const columns = response!.data!.columns;
            const data = response!.data!.rows;

            return this.convertItems(columns, data);
        });
    }

    private convertItems(columns: any[], data: any[]) {
        const id = columns.findIndex(d => d.name === 'id');
        const trait = columns.findIndex(d => d.name === 'trait');
        const strength = columns.findIndex(d => d.name === 'strength');
        const stealth = columns.findIndex(d => d.name === 'stealth');
        const charm = columns.findIndex(d => d.name === 'charm');
        const speed = columns.findIndex(d => d.name === 'speed');

        const items: Item[] = [];
        data.forEach(item => {
            items.push({
                Name: item[trait],
                Stats: {
                    Strength: item[strength],
                    Dexterity: item[stealth],
                    Charm: item[charm],
                    Speed: item[speed]
                },
                Id: item[id]
            })
        });

        return items;
    }  

    public async getTodos() {
        this.connection.query('SELECT * FROM todo_todos_example_34 ORDER BY id ASC;').then(response => {
            console.log(response)
            return response;
        });
    }
}