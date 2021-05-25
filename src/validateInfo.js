export default function (details) {
    let errors = {}

    if (!details.username.trim()) {
        errors.username = '* Username Required'
    }

    if (!details.email) {
        errors.email = '* Email required';
    } else if (!/\S+@\S+\.\S+/.test(details.email)) {
        errors.email = '* Email address is invalid';
    }
    if (!details.password) {
        errors.password = '* Password is required';
    } else if (details.password.length < 3) {
        errors.password = '* Password needs to be 3 characters or more';
    }

    if (!details.password2) {
        errors.password2 = '* Password is required';
    } else if (details.password2 !== details.password) {
        errors.password2 = '* Passwords do not match';
    }
    return errors;
}