var CAROUSEL = (function () {
    var carousel = "";

    function generate_carousel() {
        return `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./assets/images/content/mountains_1680x700_w.jpeg" class="d-block w-100" alt="Mountains">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Financial Independence is Freedom</h1>
                        <p>Freedom is what we all want. Financial Independence is how you get there. Get to Financial Independence faster by learning a few core principles about money.</p>
                        <p>Make an Intentional Investment in your future by learning these financial concepts in an entertaining, interactive and memorable way.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./assets/images/content/jenclass1680x700.jpeg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
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