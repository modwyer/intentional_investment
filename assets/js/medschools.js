var MEDSCHOOLS = (function () {

    function generate_medschool_navbar() {
        //alert("medschool create navbar hit");
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
        //alert("hit2 : " + ret);
        return ret;
    }

    function init() {
    }

    return {
        init: init,
        create_navbar: generate_medschool_navbar
    };

}());