var CAROUSEL = (function () {
    var carousel = "";
    var images = {
        img_1: './assets/images/content/mountains_1680x700_w.jpeg',
        img_2: './assets/images/content/jenclass1680x700_tinted3.jpeg'        
    };
    var carousel_1 = {
        h1: '<h1>Financial Independence is Freedom</h1>',
        p: 
        `
        <p>Freedom is what we all want.</br>
        Financial Independence is how you get there.</br>
        Get to Financial Independence faster by learning a few core principles about money.</p>
        `
    };
    var carousel_2 = {
        h1: '<h1>Get to Financial Independence Faster</h1>',
        p: 
        `
        <p>Make an Intentional Investement in your future.</br>
        Learn the financial concepts necessary to attack debt, invest wisely,</br>
        and protect wealth in an interactive and memorable way.</p>
        `
    };

    function generate_carousel() {
        return `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="` + images.img_1 + `" class="d-block w-100" alt="Mountains">
                    <div class="carousel-caption d-none d-md-block">
                        <span>` + carousel_1.h1 + `</span
                        <span>` + carousel_1.p + `</span>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="` + images.img_2 + `" class="d-block w-100" alt="Jen teaching a class">
                    <div class="carousel-caption d-none d-md-block">
                        <span>` + carousel_2.h1 + `</span
                        <span>` + carousel_2.p + `</span>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>`;
    }

    function create_carousel() {
        carousel = generate_carousel();
    }

    function get_carousel() {
        return carousel;
    }

    function init() {
        create_carousel();
    }

	return {
        init: init,
        get_carousel: get_carousel
    };
    
}());