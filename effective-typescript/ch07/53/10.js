// tsConfig: {"experimentalDecorators":true}
class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    @logged
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
function logged(target, name, descriptor) {
    const fn = target[name];
    descriptor.value = function () {
        console.log(`Calling ${name}`);
        return fn.apply(this, arguments);
    };
}
console.log(new Greeter('Dave').greet());
// Logs:
// Calling greet
// Hello, Dave
export default {};
