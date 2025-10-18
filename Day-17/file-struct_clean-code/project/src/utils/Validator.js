function isEmailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

module.exports = { isEmailValid };

