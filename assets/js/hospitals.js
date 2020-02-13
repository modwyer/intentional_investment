var HOSPITALS = (function () {
    var navbar = '';

    function generate_navbar() {
        return `<ul class="navbar-nav text-left ml-auto" id="nav_bar">
        <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">What You'll Learn</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Kind Words</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Calculator</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">About</a>
        </li>
        </ul>`; 
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