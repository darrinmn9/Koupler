angular.module('koupler.profile', [])

.controller('ProfileCtrl', function() {
  var vm = this;
  //placeholder for POST request until routeParam is set up
  // vm.username = $state.params.username;
  vm.myKarmaTest = true;

  // vm.isAuthorized = true;

  // vm.testUser = {
  //   username: 'testUser',
  //   contactInfo: {
  //     name1: 'Boozer',
  //     name2: 'Woof',
  //     email: 'woof@bark.com',
  //     phone: 7465746374
  //   },
  //   profilePic: 'http://www.qykapp.com/article/content/images/2015/06/dog-1-1.jpg',
  //   activities: ['eating human food', 'playing catch', 'pooping', 'hunting squirrels', 'getting into the trash', 'chasing cats', 'cuddling'],
  //   profileInfo: {
  //     'About Us': "We're a fun-loving couple of scruffy pups looking to go on a dog date."
  //   }
  // };

  // vm.goToActivities = function() {
  //   $state.go('activities');
  // };

  // vm.profileData = {};

  // vm.getProfileInfo = function() {
  //   var token = AuthTokenFactory.getToken();
  //   //GET request should respond with user's profile picture, interests, about, memories, etc.
  //   $http.get('/profile', {params:
  //     {token: token}
  //   })
  //     .then(function(response) {
  //       if (response.data.isAuthorized) {
  //         vm.isAuthorized = true;
  //       }
  //       vm.profileData = response.data; //looks like [{about us: "", username: ""}]
  //     });
  // };

  // vm.getProfileInfo();

  // vm.uploadFiles = function(file) {
  //   vm.f = file;
  //   if (file && !file.$error) {
  //     file.upload = Upload.upload({
  //       url: '/profile/' + vm.username + '/pic',
  //       file: file,
  //       method: 'POST'
  //     });

  //     file.upload.then(function(response) {
  //       //should send back src url for img
  //     }, function(response) {
  //       vm.errorMsg = response.status;
  //     });
  //   }
  // };
});
