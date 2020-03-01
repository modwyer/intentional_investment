var REVIEWS = (function () {
    var cards = '';

    var cards_1 = {
        'title': "This is the Reviews page.",
        'text': "<p>This is the content of the Reviews page</p>",
        'img': "./assets/images/content/doctors.jpeg"
    };

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