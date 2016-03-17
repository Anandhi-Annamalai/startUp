app.controller('mainController', function($scope,$http) {
    var employee=$http.get("https://www.json-generator.com/api/json/get/bIJJxLsLVK?indent=2")
    .then(function(response) {$scope.employees= response.data.records;});
	$scope.sortBy="Name";
	$scope.removeRow = function(){				
		var index = 0;		
		$scope.employees.splice(index, 1 );		
	};

	$scope.obj = {};
 $scope.obj.firstname = "Mahatma";
 $scope.obj.lastname = "Gandhi";
 $scope.obj.userid = "ma23gan";
 $scope.obj.email = "anandhi@anandhi.com";
 $scope.obj.phoneNo = "564565656";
 $scope.obj.add = "dxcvzx,fgfdgg";

 $scope.storedata = function() {
    console.log("Storing Data now");
    TestResource.save($scope.obj);
    console.log("Data should have been stored");
 }
});


app.factory('TestResource', ['$resource', function($resource) {
  return $resource('json/data.json', {}, {} );
}]);

  

