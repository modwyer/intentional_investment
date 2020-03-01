var MAIN = (function () {

    function init() {
        HOME.init();
        CAROUSEL.init();
        MEDSCHOOLS.init();
        HOSPITALS.init();
        ROUTER.init();
        ABOUT.init();
    }

    function menu_click() {
        $(".navbar-collapse").collapse('hide');
    }

	return {
        init: init,
        menu_click: menu_click
    };

}());