/* @ngInject */
function classifiedsService($http) {
    var service = {
        getClassifieds: getClassifieds
    };
    return service;

    ////////////////

    function getClassifieds() {
      return $http.get('http://localhost:3000/')
        .success(function(data, status, headers, config) {
          return data;
        })
        .error(function(data, status, headers, config ) {
          console.log('Error: ' + data);
        });  
    };
};

module.exports = classifiedsService;