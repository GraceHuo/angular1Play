eventsApp.factory( 'eventData', function( $http, $log, $resource ) {
  // var resource = $resource('/data/event/:id', {id: '@id'}, {"getAll":[method: "GET", isArray:true, params: [something: "foo"]]});
  var resource = $resource('/data/event/:id', {id: '@id'});
  return {
    // getEvent: function( ) {
    //   return $http( {
    //     method: 'GET',
    //     url   : '/data/event/1'
    //   } );
    // }
    getEvent: function(  ) {
      return resource.get({id:1});
    },
    save: function( event ) {
      event.id = 999;
      return resource.save(event);
    }
  };
} );