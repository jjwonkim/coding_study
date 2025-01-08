// tsConfig: {"noImplicitAny":false,"strictNullChecks":false}
class Greeting {
    greeting;
    name;
    constructor(name) {
        this.greeting = 'Hello';
        this.name = name;
    }
    greet() {
        return this.greeting + ' ' + this.name;
    }
}
export default {};
