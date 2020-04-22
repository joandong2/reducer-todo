export const initialState = [
    {
        todo: "Learn about reducers",
        completed: false,
        id: 3892987589,
    },
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("ADD_TODO");
            return [...state, action.payload];
        case "TOGGLE_COMPLETE":
            console.log("TOGGLE_COMPLETE");
            return state.map((todo) => {
                return todo.id === Number(action.payload.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo;
            });
        case "FILTER_COMPLETED_ITEMS":
            console.log("FILTER_COMPLETED_ITEMS");
            return state.filter((todo) => !todo.completed);
        default:
            return state;
    }
};
