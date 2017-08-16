/*!
	* jQuery wait plugin
	* Original author: Vladyslava Prykhodko github.com/Ajjya
	* Licensed under the MIT license
*/
'use strict';
(function(window, $){

	var methods = {
		init : function( options ) {
			var $this = $(this);
			var el = this;

			if($this.find('.flwait').size() == 0){
				$this.append("<div class='flwait'></div>");
			}
			

			return this.each(function(){
				var $this = $(this);
			});
		},
		show : function( ) {
			var $this = $(this);
			$this.children('.flwait').show();
		},
		hide : function( ) {
			var $this = $(this);
			$this.children(".flwait").fadeOut(350);
		}
	}

	$.fn.flwait = function( method ) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Methoth with name ' +  method + ' doesn`t exist for jQuery.flmodal' );
		} 
	};
})(window, jQuery);

