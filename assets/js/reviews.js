var REVIEWS = (function () {
    var cards = '';

    var cards_1 = {
        'text': `
            <p>Jen, in particular, I wanted to thank you for providing the residents with outstanding education focused on aspects of investment and financial management.  Overall, the residents were excited to have this type of session and shared many positive comments.  Specific written feedback from them included:<br/>
            “The financial talk was amazing and should be longer!”<br/>
            “The financial management talk was very helpful.”<br/>
            “Really enjoyed the financial planning session.”</p>
            
            <p>Thank you again on behalf of myself and all the PL-2 residents for your time, dedication and effort.  I am truly appreciative of your time in support of our pediatric residents. I hope we can incorporate your insights at future retreats.</p>
            
            <p>Sincerely,<br/>
            Sharon M Unti, MD<br/>
            Residency Program Director<br/>
            Department of Pediatrics, Chicago<br/>
            Northwestern Medicine</p>
                
        `,
        'img': "./assets/images/content/northwestern.png"
    };
    var cards_2 = {
        'text': `
            <p>(quote)</p>                
        `,
        'img': "./assets/images/content/uic.png"
    };
    var cards_3 = {
        'text': `
            <p>(quote)</p>                
        `,
        'img': "./assets/images/content/riverside.png"
    };
    var cards_4 = {
        'title': '<b>Feedback from Seminar Attendees:  Medical Residents and Medical Students</b>',
        'text': `
            <ul>
                <li>Thank you so much!  Investments made simple & digestible in a very short period of time.  My only regret is that I did not have the opportunity to connect with Jennifer in my 20s-30s! Again thank you! Brilliant!  --Dr Irene Carr</li>

                <li>Fantastic Presentation!  This presentation should be required curriculum for all residents. Thank you so much! –Dr Trevor Washburn</li>
                
                <li>Knowing the basics of financial planning was an eye opener, and an enriching experience.  Very empowering!  --Dr Preeti Banga</li>
                
                <li>You are absolutely excellent at presenting this information.  I have sat on at least 3 different financial presentations and you are hands down the best presenter. 
                Thank you for your phenomenal presentation!  -Dr. Nazia Alvi, DO</li>
                
                <li>Jen:  Fantastic presentation!
                Hit all the relevant points for physicians
                Infectious enthusiasm and passion
                Opportunity:  too much information in a short span, splitting up the talk may be better. 
                -Dr Shashidharan MD</li>
                
                <li>Jennifer helped inform and provide the necessary resources for me to confidently plan my financial future. Dr Seban Liu, DO</li>
                
                <li>Excellent work!  Thank you so much! This was so educational and will definitely change my financial life for the better. </li>
                
                <li>Awesome job.  Especially appreciated the discussion on asset allocation.  </li>
                
                <li>The enthusiasm with each lecture was recognized and the passion easily transparent listening to you deliver the information. </li>
                
                <li>I’ve heard version of this talk a few times, and I feel like this is the first time it has really started to make sense and sink in.  Really appreciated the lessons in the seminar. </li>
                
                <li>Please give more information on investments for Muslim physicians, due to religious restrictions, we must avoid interest-earning income. You are awesome! </li>
                
                <li>I really liked how you present and hearing the experiences with your kids and students. </li>
                
                <li>Great lecture topics, handouts of all the websites would be great. </li>
                
                <li>“Train My Wallet” calculator was a good teaching tool.</li>
                
                
                <li>The presentation was good and touched on the important ideas without spending too much time on any one topic. </li>
                
                <li>Very informative and organized. </li>
                
                <li>I really enjoyed your talk. </li>
                
                <li>Need more information on how to set all this up:  Roth, 401k, IRA, etc. </li>
                
                <li>Thank you for making this presentation.  Very clean, digestible, and obtainable for novice and experts alike. </li>
                
                <li>I greatly appreciated the candor and simplicity presented for complex topics. </li>
            </ul>      
        `
    };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
                <div class="container-fluid card-group rev-card1">
                    <div class="row align-items-center">
                        <div class="card col-xl-4">
                            <div class="card rev-card1-image">
                                <img class="card-img-top" src="` + cards_1.img + `" alt="Card image">
                            </div>
                        </div>
                        <div class="card col-xl-8" >
                            <div class="card-body">
                                <span class="card-text rev-card1-text">` + cards_1.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_2': function() {
            return `
                <div class="container-fluid card-group rev-card2">
                    <div class="row align-items-center">
                        <div class="card col-xl-7">
                            <div class="card rev-card2-image">
                                <img class="card-img-top" src="` + cards_2.img + `" alt="Card image">
                            </div>
                        </div>
                        <div class="card col-xl-5" >
                            <div class="card-body">
                                <span class="card-text rev-card2-text">` + cards_2.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_3': function() {
            return `
                <div class="container-fluid card-group rev-card3">
                    <div class="row align-items-center">
                        <div class="card col-xl-7">
                            <div class="card rev-card3-image">
                                <img class="card-img-top" src="` + cards_3.img + `" alt="Card image">
                            </div>
                        </div>
                        <div class="card col-xl-5" >
                            <div class="card-body">
                                <span class="card-text rev-card3-text">` + cards_3.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        'create_cards_4': function() {
            return `
                <div class="container-fluid card-group rev-card4">
                    <div class="row align-items-center">
                        <div class="card col-xl-12" >
                            <div class="card-body">
                                <h2>` + cards_4.title + `</h2>
                                <span class="card-text rev-card4-text">` + cards_4.text + `</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
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

    function init() {
        cards = generate_cards();
    }

	return {
        init: init,
        get_cards: get_cards
    };

}());