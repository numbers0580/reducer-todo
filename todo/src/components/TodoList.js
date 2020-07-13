import React from 'react';
import ItemCard from './ItemCard';

const TodoList = (props) => {
    const styledList = function() {
        return {
            div: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
        };
    };

    return (
        <div style={styledList().div}>
            {props.state.map(individual => {
                return <ItemCard key={individual.id} indivCard={individual} toggleItem={props.toggleItem}/>;
            })}
        </div>
    );
};

export default TodoList;