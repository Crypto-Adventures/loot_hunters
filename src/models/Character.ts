import { OldStats, Stats } from "./Stats";
import { Item } from "./Item";

export interface Character {
    Name: string,
    Stats: OldStats,
    Inventory: Item[],
    Equipped: Item[],
    Health: number
}