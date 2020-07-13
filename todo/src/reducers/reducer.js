export const initState = [
    {item: 'Phase 1: Collect Underpants', completed: false, id: 130720120001},
    {item: 'Phase 2: ?', completed: false, id: 130720120002},
    {item: 'Phase 3: PROFIT', completed: false, id: 130720120003}
]

export const redeux = (state, action) => {
    switch(action.type) {
        case "ADDITEM":
            return [...state, action.payload];
        case "TOGGLE_COMPLETE":
            return state.map(eachItem => 
                eachItem.id === action.payload ? {...eachItem, completed: !eachItem.completed}:eachItem
            );
        default:
            return state;
    }
}