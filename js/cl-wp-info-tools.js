/* jshint devel:true */

( function( $ ) {
	'use strict';

	$( function() {

		function muestra_solo_div_actual( div_actual ) {
			$( '#cl-content-wpo' ).hide();
			$( '#cl-content-ttfb' ).hide();
			$( '#cl-content-http2' ).hide();
			$( '#cl-content-dns' ).hide();
			$( '#cl-content-gzip' ).hide();
			$( '#cl-content-mail' ).hide();

			$( div_actual ).show( '400' );
		}

		//**************************************************//
		// Evento al hacer click en los diferentes botones //
		//************************************************//
		$( '#cl-wpo' ).on( 'click', function() {
			muestra_solo_div_actual( '#cl-content-wpo' );
		});

		$( '#cl-ttfb' ).on( 'click', function() {
			muestra_solo_div_actual( '#cl-content-ttfb' );
		});

		$( '#cl-http2' ).on( 'click', function() {
			muestra_solo_div_actual( '#cl-content-http2' );
		});

		$( '#cl-dns' ).on( 'click', function() {
			muestra_solo_div_actual( '#cl-content-dns' );
		});

		$( '#cl-gzip' ).on( 'click', function() {
			muestra_solo_div_actual( '#cl-content-gzip' );
		});

		$( '#cl-mail' ).on( 'click', function() {
			muestra_solo_div_actual( '#cl-content-mail' );
		});
	}); // Fin del evento de carga del DOM.

})( jQuery );


