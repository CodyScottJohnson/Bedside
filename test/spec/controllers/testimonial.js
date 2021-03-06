'use strict';

describe('Controller: TestimonialCtrl', function () {

  // load the controller's module
  beforeEach(module('lysAdminApp'));

  var TestimonialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestimonialCtrl = $controller('TestimonialCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestimonialCtrl.awesomeThings.length).toBe(3);
  });
});
