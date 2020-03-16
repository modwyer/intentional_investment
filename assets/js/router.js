var ROUTER = (function () {
    var m_cards_id = "cards";
    var m_banner_id = "banner";
    var m_navLink_id = "";
    var m_pageName = "main";
    var m_navlink_ids = [ 'home_link', 'medSchools_link', 'hospitals_link', 'calculator_link', 'about_link', 'reviews_link' ];

    $(window).on('hashchange', function(){
        route(decodeURI(window.location.hash));
    });

    function route(url) {
        var temp = url.split('/')[0];
        var map = {
            '': function() {
                m_pageName = "home";
            },
            '#About': function() {
                m_pageName = "about";
            },
            '#Reviews': function() {
                m_pageName = "reviews";
            },
            '#MedSchools': function() {
                m_pageName = "medSchools";
            },
            '#Hospitals': function() {
                m_pageName = "hospitals";
            },
            '#Calculator': function() {
                m_pageName = "calculator";
                var win = window.open('http://www.trainmywallet.com/', '_blank');
                if (win) {
                    //Browser has allowed it to be opened
                    win.focus();
                } else {
                    //Browser has blocked it
                    alert('Please allow popups for this website');
                }
            }
        };

        if(map[temp]){
            map[temp]();
        }
        // If the keyword isn't listed in the above - render the error page.
        // else {
        //     renderErrorPage();
        // }

        render_page();
    }

    function render_page() {
        var cards_content = "";
        var banner_content = "";

        switch (m_pageName) {
            case 'about':
                banner_content = "";
                cards_content = ABOUT.get_content();
                break;
            case "reviews":
                banner_content = "";
                cards_content = REVIEWS.get_cards();
                break;
            case 'medSchools':
                banner_content = MEDSCHOOLS.get_banner();
                cards_content = MEDSCHOOLS.get_cards();
                break;
            case 'hospitals':
                banner_content = HOSPITALS.get_banner();
                cards_content = HOSPITALS.get_cards();
                break;
            default:
                banner_content = CAROUSEL.get_carousel();
                cards_content = HOME.get_cards();
                break;
        }
        // Scroll to the top of the page
        window.scrollTo(70, 0);
        // Fill the cards
        $('#' + m_cards_id + '').html("");
        $('#' + m_cards_id + '').html(cards_content);
        // Fill the banner
        $('#' + m_banner_id + '').html("");
        $('#' + m_banner_id + '').html(banner_content);
        // Set active link
        for (var i = 0; i < m_navlink_ids.length; i++) {
            var id = m_navlink_ids[i];
            if (id === (m_pageName + '_link')) {
                $('#' + id + '').addClass('active');
            } else {
                $('#' + id + '').removeClass('active');
            }
        }
    }

    function get_current_page() {
        return m_pageName
    }

    function init() {
        //alert("router init hit");
    }

    return {
        init: init,
        get_current_page: get_current_page
    }
}());