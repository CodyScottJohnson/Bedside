'use strict';

describe('Service: Alarm', function () {

  // load the service's module
  beforeEach(module('lysAdminApp'));

  // instantiate service
  var Alarm;
  beforeEach(inject(function (_Alarm_) {
    Alarm = _Alarm_;
  }));

  it('should do something', function () {
    expect(!!Alarm).toBe(true);
  });

});
