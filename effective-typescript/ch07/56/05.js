class PasswordChecker {
    password;
    constructor() {
        this.password = 's3cret';
    }
    checkPassword(password) {
        return password === this.password;
    }
}
const checker = new PasswordChecker();
const password = checker.password;
export default {};
