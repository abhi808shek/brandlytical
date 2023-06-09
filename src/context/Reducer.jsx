export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'SET_INFLUENCERS':
            return { ...state, influencers: action.influencers };
        case 'ADD_TO_CART':
            return {...state, cart:[...state.cart, { ...action.payload, qty:1 }]}
        case 'REMOVE_FROM_CART':
            return {...state, cart:state.cart.filter(c=>c.influencer_id !== action.payload.influencer_id)}
        case 'CLEAR_CART':
            return { cart:[] }

        default:
            return state;
    }
}

export const userReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { user: action.payload, isLoggedIn: true }
        case 'LOGOUT':
            return { user: null, isLoggedIn: false }
        default:
            return state;   
    }
}


export const filterReducer = (state, action) => {
    switch(action.type) {

        case 'BY_GENDER':
            return{...state, genderFilter: action.payload}
        case 'BY_SEARCH':
            return{...state, searchQuery: action.payload}
        case 'BY_COST':
            return{...state, costFilter: action.payload}
        case 'CLEAR_FILTERS':
            return {
                genderFilter: [],
                costFilter: [0, 5000],
                searchQuery: ""
            }

        default:
            return state
    }
}