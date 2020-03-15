var ABOUT = (function () {
    var cards = '';
    const m_cards_id = 'cards';

    // CARDS GROUP 1
    var cards_1 = {
        'title': "This is the About page.",
        'text': `
        <p>A bit about Jennifer</p>
        <p>Jennifer has worked in investment education for over 20 years.  She spent a few years as attorney practicing in Tax and ERISA/401(k) law at a large law firm in Indianapolis before returning to her passion of educating people towards financial freedom.</p>
        <p>She has educated over 20,000 people in 30 different states on money and investing. For the last 10 years, she has individually counseled physicians, attorneys, pharmacists, nurse practitioners, and other high-income earners while working for the nation’s second largest retirement plan provider. She’s a licensed attorney and registered investment advisor.</p>
        <p>Her knowledge goes beyond stocks and bonds. She’s also been an occasional real estate investor, restaurateur, summer resort owner and entrepreneur. But her best investment has been in her family, including her husband Chad and their two financially savvy kids.</p> 
        `,
        'img': "./assets/images/content/aboutImg.jpeg"
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

    function change_about_content() {
        const page_name = ROUTER.get_current_page();
        if (page_name != "about") { return; }

        var cards_content = "";
        if (window.matchMedia("(min-width: 400px) and (min-width: 1023px)").matches) {
            cards_content = 
            `
                <main>
                    <wrapper>
                        <section><span>` + cards_1.text + `</span></section>
                        <section><span></span></section>
                        <section><span></span></section>
                    </wrapper>
                </main>
            `;
        } else {
            cards_content = 
            `
                <div class="container-fluid">
                <div class="row min-vh-100">
                    <div class="col-xl-7" style="border:1px solid #323132; background-color:#c0bba0; padding:25px;">
                        <span>` + cards_1.text + `</span>
                    </div>
                    <div class="col-xl-5"">
                        <div class="row align-items-bottom">
                            <img src="` + cards_1.img + `" alt="Close up photo of Jennifer">
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        $('#' + m_cards_id + '').html("");
        $('#' + m_cards_id + '').html(cards_content);
    }

    var create_cards_functions = {
        'create_cards_1': function() {
            // var ret = "";
            // if (window.matchMedia("(min-width: 480px)").matches) {
            //     ret = `
            //     <div class="container-fluid">
            //         <div class="row min-vh-100">
            //             <div class="col-xl-7" style="border:1px solid #323132; background-color:#c0bba0; padding:25px;">
            //                 <span>` + cards_1.text + `</span>
            //             </div>
            //             <div class="col-xl-5" style="border:1px solid green;">
            //                 <div class="row align-items-bottom">
            //                     <img src="` + cards_1.img + `" alt="Close up photo of Jennifer">
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //   `;
            // } 



            return `
            <main>
                <wrapper>
                    <section><span>` + cards_1.text + `</span></section>
                    <section><span></span></section>
                    <section><span></span></section>
                </wrapper>
            </main>
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
        get_cards: get_cards,
        change_about_content: change_about_content
    };

}());