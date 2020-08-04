var HOME = (function () {
    var cards = '';
    var card_id_list = [ 'card_1', 'card_2' ];
    var cards_3_alt_content = '';

    var cards_1 = {
        'title': "Financial Independence isn't something you stumble upon.",
        'text': "<p>It takes intention, dedication, and discipline to reach Financial Independence.</br></br>Past generations called this retirement. Your generation will redefine it…but only if you start the journey, and your story, exceptionally well.</br></br>You’ve made an intentional investment in your medical education.  Now it’s time to be intentional about your financial future.</p>",
        'img': "./assets/images/content/jandl.jpeg"
    };
    var cards_2 = {
        'title': "Learn the basics.</br>Set your intention.",
        'text': "<p>At this point in your journey, you don't need a financial planner.  You need <b>financial education</b>.  This is financial eduation, simplified.</br></br><b>Nothing to sell.  Unbiased.  No commissions.</b>  No advice.  Just <b>education and information</b> to empower your decsions.  Hear the stories and lessons that would have made math class more interesting.</br></br>Money is a tool, not a goal.  Make an intentional investment in learning how to master that tool.  <b>Set your intention</b>.  Write your story.</p>",
        'img': "./assets/images/content/doctors.jpeg"
    };
    var cards_3 = {
        'text': `<p><h4>Start your money story with this seminar.</br>You'll learn to...</h4></p>
        <p>Avoid the 4 biggest money mistakes people make after medical school</p>
        <p>Create a strategic plan for big expenses like home, car and student loans</p>
        <p>Understand the money psychology you inherited from your family, and how that shapes your financial decisions</p>
        <p>Manage the forces are trying to take your money (inflation, taxes, debt, fees, advisors, and depreciating assets)</p>
        <p>Discover which plans are smart to use first, and which to avoid: 401(k), 403(b), IRA, Roth, HSA, brokerage accounts, and life insurance policies</p>
        <p>Grasp the concepts that schools should be teaching to demystify the stock market: diversification, compound interest, risk vs. return</p>
        <p>Learn how your money makes money for you; know the magic age where you don’t have to work anymore. (Compounding interest and the point of financial independence)</p>`,
        'img1': "./assets/images/content/typewriter_sm.png",
        'img2': "./assets/images/content/typewriter_sm2.png"
    };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
                <div class="container-fluid card-group card-1">
                    <div id="card_1" class="row align-items-center min-vh-100">
                        <div class="card col-sm-5" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title hc1-title">` + cards_1.title + `</h2>
                                <span class="card-text hc1-text">` + cards_1.text + `</span>
                            </div>
                        </div>
                        <div class="card col-sm-7">
                            <div class="card card-image1">
                                <img class="card-img-top" src="` + cards_1.img + `" alt="Jen at whiteboard writing">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_2': function() {
            return `
                <div class="container-fluid card-group card-2">
                    <div id="card_2" class="row align-items-center min-vh-100">
                        <div class="card col-sm-7">
                            <div class="card card-image2">
                                <img class="card-img-top" src="` + cards_2.img + `" alt="...">
                            </div>
                        </div>
                        <div class="card col-sm-5" >
                            <div class="card-highlight" />
                            <div class="card-body">
                                <h2 class="card-title hc2-title">` + cards_2.title + `</h2>
                                <span class="card-text hc2-text">` + cards_2.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        },
        'create_cards_3': function() {
            cards_3_alt_content = `
            <div id="home_card_3">
                <div class="container-fluid card-3">
                    <div class="card mb-3 text-white bg-dark">
                        <div class="row no-gutters">
                            <div class="col-sm-6 hc4-img">
                                <img src="` + cards_3.img1 + `" class="card-img" alt="Typewriter - your money starts here">
                            </div>
                            <div class="col-sm-6">
                                <div class="card-body hc4-body">
                                    <span>` + cards_3.text + `</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return cards_3_alt_content;
            // return `
            //     <div id="home_card_3">
            //         <div class="container-fluid card-3">
            //             <div class="card mb-3 text-white bg-dark">
            //                 <div class="row no-gutters">
            //                     <div class="col-sm-6 hc4-img">
            //                         <img src="` + cards_3.img1 + `" class="card-img" alt="Typewriter - your money starts here">
            //                     </div>
            //                     <div class="col-sm-6">
            //                         <div class="card-body hc4-body">
            //                             <span>` + cards_3.text + `</span>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // `;
        }
    };

    function generate_cards() {
        var ret = '';
        var total_card_groups = Object.keys(create_cards_functions).length
        
        for(var i = 1; i <= total_card_groups; i++) {
            var cards = create_cards_functions["create_cards_" + i]();
            ret += cards;
        }
        return ret;
    }

    function get_cards() {
        return cards;
    }

    function adjust_card_height() {
        alert("adjust vw");
        let media_param = "(min-width: 768px)";
        SHARED.adjust_min_vh_100_class(card_id_list, media_param);
    }

    function swap_card_3_content(content) {        
        $('#home_card_3').html("");
        $('#home_card_3').html("" + content + "");
    }

    function screen_size_changed() {
        // Perform any action as a result of a screen size change
        adjust_card_height();

        if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
            alert("ssc: home: swap");
            var card_content = `
                <div class="container-fluid card-3">
                    <div class="card mb-3 text-white bg-dark">
                        <div class="row no-gutters">
                            <div class="col-sm-12 hc4-img">
                                <img src="` + cards_3.img2 + `" class="card-img" alt="Typewriter - your money starts here">
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-sm-12">
                                <div class="card-body hc4-body">
                                    <span>` + cards_3.text + `</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            swap_card_3_content(card_content);
        }
        if (window.matchMedia('(min-width: 1920px)').matches) {
            alert("ssc: home: big swap");
            swap_card_3_content(cards_3_alt_content);
        }
    }

    function init() {
        cards = generate_cards();
    }

	return {
        init: init,
        get_cards: get_cards,
        screen_size_changed: screen_size_changed
    };

}());