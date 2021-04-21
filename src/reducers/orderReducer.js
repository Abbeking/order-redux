let initialState = {
    order: []
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ORDER':
            return {
                //Skriv över den tomma arrayen med en ny array från action.payload
                //payload är ett godtyckligt namn och kan egentligen heta något annat om man vill
                order: action.payload
            }
        default:
            return state;
    }
}

export default orderReducer;