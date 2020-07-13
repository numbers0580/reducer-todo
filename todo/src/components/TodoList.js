import React from 'react';
import ItemCard from './ItemCard';

const TodoList = (props) => {
    return (
        <div>
            {props.state.map(individual => {
                return <ItemCard key={individual.id} indivCard={individual} toggleItem={props.toggleItem}/>;
            })}
        </div>
    );
};

export default TodoList;