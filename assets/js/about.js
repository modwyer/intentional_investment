var ABOUT = (function () {
    var cards = '';
    const m_cards_id = 'cards';
    var small_about_content = "";
    var big_about_content = "";

    var cards_1 = {
        'text': `
        <p>A bit about Jennifer</p>
        <p>Jennifer has worked in investment education for over 20 years.  She spent a few years as attorney practicing in Tax and ERISA/401(k) law at a large law firm in Indianapolis before returning to her passion of educating people towards financial freedom.</p>
        <p>She has educated over 20,000 people in 30 different states on money and investing. For the last 10 years, she has individually counseled physicians, attorneys, pharmacists, nurse practitioners, and other high-income earners while working for the nation’s second largest retirement plan provider. She’s a licensed attorney and registered investment advisor.</p>
        <p>Her knowledge goes beyond stocks and bonds. She’s also been an occasional real estate investor, restauranteur, summer resort owner and entrepreneur. But her best investment has been in her family, including her husband Chad and their two financially savvy kids.</p> 
        `,
        'img': "./assets/images/content/aboutImg_600x428.jpeg"
    };

    function change_about_content() {        
        var cards_content = "";
        if (window.matchMedia("(min-width: 400px) and (min-width: 1023px)").matches) {
            cards_content = small_about_content;
        } else {
            cards_content = big_about_content;
        }
        $('#' + m_cards_id + '').html("");
        $('#' + m_cards_id + '').html(cards_content);
    }
    function init() {
        small_about_content = 
        `
            <main>
                <wrapper>
                    <section><span>` + cards_1.text + `</span></section>
                    <section><span></span></section>
                    <section><span></span></section>
                </wrapper>
            </main>
        `;
        big_about_content = 
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

    function get_content() {
        if (window.matchMedia("(min-width: 400px) and (min-width: 1023px)").matches) {
            return small_about_content;
        } else {
            return big_about_content;
        }
    }

	return {
        init: init,
        change_about_content: change_about_content,
        get_content: get_content
    };

}());