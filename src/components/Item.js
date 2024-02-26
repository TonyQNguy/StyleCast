import React from 'react';
import './Item.css';

const Item = (props) => {

    const {img, name, category, preference } = props;
    
    return (    
        <li key={props.id} className="user-item">
        <img src={props.image} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2>{props.name}</h2>
            <h3>{props.category}</h3>
            <h3>{props.preference}</h3>
        </div>
        </li>
    )
}

export default Item;
