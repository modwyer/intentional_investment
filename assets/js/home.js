var HOME = (function () {
    var navbar = '';

    function generate_navbar() {
        var ret = "<ul class=\"navbar-nav text-left ml-auto\" id=\"nav_bar\">" +
        "<li class=\"nav-item active\">" +
        "<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a id=\"homeMedLink\" class=\"nav-link\" href=\"#MedSchools\">Med Schools</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#Hospitals\">Hospitals</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">Calculator</a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">About</a>" +
        "</li>" +
        "</ul>"; 
        //alert("hit2 : " + ret);
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