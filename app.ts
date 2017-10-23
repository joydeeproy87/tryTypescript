// typescript basic variable types 'Boolean', 'Number', 'String', 'String Array'
var iswinter : Boolean = true;
var count : Number = 789;
var fname : String = 'ical47';
var fnames : String[] = ['ical47', 'joy', 'joydeep'];

// testing enum
enum names {ical47, joy, joydeep};
var alias : names = names.ical47;

// testing void function
function getName() : void{
   console.log(`Hello ${fnames[0]}`);
};

// testing printName function using an 'interface'
interface Name {
   name: String;
   age?: Number;
}

function printName(alias : Name) {
   console.log(alias.name);
}
printName({name: 'ical47', age: 29});
printName({name: 'joy'});

// testing classes
class Stark {
   name: String = 'Brandon';
   static castle: String = 'winterfell';
   saying: String;

   constructor() {
      this.saying = Stark.castle;
   }

   hello(person: string){
      console.log('Hello ' + person);
   }
}
var ned = new Stark();
ned.saying = 'winter is coming!';
ned.hello('Robert');
