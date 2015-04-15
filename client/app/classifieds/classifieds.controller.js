function Classifieds(classifiedsService) {
    var vm = this;
    vm.title = 'Classifieds';
    vm.data;


    activate();

    ////////////////

    function activate() {
      classifiedsService.getClassifieds()
        .then(function(response) {
          vm.data = response.data;
        });    
    }
}

module.exports  = Classifieds;
