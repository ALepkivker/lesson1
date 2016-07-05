( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    $( "#str1" ).css( "color","red");
    $( "#str2" ).css( "text-decoration","underline");
    $( "#str2" ).css( "text-decoration-style","solid");
    $( "#str3" ).css( "text-decoration","line-through");
    $( "#str3" ).css( "text-decoration-style","solid");
    	
} () );

		


