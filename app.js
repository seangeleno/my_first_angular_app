  (function() {
    'use strict';
    angular.module('myApp',[])//the second parameter is because it needs to be a setter and not a getter?
    // $('#two').val() //here it is acting as a getter
    // $('#two').val('2') //here it is acting as a setter

  }());
//use strict doesn't allow you to pollute the global variable space, will not let you override variables
//if they have the same name.
