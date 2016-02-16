var Person = function(name) {
  var firstName = name.substr(0, name.indexOf(" "));
  var lastName = name.substr(name.indexOf(" ")+1, name.length-1);

  this.setFullName = function(name) {
    firstName = this.setFirstName(name.substr(0, name.indexOf(" ")));
    lastName = this.setLastName(name.substr(name.indexOf(" ")+1, name.length-1));
  };
  this.setFirstName = function(name) {
    firstName = name;
  };
  this.setLastName = function(name) {
    lastName = name;
  };
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
};

var ian = new Person("Ian Moreno");
var show = ian.getFullName();
console.log(show);
