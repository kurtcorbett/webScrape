// I am just creating a named function that will be exported below.
// You don't need $scope now that you are using controllerAs syntax
function Main() {
    //  Anything attached to this will be attached to the scope and usable in the html file
    // You can alias this like you are doing, or just use this.title and this.name
  var vm = this;
  vm.title = 'Main';
  vm.name = "Kurt";
  vm.data = 'beans';


  activate();

  ////////////////

  function activate() {
  
  }
  
};


// Exporting what I want from this file.  It can be a single function or a complex object.
module.exports = Main;