var Flavor;
(function (Flavor) {
    Flavor[Flavor["VANILLA"] = 0] = "VANILLA";
    Flavor[Flavor["CHOCOLATE"] = 1] = "CHOCOLATE";
    Flavor[Flavor["STRAWBERRY"] = 2] = "STRAWBERRY";
})(Flavor || (Flavor = {}));
let flavor = Flavor.CHOCOLATE; // Type is Flavor
Flavor; // Autocomplete shows: VANILLA, CHOCOLATE, STRAWBERRY
Flavor[0]; // Value is "VANILLA"
export default {};
