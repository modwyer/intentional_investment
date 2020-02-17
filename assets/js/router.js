var ROUTER = (function () {
    var m_navbar_id = "nav_bar";
    var m_cards_id = "cards";
    var m_pageName = "main";

    $(window).on('hashchange', function(){
        //alert("window on hash change: window.location.hash: " + window.location.hash);
        // On every hash change the render function is called with the new hash.
        // This is how the navigation of our app happens.
        route(decodeURI(window.location.hash));
    });

    function route(url) {
        //alert("route url: " + url);
        // This function decides what type of page to show 
        // depending on the current url hash value.
        // Get the keyword from the url.
        var temp = url.split('/')[0];
        //alert("url.split on / at zero index: " + temp);

        // Hide whatever page is currently shown.
        //$('.main-content .page').removeClass('visible');

        var map = {

            // The Homepage.
            '': function() {

                m_pageName = "home";
                //alert("no hash: on homepage: m_pageName: " + m_pageName);
                // Clear the filters object, uncheck all checkboxes, show all the products
                // filters = {};
                // checkboxes.prop('checked',false);

                // renderProductsPage(products);
            },

            // Single Products page.
            '#MedSchools': function() {
                m_pageName = "medSchools";
                //alert("med schools page hit: m_pageName: " + m_pageName);
                // Get the index of which product we want to show and call the appropriate function.
                // var index = url.split('#product/')[1].trim();

                // renderSingleProductPage(index, products);
            },

            // Page with filtered products
            '#Hospitals': function() {
                m_pageName = "hospitals";
                //alert("hospitals hit: m_pageName: " + m_pageName);
                // Grab the string after the '#filter/' keyword. Call the filtering function.
                // url = url.split('#filter/')[1].trim();

                // // Try and parse the filters object from the query string.
                // try {
                //     filters = JSON.parse(url);
                // }
                // // If it isn't a valid json, go back to homepage ( the rest of the code won't be executed ).
                // catch(err) {
                //     window.location.hash = '#';
                // }

                // renderFilterResults(filters, products);
            }
        };

        // Execute the needed function depending on the url keyword (stored in temp).
        if(map[temp]){
            map[temp]();
        }
        // If the keyword isn't listed in the above - render the error page.
        // else {
        //     renderErrorPage();
        // }

        //create_navbar();
        render_page();
    }

    function render_page() {
        //alert("create_navbar hit: m_pageName: " + m_pageName);
        var nav_content = "";
        var cards_content = "";

        switch (m_pageName) {
            case 'medSchools':
                nav_content = MEDSCHOOLS.get_navbar();
                break;
            case 'hospitals':
                nav_content = HOSPITALS.get_navbar();
                break;
            default:
                nav_content = HOME.get_navbar();
                cards_content = HOME.get_cards();
        }
        // Fill the navbar			
        $('#' + m_navbar_id + '').html("");
        $('#' + m_navbar_id + '').html(nav_content);
        // Fill the cards
        $('#' + m_cards_id + '').html("");
        $('#' + m_cards_id + '').html(cards_content);

        //alert("hitend");
    }

    function init() {
        //alert("router init hit");
    }

    return {
        init: init
    }
}());