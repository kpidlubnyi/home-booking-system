class User {
    #password;

    constructor(username, password){
        this.username = username
        this.setPassword(password)
    }

    setPassword(password) {
        if (password.length < 6){
            throw new Error('Hasło musi być większe niż 6 znaków!')
        }
        this.#password = password
    }

    getPassword() {
        return this.#password
    }

    validatePassword(password){
        if (password === this.getPassword()) {
            return true
        }
    }

    toJSON() {
        return {
            username : this.username,
            password : this.getPassword()
        }
    }
}

module.exports = User