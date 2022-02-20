import React from 'react';
import { Character } from '../../models/Character';
import { Item } from '../../models/Item';
import './CharacterSheet.scss';

interface CharacterSheetProps {
    Character: Character
}

export const CharacterSheet = (props: CharacterSheetProps) => {

    const Items = (list: Item[]) => {
        const items: JSX.Element[] = [];
        list.forEach(d => {
            items.push(
                <div className="Item">
                    {d.Name}
                </div>
            );
        });
        return items;
    }

    return (
        <div className="CharacterSheetWrapper">
            <div className="CharacterSheet">
                <div className="Picture"></div>
                <div className="Stats">
                    <h1 className="CharacterName">{props.Character.Name}</h1>
                    <h2 className="StatsTitle">Stats</h2>
                    <div className="Stat">Strength: {props.Character.Stats.Strength}</div>
                    <div className="Stat">Charm: {props.Character.Stats.Charm}</div>
                    <div className="Stat">Dexterity: {props.Character.Stats.Dexterity}</div>
                    <div className="Stat">Speed: {props.Character.Stats.Speed}</div>

                    <div className="Items">
                        <h2>Equipped Items</h2>
                        <div className="EquippedItems">
                            {Items(props.Character.Equipped)}
                        </div>
                    </div>
                    
                    <div className="Inventory">
                        <h2>Inventory</h2>
                        <div className="InventoryItems">
                            {Items(props.Character.Inventory)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}