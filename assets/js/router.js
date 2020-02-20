var ROUTER = (function () {
    var m_navbar_id = "nav_bar";
    var m_cards_id = "cards";
    var m_banner_id = "banner";
    var m_pageName = "main";

    $(window).on('hashchange', function(){
        route(decodeURI(window.location.hash));
    });

    function route(url) {
        var temp = url.split('/')[0];
        var map = {
            '': function() {
                m_pageName = "home";
            },
            '#MedSchools': function() {
                m_pageName = "medSchools";
            },
            '#Hospitals': function() {
                m_pageName = "hospitals";
            },
            '#Calculator': function() {
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
        var nav_content = "";
        var cards_content = "";
        var banner_content = "";

        switch (m_pageName) {
            case 'medSchools':
                nav_content = MEDSCHOOLS.get_navbar();
                banner_content = MEDSCHOOLS.get_banner();
                cards_content = MEDSCHOOLS.get_cards();
                break;
            case 'hospitals':
                nav_content = HOSPITALS.get_navbar();
                banner_content = HOSPITALS.get_banner();
                cards_content = HOSPITALS.get_cards();
                break;
            default:
                nav_content = HOME.get_navbar();
                banner_content = CAROUSEL.get_carousel();
                cards_content = HOME.get_cards();
        }
        // Fill the navbar			
        $('#' + m_navbar_id + '').html("");
        $('#' + m_navbar_id + '').html(nav_content);
        // Fill the cards
        $('#' + m_cards_id + '').html("");
        $('#' + m_cards_id + '').html(cards_content);
        // Fill the banner
        $('#' + m_banner_id + '').html("");
        $('#' + m_banner_id + '').html(banner_content);
    }

    function init() {
        //alert("router init hit");
    }

    return {
        init: init
    }
}());