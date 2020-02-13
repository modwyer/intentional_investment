var MEDSCHOOLS = (function () {
    var navbar = '';

    function generate_navbar() {
        var ret = "<ul class=\"navbar-nav text-left ml-auto\" id=\"nav_bar\">" +
        "<li class=\"nav-item active\">" +
        "<a class=\"nav-link\" href=\"#\">Home</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">Med Schools <span class=\"sr-only\">(current)</span></a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">Residency Programs</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">Kind Words</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">Calculator</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">About</a>" +
        "</li>" +
        "</ul>"; 
        return ret;
    }

    function get_navbar() {
        return navbar;
    }

    function init() {
        navbar = generate_navbar();
    }

    return {
        init: init,
        get_navbar: get_navbar
    };

}());