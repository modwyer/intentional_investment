var SHARED = (function () {

    function init() {
    }

    // Pass in an array of div ids to add/remove min-vh-100 class
    function adjust_min_vh_100_class(ids, media_param) {
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            if (window.matchMedia('' + media_param + '').matches) {
                $('#' + id + '').removeClass('min-vh-100');
            } else {
                $('#' + id + '').addClass('min-vh-100');
            }
        }
    }

	return {
        init: init,
        adjust_min_vh_100_class: adjust_min_vh_100_class
    };

}());

    