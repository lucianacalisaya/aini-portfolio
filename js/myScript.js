$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});

$(document).ready(function () {
    const $images = $(".project-imagebox img");
    const $introductionTitle = $(".stars-animation img");
    const $introductionDecoration = $(".decoration-animation img");
    const $typewriter = $(".typewriter h3");
    const $diaryAnimation = $(".diary-animation");
    const $flipAnimation = $(".flip")
    const $highlight = $(".highlight")
    const $popUp = $(".popUp")
    const $clicker = $(".mouse")


    

    const revealOnScroll = () => {
        const elements = [$images, $introductionTitle, $introductionDecoration, $typewriter, $diaryAnimation, $flipAnimation, $highlight, $popUp, $clicker];
        
        elements.forEach(($group) => {
            $group.each(function () {
                const $element = $(this);
                const rect = this.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    $element.addClass("show");
                }
            });
        });
    };

    $(window).on("scroll", revealOnScroll);
    revealOnScroll(); 
});

$(document).ready(function () {
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        
        const target = $(this.getAttribute("href"));

        if (target.length) {
            $("html, body").animate(
                { scrollTop: target.offset().top }, 
                1000,
            );
        }
    });
});