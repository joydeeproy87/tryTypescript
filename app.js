// typescript basic variable types 'Boolean', 'Number', 'String', 'String Array'
var iswinter = true;
var count = 789;
var fname = 'ical47';
var fnames = ['ical47', 'joy', 'joydeep'];
// testing enum
var names;
(function (names) {
    names[names["ical47"] = 0] = "ical47";
    names[names["joy"] = 1] = "joy";
    names[names["joydeep"] = 2] = "joydeep";
})(names || (names = {}));
;
var alias = names.ical47;
// testing void function
function getName() {
    console.log("Hello " + fnames[0]);
}
;
function printName(alias) {
    console.log(alias.name);
}
printName({ name: 'ical47', age: 29 });
printName({ name: 'joy' });
// testing classes
var Stark = (function () {
    function Stark() {
        this.name = 'Brandon';
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log('Hello ' + person);
    };
    Stark.castle = 'winterfell';
    return Stark;
}());
var ned = new Stark();
ned.saying = 'winter is coming!';
ned.hello('Robert');
