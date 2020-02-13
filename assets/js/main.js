var MAIN = (function () {

    function init() {
        HOME.init();
        CAROUSEL.init();
        MEDSCHOOLS.init();
        HOSPITALS.init();
        ROUTER.init();
    }

	return {
        init: init
    };

}());