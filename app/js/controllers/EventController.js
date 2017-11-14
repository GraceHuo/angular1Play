'use strict';

eventsApp.controller( 'EventController', function( $scope, $anchorScroll, $location, eventData, $routeParams, $route ) {
  console.log( $route.current.foo );
  console.log( $route.current.params.foo );
  console.log( $route.current.pathParams.eventId );

  $scope.sortorder      = 'name';
  $scope.boolVale       = true;
  $scope.buttonDisabled = true;
  $scope.mystyle        = { color: 'red' };
  $scope.myclass        = "blue";

  $scope.snippet = '<span style="color:red"> Hi there!</span>';

  // $resource
  $scope.event = eventData.getEvent( $routeParams.eventId );

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
  };

  $scope.reload = function() {
    $route.reload();
  };

} );