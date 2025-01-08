class Person {
    name;
    first;
    last;
    constructor(name) {
        this.name = name;
        ;
        [this.first, this.last] = name.split(' ');
    }
}
export default {};
