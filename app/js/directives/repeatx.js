eventsApp.directive( 'repeatX', function( $compile ) {
  return {
    // // perfermance issue: $compile is a expensive procedure
    // link: function( scope, element, attributes, controller ) {
    //   for ( var i = 0; i < Number( attributes.repeatX ) - 1; i++ ) {
    //     element.after($compile(element.clone().attr('repeat-x', 0))(scope));
    //   }
    // }

    // you can return a link function from compile function and this link function will be implemented for each element
    compile: function( element, attributes ) {
      for ( var i = 0; i < Number( attributes.repeatX ) - 1; i++ ) {
        element.after( element.clone().attr( 'repeat-x', 0 ) );
      }
      return function( scope, element, attributes, controller ) {
        attributes.$observe( 'text', function( newValue ) {
          if ( newValue === 'hello' ) {
            element.css( 'color', 'red' );
          }
        } );
      }
    }
  };
} );