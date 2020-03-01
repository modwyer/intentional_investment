var ABOUT = (function () {
    var cards = '';

    // CARDS GROUP 1
    var cards_1 = {
        'title': "This is the About page.",
        'text': "<p>This is the content of the About page</p>",
        'img': "./assets/images/content/jandl.jpeg"
    };
    // CARDS GROUP 2
    // var cards_2 = {
    //     'title': "Learn the basics.</br>Set your intention.",
    //     'text': "At this point in your journey, you don't need a financial planner.  You need <b>financial education</b>.  This is financial eduation, simplified.</br></br><b>Nothing to sell.  Unbiased.  No commissions.</b>  No advice.  Just <b>education and information</b> to empower your decsions.  Hear the stories and lessons that would have made math class more interesting.</br></br>Money is a tool, not a goal.  Make an intentional investment in learning how to master that tool.  <b>Set your intention</b>.  Write your story.",
    //     'img': "./assets/images/content/doctors.jpeg"
    // };
    // CARDS GROUP 4
    // var cards_4 = {
    //     'text': `<p> Avoid the 4 biggest money mistakes people make after medical school</p>
    //     <p>Create a strategic plan for big expenses like home, car and student loans</p>
    //     <p>Understand the money psychology you inherited from your family, and how that shapes your financial decisions</p>
    //     <p>Manage the forces are trying to take your money (inflation, taxes, debt, fees, advisors, and depreciating assets)</p>
    //     <p>Discover which plans are smart to use first, and which to avoid: 401(k), 403(b), IRA, Roth, HSA, brokerage accounts, and life insurance policies</p>
    //     <p>Grasp the concepts that schools should be teaching to demystify the stock market: diversification, compound interest, risk vs. return</p>
    //     <p>Learn how your money makes money for you; know the magic age where you don’t have to work anymore. (Compounding interest and the point of financial independence)</p>`,
    //     'img': "./assets/images/content/typeritersmall.png"
    // };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
                <div class="container-fluid card-group home-card-1">
                    <div class="row align-items-center min-vh-100">
                        <div class="card col-xl-5" >
                            <div class="card-body">
                                <h2 class="card-title hc1-title">` + cards_1.title + `</h2>
                                <span class="card-text card-text1">` + cards_1.text + `</span>
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
        }
        //,
        // 'create_cards_2': function() {
        //     return `
        //         <div class="container-fluid card-group home-card-2">
        //             <div class="row align-items-center min-vh-100">
        //                 <div class="card mx-auto col-xl-5 card-image2">
        //                     <div class="card">
        //                         <img class="card-img-top" src="` + cards_2.img + `" alt="Card image">
        //                     </div>
        //                 </div>
        //                 <div class="container-fluid card-group">
        //                     <div class="card col-xl-6">
        //                         <div class="card-body hc2-title">
        //                             <h2 class="card-title">` + cards_2.title + `</h2>
        //                         </div>
        //                     </div>
        //                     <div class="card card-text2 col-xl-6" >
        //                         <div class="card-body hc2-text">
        //                             <p class="card-text">` + cards_2.text + `</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         `;
        // },
        // 'create_cards_3': function() {
        //     return `
        //         <div class="container-fluid cursive-text home-card-3">
        //             <div class="row hc3-row1">
        //                 <div class="col align-self-start col-xl-12">
        //                     <h1>Write your money story today.</h1>
        //                 </div>
        //             </div>
        //             <div class="row text-right hc3-row2">
        //                 <div class="col col-xl-12">
        //                     <h1>How will your story start?</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     `;
        // },
        // 'create_cards_4': function() {
        //     return `
        //         <div class="container-fluid home-card-4">
        //             <div class="card mb-3 text-white bg-dark">
        //                 <div class="row no-gutters">
        //                     <div class="col-xl-4 hc4-img">
        //                         <img src="` + cards_4.img + `" class="card-img" alt="Card image">
        //                     </div>
        //                     <div class="col-xl-8">
        //                         <div class="card-body hc4-body">
        //                             <span>` + cards_4.text + `</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     `;
        //}
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

    function init() {
        cards = generate_cards();
    }

	return {
        init: init,
        get_cards: get_cards
    };

}());