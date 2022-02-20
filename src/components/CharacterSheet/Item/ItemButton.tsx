import React from 'react';
import { Item } from '../../../models/Item';
import './Item.scss';

export const ItemButton = (props: {item: Item}) => {
    return (
        <div className="ItemButton">
            {props.item.Name}
        </div>
    );
}