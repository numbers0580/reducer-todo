import React from 'react';

function TodoForm(props) {
    const updateList = evt => {
        evt.preventDefault();

        const newListing = {
            item: props.listItem,
            completed: false,
            id: Date.now()
        };

        props.fetched({type: 'ADDITEM', payload: newListing});
        props.addToList('');
    };

    const clearEntries = () => {
        props.fetched({type: 'CLEARCOMPS'});
    };

    return (
        <form onSubmit={updateList}>
            <div>
                <label>New Item:&nbsp;<input type='text' value={props.listItem} onChange={props.updateInput} /></label>
                <input type='submit' value='Add' />
            </div>
            <input type='button' value='Clear Completed' onClick={clearEntries} />
        </form>
    );
}

export default TodoForm;