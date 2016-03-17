app.factory('getDataService', function($http) {
    return {
        getData: function(done) {
            $http.get("http://www.json-generator.com/api/json/get/bIJJxLsLVK?indent=2")
            .success(function(data) { 
                done(data);
            })
            .error(function(error) {
                alert('An error occured');
            });
        }
    }
});