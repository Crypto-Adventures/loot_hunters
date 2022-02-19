import { Stats } from "./Stats";
import { Item } from "./Item";

export interface Character {
    Name: string,
    Stats: Stats
    Inventory: Item[],
    Equipped: Item[],
    Health: number
}