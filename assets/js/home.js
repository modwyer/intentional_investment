var HOME = (function () {
    var navbar = '';
    var cards = '';

    // CARDS GROUP 1
    var cards_1 = {
        'title': "Financial Independence isn't something you stumble upon.",
        'text': "It takes intention, dedication, and discipline to reach Financial Independence.</br></br>Past generations called this retirement. Your generation will redefine it…but only if you start the journey, and your story, exceptionally well.</br></br>You’ve made an intentional investment in your medical education.  Now it’s time to be intentional about your financial future.",
        'img': "./assets/images/content/jandl.jpeg",
        'imgStyle': "padding: 75px;",
        'textStyle': "padding: 10px 50px 0;"
    };
    // CARDS GROUP 2
    var cards_2 = {
        'title': "Learn the basics.  Set your intention.",
        'text': "At this point in your journey, you don't need a financial planner.  You need <b>financial education</b>.  This is financial eduation, simplified.</br></br><b>Nothing to sell.  Unbiased.  No commissions.</b>  No advice.  Just <b>education and information</b> to empower your decsions.  Hear the stories and lessons that would have made math class more interesting.</br></br>Money is a tool, not a goal.  Make an intentional investment in learning how to master that tool.  <b>Set your intention</b>.  Write your story.",
        'img': "./assets/images/content/doctors.jpeg"
    };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
                <div class="container-fluid card-group">
                    <div class="row align-items-center min-vh-100">
                        <div class="card col-md-5" >
                            <div class="card-body">
                                <h2 class="card-title">` + cards_1.title + `</h2>
                                <p class="card-text">` + cards_1.text + `</p>
                            </div>
                        </div>
                        <div class="card col-md-7">
                            <div class="card card-image">
                                <img class="card-img-top" src="` + cards_1.img + `" alt="Card image">
                            </div>
                        </div>
                    </div>
                </div>
                `;
        },
        'create_cards_2': function() {
            return `
                <div class="container-fluid card-group">
                    <div class="row align-items-center min-vh-100">
                        <div class="card col-md-12">
                            <div class="card border-light">
                                <img class="card-img-top" src="` + cards_2.img + `" alt="Card image">
                                <div class="card-img-overlay">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-md-12" >
                            <div class="card-body">
                                <h5 class="card-title">` + cards_2.title + `</h5>
                                <p class="card-text">` + cards_2.text + `</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        }
    };

    function generate_navbar() {
        return`<ul class="navbar-nav text-left ml-auto" id="nav_bar">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a id="homeMedLink" class="nav-link" href="#MedSchools">Med Schools</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Hospitals">Hospitals</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Calculator</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
        </ul>`;
    }

    function generate_cards() {
        var ret = '';
        var total_card_groups = Object.keys(create_cards_functions).length
        
        for(var i = 1; i <= total_card_groups; i++) {
            var cards = create_cards_functions["create_cards_" + i]();
            ret += cards;
        }
        return ret;
    }

    function get_navbar() {
        return navbar;
    }

    function get_cards() {
        return cards;
    }

    function init() {
        navbar = generate_navbar();
        cards = generate_cards();
    }

	return {
        init: init,
        get_navbar: get_navbar,
        get_cards: get_cards
    };

}());