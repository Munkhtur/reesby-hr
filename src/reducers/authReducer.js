const initialState = {
    isAuthenticated: null,
    isAdmin: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.username === 'admin@mail.com') {
                return {
                    ...state,
                    isAuthenticated: true,
                    isAdmin: true,
                    user: action.payload
                }
            }
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,

            }

        case 'LOGOUT':

            return {
                ...state,
                isAuthenticated: false,
                isAdmin: false,
                user: null
            }
        default:
            return state
    }
}