export const setError = (msg) => dispatch => {
    dispatch({ type: 'SET_ERROR', payload: msg })
    // setTimeout(clearError(), 3000)

}

export const clearError = () => dispatch => {
    dispatch({ type: 'CLEAR_ERROR' })
}