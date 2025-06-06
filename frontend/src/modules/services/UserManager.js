import User from "../User";

export default class UserManager {
    constructor(name) {
        this.name = name
        this.users = [];
        this.loadUsers()
    }

    async register(uname, password) {
        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: uname, password })
            });

            const data = await response.json();

            if (response.ok) {
                let user = new User(uname, password)
                this.users.push(user)
                this.saveUsers()
                return true;
            } else {
                alert(data.message || "Registration failed");
                return false;
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert("Registration failed: Server connection error");
            return false;
        }
    }

    async login(username, password) {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                return true;
            } else {
                alert(data.message || "Login failed");
                return false;
            }
        } catch (error) {
            console.error('Login error:', error);
            alert("Login failed: Server connection error");
            return false;
        }
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