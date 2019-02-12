$(document).ready(function() {
  $('.mainbag').viewScroller({
      useScrollbar: false,
      changeWhenAnim: false, // Change views when they are changing
      beforeChange: null, // Callback which is called before views change
	    afterChange: null, // Callback which is called after views change
  });
});
