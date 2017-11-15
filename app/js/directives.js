'use strict';

eventsApp.directive( 'mySample', function( $compile ) {
  // return {
  //   link: function( scope, element, attrs, controller ) {
  //     var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
  //     angular.element( element ).html( $compile( markup )( scope ) );
  //   }
  // };

  // if all we what is replace the directive with some html, we don't need to do the link function
  return {
      restrict: 'E',
      template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
  };
} );