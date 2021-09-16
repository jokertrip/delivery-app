import Category from '../models/Category.js';

export const addToShopCart = (payload) => ({type: 'addToShopCart', payload})

export const authenticate = (userId, token) => {
    return dispatch => {
        dispatch({type: 'authenticate', userId: userId, token: token})
    }
}

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch (
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCE_MKBEtYr7gUVE6Oe7xar6A8418Agt_4',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if (!response.ok){
            throw new Error(message)
        }

        const resData = await response.json()
        console.log(resDate)
        dispatch(authenticate(
            resData.localId,
            resData.idToken
        ))
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch (
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCE_MKBEtYr7gUVE6Oe7xar6A8418Agt_4',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if (!response.ok){
            throw new Error(message)
        }

        const resData = await response.json()


        dispatch(authenticate(
            resData.localId,
            resData.idToken
        ))
    }
}

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                'https://deliveryapp-ce7b5-default-rtdb.firebaseio.com/category.json'
            )

            if(!response.ok){
                throw new Error('Something went wrong!')
            }

            const resData = await response.json()

            const loadCategories = []

            for( const key in resData){
                loadCategories.push(
                    new Category(
                        key,
                        resData[key].title,
                        resData[key].imageUrl
                    )
                )
            }

            dispatch({
                type: 'getCategories',
                categories: loadCategories
            })
        }catch(err) {
            throw err
        }
    }
}