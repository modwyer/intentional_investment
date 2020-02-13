var HOME = (function () {

    function generate_main_navbar() {
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

    function init() {
    }

	return {
        init: init,
        create_navbar: generate_main_navbar
    };
}());