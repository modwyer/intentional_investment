var SHARED = (function () {

    function init() {
    }

    // Pass in an array of div ids to 
    function adjust_min_vh_100_class(ids, media_param) {
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            if (window.matchMedia('' + media_param + '').matches) {
                $('#' + id + '').removeClass('min-vh-100');
            } else {
                $('#' + id + '').addClass('min-vh-100');
            }
        }

        // if (window.matchMedia("(min-width: 768px)").matches) {
        //     $('#' + card1_id + '').removeClass('min-vh-100');
        //     $('#' + card2_id + '').removeClass('min-vh-100');
        //     $('#' + card3_id + '').removeClass('min-vh-100');
        //     $('#' + card4_id + '').removeClass('min-vh-100');
        //     $('#' + card5_id + '').removeClass('min-vh-100');
        //     $('#' + card6_id + '').removeClass('min-vh-100');
        // } else {
        //     $('#' + card1_id + '').addClass('min-vh-100');
        //     $('#' + card2_id + '').addClass('min-vh-100');
        //     $('#' + card3_id + '').addClass('min-vh-100');
        //     $('#' + card4_id + '').addClass('min-vh-100');
        //     $('#' + card5_id + '').addClass('min-vh-100');
        //     $('#' + card6_id + '').addClass('min-vh-100');
        // }
    }

	return {
        init: init,
        adjust_min_vh_100_class: adjust_min_vh_100_class
    };

}());

    