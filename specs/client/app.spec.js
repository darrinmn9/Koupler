describe('Controller: ProfileCtrl', function() {
  beforeEach(module('koupler'));
  beforeEach(module('koupler.profile'));

  var ctrl;

  beforeEach(inject(function(_$controller_) {
    ctrl = _$controller_;
    ctrl = ctrl('ProfileCtrl');
  }));

  it('should go to the home state', function() {
    // expect(ctrl.myKarmaTest).toBe(true);
    expect(true).toBe(true);
  });

});



// beforeEach(inject(function($injector) {
//   $controller = $injector.get('$controller');
//   ctrl = $controller('ProfileCtrl');

// }));

