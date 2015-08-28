( function() {
	'use strict';
	var getSelection = window.getSelection || function(){return {};};
	document.addEventListener('click', function(e){

		if(e.defaultPrevented || ('form' in e.target) || e.target.matches('a[href], a *') || !e.target.matches('.rb-item, .rb-item *')){return;}
		var event, selection;
		var item = e.target.closest('.rb-item');
		var link = item.querySelector('.item-link');

		if(link){
			selection = window.getSelection();
			if(selection.anchorNode && !selection.isCollapsed && item.contains(selection.anchorNode)){
				return;
			}
			if(window.MouseEvent && link.dispatchEvent){
				event = new MouseEvent('click', {shiftKey: e.shiftKey, altKey: e.altKey, ctrlKey: e.ctrlKey, metaKey: e.metaKey});
				event.stopImmediatePropagation();
				link.dispatchEvent(event);
			} else if(link.click) {
				link.click();
			}
		}
	});
})();
