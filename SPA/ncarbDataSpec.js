describe('Has at least one Cert holder in Washington DC', function () {
			var $rootScope, $scope, $controller, $http;

			beforeEach(module('ncarbApp'));
			beforeEach(inject(function(_$scope_, _$http_, _$controller_){
				$scope = _$scoope_;
				$http = _$http_;
				$controller = _$controller_;

				$controller('ncarbApp', {'scope': $scope, '$http': $http});
			}));
			it('Should have Washington DC',function() {
				expect($scope.values).toContain(city: 'Washington DC')
			});
			
		});