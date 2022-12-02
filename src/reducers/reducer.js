import '../App.css';

const intialState = {
    list: [
        { name: "Sam Slinger", unitPrice: 200 },
        { name: "Dan Smith", unitPrice: 150 },
        { name: "Slim September", unitPrice: 300 },
        { name: "Niel Dread", unitPrice: 250 },
        { name: "Mark Hanson", unitPrice: 550 },
    ],
    upcoming: [],

    ToDo: [
        { name: "Sam Slinger", unitPrice: 200 },
    ],
    ToDoList: []

}

const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
        return {
            ...state,
            upcoming: [...state.upcoming, action.data]
        }

        case "ADD_TO_DO":
        return {
            ...state,
            ToDoList: [...state.ToDoList, action.data]
        }
        
        default: return state;
    }
}

export default mainReducer;