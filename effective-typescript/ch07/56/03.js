class PasswordChecker_ {
    checkPassword;
    constructor(passwordHash) {
        this.checkPassword = (password) => {
            return hash(password) === passwordHash;
        };
    }
}
const checker = new PasswordChecker(hash('s3cret'));
checker.checkPassword('s3cret'); // Returns true
export default {};
