'use strict';

eventsApp.controller( 'EventController', function( $scope, $anchorScroll, $location, eventData ) {
  $scope.sortorder      = 'name';
  $scope.boolVale       = true;
  $scope.buttonDisabled = true;
  $scope.mystyle        = { color: 'red' };
  $scope.myclass        = "blue";

  $scope.snippet = '<span style="color:red"> Hi there!</span>';

  // $resource
  $scope.event = eventData.getEvent();

  // $http
  // eventData.getEvent()
  //   .success( function( event ) {
  //     $scope.event = event;
  //   } )
  //   .error( function( data, status, headers, config ) {
  //     $log.warn( data, status, headers, config );
  //   } );

  $scope.upVoteSession = function( session ) {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function( session ) {
    session.upVoteCount--;
  };

  $scope.scrollToSession = function() {
    $anchorScroll( "session3" );
  }
} );