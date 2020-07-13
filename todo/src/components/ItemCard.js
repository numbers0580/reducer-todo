import React from 'react';

const ItemCard = (props) => {
    const styledItem = function() {
        return {
            div1: {
                width: '400px',
                background: '#00FF00',
                border: '2px solid #008000',
                borderRadius: '30px',
                padding: '2px',
                marginBottom: '15px'
            },
            div2: {
                width: '400px',
                background: '#FF0000',
                border: '2px solid #800000',
                borderRadius: '30px',
                padding: '2px',
                marginBottom: '15px'},
            h2: {
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold'
            }
        };
    };

    return (
        <div style={props.indivCard.completed ? styledItem().div2 : styledItem().div1} onClick={(event) => {
            event.preventDefault();
            props.toggleItem(props.indivCard.id);
        }}>
            <h2 style={styledItem().h2}>{props.indivCard.item}</h2>
        </div>
    );
};

export default ItemCard;