var HOSPITALS = (function () {

    function blah() {
        alert("blah");
    }

    function generate_hospital_navbar() {
        var ret = "<ul class=\"navbar-nav text-left ml-auto\" id=\"nav_bar\">" +
        "<li class=\"nav-item active\">" +
        "<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>" +
        "</li>" +
        "<li class=\"nav-item\">" +
        "<a class=\"nav-link\" href=\"#\">What You'll Learn</a>" +
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
        create_navbar: generate_hospital_navbar
    };

}());