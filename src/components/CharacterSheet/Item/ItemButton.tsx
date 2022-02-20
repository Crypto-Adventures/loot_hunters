import React, { Dispatch, SetStateAction } from 'react';
import { Item } from '../../../models/Item';
import './Item.scss';

export const ItemButton = (props: {item: Item, click?: (item: Item)=> void}) => {


    return (
        <div className="ItemButton" onClick={() => props.click ? props.click(props.item) : undefined}>
            {props.item.Name}
        </div>
    );
}