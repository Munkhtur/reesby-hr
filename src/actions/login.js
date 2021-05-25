export const login = (user) => (dispatch) => {

    dispatch({
        type: "LOGIN",
        payload: user
    })
}