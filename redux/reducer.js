const initialState = {
    shopCartList: [],
    categories: [],
    token: null,
    userId: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'addToShopCart':
            return {
                ...state,
                shopCartList: [...state.shopCartList, action.payload]
            }
        case 'getCategories':
            return {
                ...state,
                categories: action.categories
            }
        case 'authenticate':
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        default:
            return state
    }
}