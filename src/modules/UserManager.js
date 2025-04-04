const User = require('/src/modules/User')

class UserManager {
    constructor(name) {
        this.name = name
        this.users = [];
        this.loadUsers()
    }

    register(uname, password) {
        if (this.users.find(user => user.username === uname)) {
            alert("Username already taken!")
            return false
        }

        let user = new User(uname, password)
        this.users.push(user)
        this.saveUsers()
        return true
    }

    login(username, password) {
        let user = this.users.find(u => u.username === username)
        if (user && user.validatePassword(password))
            return true
        return false
    }

    saveUsers() {
        const usersData = this.users.map(user => user.toJSON())
        localStorage.setItem(`userManager_${this.name}`, JSON.stringify(usersData))
    }

    loadUsers() {
        const savedData = localStorage.getItem(`userManager_${this.name}`)

        if (savedData){
            const usersData = JSON.parse(savedData)

            this.users = []

            usersData.forEach(userData => {
                let user = new User(userData.username, userData.password)
                this.users.push(user)
            })
        }
    }
}

module.exports = UserManager