  (function() {
    'use strict';
    //john papa style guide
    angular.module('myApp',[])//the second parameter is because it needs to be a setter and not a getter?
    // $('#two').val() //here it is acting as a getter
    // $('#two').val('2') //here it is acting as a setter
    //john papa way
    angular.module('myApp')
    .controller('myController',myController)
    .controller('secondController',secondController)
    .controller('thirdController',thirdController)

    //myController function
    function myController(){
      var myCtrl = this
      myCtrl.name = "The John Papa Way!"

      myCtrl.setName = function(name){
        myCtrl.name = name
      }
    }
    function secondController(){
      var sCtrl = this
      sCtrl.name = "second controller"
    }

    function thirdController(){
      var tCtrl = this
      tCtrl.name = "BOOM I GOT DA CONTROLLER!"
    }

  }());
//use strict doesn't allow you to pollute the global variable space, will not let you override variables
//if they have the same name.
