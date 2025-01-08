var Flavor;
(function (Flavor) {
    Flavor["VANILLA"] = "vanilla";
    Flavor["CHOCOLATE"] = "chocolate";
    Flavor["STRAWBERRY"] = "strawberry";
})(Flavor || (Flavor = {}));
let flavor = Flavor.CHOCOLATE; // Type is Flavor
flavor = 'strawberry';
// ~~~~~~ Type '"strawberry"' is not assignable to type 'Flavor'
function scoop(flavor) {
    /* ... */
}
export default {};
