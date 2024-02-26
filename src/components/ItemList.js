import React from 'react';

import './ItemList.css';
import Item from './Item.js';
import Card from './Card.js';

const ItemList = (prop) => { 
    const { items } = prop;

    const userComponents = items.map((item) => ( 
        <Card key={item.id} className = "items">
        <Item
            image = {item.image}
            name = {item.name}
            category = {item.category}
            preference = {item.preference}
        />
        </Card>
    )); 

    return ( 
        <div>
            { userComponents }
        </div>
    );
};

export default ItemList;