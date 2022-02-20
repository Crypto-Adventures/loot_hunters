import React from 'react';
import { Character } from '../../models/Character';
import { Item } from '../../models/Item';
import { OldStats } from '../../models/Stats';
import './CharacterSheet.scss';
import { ItemButton } from './Item/ItemButton';
import chortle from '../../static/chortle.jpg';

interface CharacterSheetProps {
    Character: Character
}

export const CharacterSheet = (props: CharacterSheetProps) => {
    let statsCalculated: boolean = false;

    const [stats, setStats] = React.useState<OldStats>(props.Character.Stats);
    const [equipped, setEquippedItems] = React.useState<Item[]>(props.Character.Equipped);
    const [inventory, setInventory] = React.useState<Item[]>(props.Character.Inventory);

    const getItems = () => {
        const items: JSX.Element[] = [];
        equipped.forEach(d => {
            items.push(
                <ItemButton item={d} click={unequipItem}/>
            );
        });
        return items;
    }

    const getInventory = () => {
        const items: JSX.Element[] = [];
        inventory.forEach(d => {
            items.push(
                <ItemButton item={d} click={equipItem}/>
            );
        });
        return items;
    }

    const equipItem = (item: Item) => {
        setEquippedItems(equipped.concat(item));
        setInventory(inventory.filter(d => d.Id != item.Id));
        getStats(equipped.concat(item));
    }

    const unequipItem = (item: Item) => {
        setEquippedItems(equipped.filter(d => d.Id != item.Id));
        setInventory(inventory.concat(item));
        getStats(equipped.filter(d => d.Id != item.Id));
    }

    const getStats = (equippedItems: Item[]) => {

        const currentStats: OldStats = {
            Strength: props.Character.Stats.Strength,
            Charm: props.Character.Stats.Charm,
            Dexterity: props.Character.Stats.Dexterity,
            Speed: props.Character.Stats.Speed
        }

        equippedItems.forEach(item => {
            currentStats.Strength += item.Stats.Strength;
            currentStats.Charm += item.Stats.Charm;
            currentStats.Dexterity += item.Stats.Dexterity;
            currentStats.Speed = item.Stats.Speed;
        }); 

        setStats(currentStats);
    }

    React.useEffect(() => {
        if(!statsCalculated) {
            getStats(props.Character.Equipped);
            statsCalculated = false;
        }
    }, [statsCalculated]);

    return (
        <div className="CharacterSheetWrapper">
            <div className="CharacterSheet">
                <img className="Picture" src={chortle}/>
                <div className="Stats">
                    <h1 className="CharacterName">{props.Character.Name}</h1>
                    <h2 className="StatsTitle">Stats</h2>
                    <div className="Stat">Strength: {stats.Strength}</div>
                    <div className="Stat">Charm: {stats.Charm}</div>
                    <div className="Stat">Dexterity: {stats.Dexterity}</div>
                    <div className="Stat">Speed: {stats.Speed}</div>

                    <div className="Items">
                        <h2>Equipped Items</h2>
                        <div className="EquippedItems">
                            {getItems()}
                        </div>
                    </div>
                    
                    <div className="Inventory">
                        <h2>Inventory</h2>
                        <div className="InventoryItems">
                            {getInventory()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}