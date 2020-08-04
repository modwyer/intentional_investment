var MEDSCHOOLS = (function () {
    var cards = '';
    var banner = '';
    var card_id_list = [ 'card_1', 'card_2', 'card_3', 'card_4', 'card_5', 'card_6' ];

    var cards_1 = {
        'title': "High Debt + High Salary = Serious need for education",
        'text': `
            <p><ul>
            <li>33% of medical students carry >$200,000 in student debt</li>
            <li>75% of med students reported being unprepared to handle future financial decisions (Dahle)</li>
            <li>48% of physicians consider themselves behind schedule in saving for retirement</li>
            <li>Most miss out on investing in their 20s (the best decade for compounding growth)</li>
            </ul><p>
        `,
        'img': "./assets/images/content/topViewTable.jpeg"
    };
    var cards_2 = {
        'title': "A Flawed System",
        'text': `
            <p>The financial system is slanted towards benefiting sales reps making commissions, not on educating investors. Conflicts of interest abound. Self-education feels overwhelming at this stage.</p>
            <p>The solution: provide a simple framework of financial literacy. Complete their medical school training with a few hours of education that is objective, tailored to their circumstances, and easy to understand.<p>
        `,
        'img': "./assets/images/content/calculator.jpeg"
    };
    var cards_3 = {
        'title': "Just-In-Time Financial Education",
        'text': `
            <p>Your students are at the crux of many critical decisions: Rent or buy in residency? Attack loans or invest? Invest conservatively or aggressively? Rural or urban?</p>
            <p>Not having basic knowledge of finance can cause anxiety, poor financial decisions, and avoidable losses.</p>
            <p>Give them relevant information. Timely lessons. This is an essential, but often but overlooked curriculum component that is necessary to make your students life-ready and future-ready.<p>
        `,
        'img': "./assets/images/content/classroom.jpeg"
    };
    var cards_4 = {
        'title': "Provide the core concepts they need",
        'text': `
            <p>Teach them the core concepts to reach financial independence with:</p>
            <ul>
            <li>strategies to attack student loans during and after residency</li>
            <li>housing plans and options for residency and beyond</li>
            <li>cost of living differences between cities and net worth impact</li>
            <li>investment strategies such as diversification, compounding interest, dollar cost averaging</li>
            <li>translating differences between 401(k), 403(b), 457(b), IRA, Roth, HSA and brokerage accounts</li>
            <li>minimizing taxes</li>
            <li>understanding life insurance-not from a salesperson</li>
            <li>how stocks, bonds and mutual funds work</li>
            <li>hands-on calculator workshop</li>
            <li>lessons on depreciating assets</li>
            <li>how to create a prioritized list of financial goals</li>
            <li>wills, trusts, legal protections</li>
            </ul>
        `,
        'img': "./assets/images/content/bwJen.jpeg"
    };
    var cards_5 = {
        'title': "Be on the leading edge",
        'text': `
            <p>Help your new physicians win the money game. Be on the leading edge of offering a well-rounded medical education.</p>
            <p>They’ll have the income they need. Give them the tools necessary to get their financial life in order, so they can devote more energy to learning and practicing good medicine.</p>
        `,
        'img': "./assets/images/content/docsMonitor.jpeg"
    };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
                <div class="container-fluid card-group ms-card1">
                    <div id="card_1" class="row align-items-center min-vh-100">
                        <div class="card col-sm-5" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title ms-card1-title">` + cards_1.title + `</h2>
                                <span class="card-text ms-card1-text">` + cards_1.text + `</span>
                            </div>
                        </div>
                        <div class="card col-sm-7">
                            <div class="card ms-card1-image">
                                <img class="card-img-top" src="` + cards_1.img + `" alt="Top down view of study group">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_2': function() {
            return `
                <div class="container-fluid card-group ms-card2">
                    <div id="card_2" class="row align-items-center min-vh-100">
                    <div class="card col-sm-7">
                        <div class="card ms-card2-image">
                            <img class="card-img-top" src="` + cards_2.img + `" alt="Calulator and stethascope">
                        </div>
                    </div>
                        <div class="card col-sm-5" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title ms-card2-title">` + cards_2.title + `</h2>
                                <span class="card-text ms-card2-text">` + cards_2.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_3': function() {
            return `
                <div class="container-fluid card-group ms-card3">
                    <div id="card_3" class="row align-items-center min-vh-100">
                    <div class="card col-sm-7">
                        <div class="card ms-card3-image">
                            <img class="card-img-top" src="` + cards_3.img + `" alt="Smiling students in class">
                        </div>
                    </div>
                        <div class="card col-sm-5" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title ms-card3-title">` + cards_3.title + `</h2>
                                <span class="card-text ms-card3-text">` + cards_3.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_4': function() {
            return `
                <div class="container-fluid card-group ms-card4">
                    <div id="card_4" class="row align-items-center min-vh-100">
                        <div class="card col-sm-7" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title ms-card4-title">` + cards_4.title + `</h2>
                                <span class="card-text ms-card4-text">` + cards_4.text + `</span>
                            </div>
                        </div>
                        <div class="card col-sm-5">
                            <div class="card ms-card4-image">
                                <img class="card-img-top" src="` + cards_4.img + `" alt="Jen presenting to a class">
                            </div>
                        </div>
                        
                    </div>
                </div>
            `;
        },
        'create_cards_5': function() {
            return `
                <div class="container-fluid card-group ms-card5">
                    <div id="card_5" class="row align-items-center min-vh-100">                       
                        <div class="card col-sm-7">
                            <div class="card ms-card5-image">
                                <img class="card-img-top" src="` + cards_5.img + `" alt="Doctors and nurse viewing monitor">
                            </div>
                        </div>
                        <div class="card col-sm-5" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title ms-card5-title">` + cards_5.title + `</h2>
                                <span class="card-text ms-card5-text">` + cards_5.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    };    

    function generate_banner() {
        return `
            <div class="jumbotron-fluid">
                <div class="jumbotron jumbotron-medschools">
                    <div class="row text-left float-right">
                        <div class="col-md-7 ml-md-auto banner-text">
                            <h2 class="display-5">The Next Lesson</h2>
                            <p class="lead">You've taught them to be great physicians.</p>
                            <p class="lead">Next, give them the financial education they need to be prepared for life.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
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

    function get_banner() {
        return banner;
    }

    function get_cards() {
        return cards;
    }

    function adjust_card_height() {
        let media_param = "(min-width: 768px)";
        SHARED.adjust_min_vh_100_class(card_id_list, media_param);
    }

    function screen_size_changed() {
        // Perform any action as a result of a screen size change
        adjust_card_height();
    }

    function init() {
        cards = generate_cards();
        banner = generate_banner();
    }

    return {
        init: init,
        get_cards: get_cards,
        get_banner: get_banner,
        screen_size_changed: screen_size_changed
    };

}());