// class Person
class Person {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
   dance() {
      console.log(this.name + ' is dancing');
   }
}

var bran = new Person('bran');
bran.dance();

// extending AwesomePerson using inheritence
class AwesomePerson extends Person {
   dance(){
      console.log('so awesome');
      super.dance();
   }
}

var robb = new AwesomePerson('Robb');
robb.dance();
