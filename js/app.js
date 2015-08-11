var app = angular.module( 'calc_app', []);

app.service('calc_service', function () {
	this.cong = function ( number_a, number_b ) { return number_a + number_b };
	this.tru = function ( number_a, number_b ) { return number_a - number_b };
	this.nhan = function ( number_a, number_b ) { return number_a * number_b };
	this.chia = function ( number_a, number_b ) { return number_a / number_b };
});

app.controller( 'calc_controller', function ( $scope, calc_service ) {
	$scope.result = 0;
	$scope.cong = function () {
		$scope.result = calc_service.cong ( $scope.number_a, $scope.number_b );
	}
	$scope.tru = function () {
		$scope.result = calc_service.tru ( $scope.number_a, $scope.number_b );
	}
	$scope.nhan = function () {
		$scope.result = calc_service.nhan ( $scope.number_a, $scope.number_b );
	}
	$scope.chia = function () {
		$scope.result = calc_service.chia ( $scope.number_a, $scope.number_b );
	}
});