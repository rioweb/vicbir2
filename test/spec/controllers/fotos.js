'use strict';

describe('Controller: FotosCtrl', function () {

  // load the controller's module
  beforeEach(module('vicbir2App'));

  var FotosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FotosCtrl = $controller('FotosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FotosCtrl.awesomeThings.length).toBe(3);
  });
});
