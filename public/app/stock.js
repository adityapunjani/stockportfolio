function stockCtrl($scope) {

  $scope.buyStock = function(index) {

    var x = parseInt(prompt("How many?", 0));
    now.buy(index, x);
  };

  $scope.sellStock = function(index) {

    var x = parseInt(prompt("How many?", 0));
    now.sell(index, x);
  };


  now.updateChange = function() {
    $scope.$apply(function() {
      $scope.companies = now.companies;

    });
  }
};