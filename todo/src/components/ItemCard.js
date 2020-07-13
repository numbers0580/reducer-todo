import React from 'react';

const ItemCard = (props) => {
    return (
        <div className={props.indivCard.completed ? 'completed' : ''} onClick={(event) => {
            event.preventDefault();
            props.toggleItem(props.indivCard.id);
        }}>
            <h2>{props.indivCard.item}</h2>
        </div>
    );
};

export default ItemCard;