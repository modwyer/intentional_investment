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
        'img': "./assets/images/content/aboutImg_1024x731.jpeg"
    };
    var cards_2 = {
        'text':`
        <p>
        <div class="citations">
        <div class="row">
        <div class="col-12 d-flex justify-content-center">
        <h6 id="citations">CITATIONS AND ACADEMIC JUSTIFICATION FOR IMPLEMENTING THIS SEMINAR</h6>
        </div>
        </div>
        <div class="row">
        <div class="col-12">
        <ol class="about-citations">
        <li>Royce MD, Davenport MD, Dahle, MD (2019), <a href="#"><u>A Burnout Reduction and Wellness Strategy: Personal Financial Health for the Medical Trainee</u></a></li>
        <li>Yuval Parr-Or, PhD (2015), <a href="#"><u>Empowering Physicians With Financial Literacy</u></a></li>
        <li>Jayakumar, Larkin, Ginzberg (2017), <a href="#"><u>Personal Financial Literacy Among U.S. Medical Students</u></a></li>
        <li>Shanafelt MD, Goh MD, Sinsky MD (2017), <a href="#"><u>The Business Case for Investing in Physician Well-being</u></a></li>
        </ol>
        </div>
        </div>
        </div>
        </p>
        `
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
                    <section class="responsive"><span></span></section>
                </wrapper>
                <span>` + cards_2.text + `</span>
            </main>
        `;
        big_about_content = 
        `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-7 about-text">
                        <span>` + cards_1.text + `</span>
                    </div>
                    <div class="col-xl-5"">
                        <div class="row align-items-bottom">
                            <img id="jenAboutPhoto" src="` + cards_1.img + `" alt="Close up photo of Jennifer">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <span>` + cards_2.text + `</span>
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

    function screen_size_changed() {
        // Perform any action as a result of a screen size change
        change_about_content();
    }

	return {
        init: init,
        get_content: get_content,
        screen_size_changed: screen_size_changed
    };

}());