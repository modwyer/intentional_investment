var LAWSCHOOLS = (function () {
    var cards = '';
    var card_id_list = [ 'card_1', 'card_2', 'card_3' ];

    var cards_1 = {
        'title': "",
        'text': "",
        'img': "./assets/images/content/.jpeg"
    };
    var cards_2 = {
        'title': "",
        'text': "",
        'img': "./assets/images/content/.jpeg"
    };
    var cards_3 = {
        'text': ``,
        'img1': "./assets/images/content/.png",
        'img2': "./assets/images/content/.png"
    };

    var create_cards_functions = {
        'create_cards_1': function() {
            return `
            </br></br>
            <div class="row">
            <div class="col-12 d-flex justify-content-center">
            <span>Coming soon...</span>
            </div>
            </div>
            </br></br></br></br>              
            `;
        },
        'create_cards_2': function() {
            return `                
            `;
        },
        'create_cards_3': function() {
            return `            
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
    }

	return {
        init: init,
        get_cards: get_cards,
        screen_size_changed: screen_size_changed
    };

}());