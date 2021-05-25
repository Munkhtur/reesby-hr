const initialState = { msg: '' }

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case 'SET_ERROR':
            return { ...state, msg: payload }
        case "CLEAR_ERROR":
            return { ...state, msg: '' }
        default:
            return state
    }
}