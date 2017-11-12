'use strict';

eventsApp.controller( 'EventController', function( $scope, eventData ) {
  $scope.sortorder = 'name';
  $scope.boolVale = true;
  $scope.buttonDisabled = true;
  $scope.mystyle  = { color: 'red' };
  $scope.myclass  = "blue";

  $scope.snippet = '<span style="color:red"> Hi there!</span>';

  $scope.event = eventData.event;

  $scope.upVoteSession = function( session ) {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function( session ) {
    session.upVoteCount--;
  }
} );