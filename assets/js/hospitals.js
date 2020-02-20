var HOSPITALS = (function () {
    var navbar = '';
    var cards = '';
    var banner = '';

    // CARDS GROUP 1
    var cards_1 = {
        'title': "One out of every two physicians suffer from burnout.",
        'text': `<p>The issue of physician burnout may feel so overwhelming that it appears that nothing can be done.</p>
        <p>It’s causing decreased productivity, lower quality of care, substance abuse, and emotional exhaustion.</p>
        <p>Ironically, physicians are burnt out but working longer.</p> 
        <p>A big reason: Money.</p>`,
        'img': "./assets/images/content/burntoutDoctor.jpeg"
    };
    // CARDS GROUP 2
    var cards_2 = {
        'title': "A simple solution",
        'text': `<p>Make young physicians financially fluent. Teach them how money works.</p>
        <p>Financial Independence happens when <b>assets</b> generate enough <b>passive income</b> to <b>cover annual expenses</b>. Reaching Financial Independence means working becomes a choice, not a requirement. That freedom may be the ultimate goal to stop the stress of physician burnout.</p>`,
        'img': "./assets/images/content/calculator.jpeg"
    };
    // CARDS GROUP 3
    var cards_3 = {
        'title': "Both an ethical duty and a fiscally responsible choice for hospitals",
        'text': `
        <p>There is a business case for reducing physician burnout: </p>
        <ul>
        <li>Reduce physician turnover</li>
        <li>Minimize lost revenue due to lower productivity</li>
        <li>Increase quality of care and reduce problems with patient safety</li>
        </ul>
        <p>You can impact a young physician’s financial wellness by strengthening these dimensions that will also benefit your institution:
        <p><u>Work-life integration.</u> Financial stress and workplace performance are linked. Give them the knowledge to manage their finances, and money becomes less of a stress point in life, and at work.
        <p><u>Culture and values.</u> Investing in financial education shows you care about the physician’s financial well-being, not just the bottom line.
        <p><u>Building Community.</u> Group seminars on financial education can open the conversation about how money works. Give them the dialogue they need to have positive conversations with peers. Positive financial actions are contagious.</p>
        `,
        'img': "./assets/images/content/docsMonitor.jpeg"
    };
    // CARDS GROUP 4
    var cards_4 = {
        'title': "Be wary of “Financial Advisors” paid on commission",
        'text': `
        <p>There are many conflicts of interest in the financial system. Don’t expose them to salespeople that don’t have their best interest in mind.</p>
        <p>Inviting a salesperson to deliver a thinly veiled marketing session may give the impression of your implied endorsement.</p>
        <p>Give them unbiased education so they can make informed decisions.</p>
        `,
        'img': "./assets/images/content/money.jpeg"
    };
    // CARDS GROUP 5
    var cards_5 = {
        'title': "A Framework",
        'text': `
        <p>A successful framework is easier to implement than you may think. As little as 10 hours of financial education can change the course of a person’s financial life. (USDAlink)</p>
        <p>Three points in a physician’s education where these lessons are most valuable:</p>
        <ol>
        <li>The end of medical school</li>
        <li>The end of residency</li>
        <li>First two years as an attending physician</li>
        </ol>
        <p>Dedicate time to financial education in your next resident retreat. Workshops will be tailored to your groups specialty, age and salary range.</p>
        <p>Work with your pharmaceutical sales rep to underwrite the education hours.</p>
        `,
        'img': "./assets/images/content/jenStage.jpeg"
    };
    // CARDS GROUP 6
    var cards_6 = {
        'title': "Get In Touch",
        'text': `
        <p>Teach your young physicians how to write their own financial story.  Help them avoid burnout and focus their energy on practicing good medicine.</p>
        <p><img src="./assets/images/content/map-pin.svg" alt="Location">&nbsp;Elmhurst, IL</p>
        <p><img src="./assets/images/content/mail.svg" alt="Mail">&nbsp;jen@intentional-investment.com</p>
        <p><img src="./assets/images/content/phone.svg" alt="Phone">&nbsp;630-310-2361</p>
        `
    };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
                <div class="container-fluid card-group home-card-1">
                    <div class="row align-items-center min-vh-100">
                        <div class="card col-xl-5" >
                            <div class="card-body">
                                <h2 class="card-title hc1-title">` + cards_1.title + `</h2>
                                <span class="card-text card-text1" style="font-size: 130px;">` + cards_1.text + `</span>
                            </div>
                        </div>
                        <div class="card col-xl-7">
                            <div class="card card-image1">
                                <img class="card-img-top" src="` + cards_1.img + `" alt="Card image">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_2': function() {
            return `
                <div class="container-fluid card-group home-card-2">
                    <div class="row align-items-center min-vh-100">
                    <div class="card col-xl-7">
                        <div class="card card-image1">
                            <img class="card-img-top" src="` + cards_2.img + `" alt="Card image">
                        </div>
                    </div>
                        <div class="card col-xl-5" >
                            <div class="card-body">
                                <h2 class="card-title">` + cards_2.title + `</h2>
                                <span class="card-text">` + cards_2.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_3': function() {
            return `
            <div class="container-fluid card-group home-card-3">
                <div class="row align-items-center min-vh-100">
                    <div class="card col-xl-7" >
                        <div class="card-body">
                            <h2 class="card-title hc1-title">` + cards_3.title + `</h2>
                            <span class="card-text">` + cards_3.text + `</span>
                        </div>
                    </div>
                    <div class="card col-xl-5">
                        <div class="card card-image1">
                            <img class="card-img-top" src="` + cards_3.img + `" alt="Card image">
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        'create_cards_4': function() {
            return `
                <div class="container-fluid card-group home-card-2">
                    <div class="row align-items-center min-vh-100">
                    <div class="card col-xl-7">
                        <div class="card card-image1">
                            <img class="card-img-top" src="` + cards_4.img + `" alt="Card image">
                        </div>
                    </div>
                        <div class="card col-xl-5" >
                            <div class="card-body">
                                <h2 class="card-title">` + cards_4.title + `</h2>
                                <span class="card-text">` + cards_4.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_5': function() {
            return `
            <div class="container-fluid card-group home-card-2">
                <div class="row align-items-center min-vh-100">
                    <div class="card col-xl-6" >
                        <div class="card-body">
                            <h2 class="card-title hc1-title">` + cards_5.title + `</h2>
                            <span class="card-text">` + cards_5.text + `</span>
                        </div>
                    </div>
                    <div class="card col-xl-6">
                        <div class="card card-image1">
                            <img class="card-img-top" src="` + cards_5.img + `" alt="Card image">
                        </div>
                    </div>
                </div>
            </div>
            `;
        },
        'create_cards_6': function() {
            return `
            <div class="container-fluid card-group hospital-card-6">
                <div class="row  mx-auto">
                    <div class="card col-xl-12" style="background-color: lightblue">
                        <div class="card-body">
                            <h2 class="card-title hc1-title">` + cards_6.title + `</h2>
                            <span class="card-text">` + cards_6.text + `</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            `;
        }
    };  

    function generate_navbar() {
        return `<ul class="navbar-nav text-left ml-auto">
        <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">What You'll Learn</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Kind Words</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#Calculator">Calculator</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">About</a>
        </li>
        </ul>`; 
    }

    function generate_banner() {
        return `
            <div class="jumbotron-fluid">
                <div class="jumbotron jumbotron-hospitals">               
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

    function get_navbar() {
        return navbar;
    }

    function get_banner() {
        return banner;
    }

    function get_cards() {
        return cards;
    }

    function init() {
        navbar = generate_navbar();
        cards = generate_cards();
        banner = generate_banner();
    }

    return {
        init: init,
        get_navbar: get_navbar,
        get_cards: get_cards,
        get_banner: get_banner
    };

}());