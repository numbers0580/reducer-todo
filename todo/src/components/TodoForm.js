import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <label>New Item:&nbsp;<input type='text' value={props.listItem} onChange={props.updateInput} /></label>
                <input type='submit' value='Add' />
            </div>
            <input type='button' value='Clear Completed' />
        </form>
    );
}

export default TodoForm;