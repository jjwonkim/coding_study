// tsConfig: {"noImplicitAny":false}
class Person {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    getName() {
        return this.first + ' ' + this.last;
    }
}
const marie = new Person('Marie', 'Curie');
const personName = marie.getName();
export default {};
