const addOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}

export default addOrder;