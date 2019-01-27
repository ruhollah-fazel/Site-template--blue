$(document).ready(function () {
    var number = 0;
    var imgSrc = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
    var imgAlt = ["alt1", "alt2", "alt3"];
    $("#next").click(imgNext);
    $("#prev").click(imgPrev);
    var set = setInterval(imgNext, 3000);
    //$("#image").mouseover(pauseSlide);


    function imgNext() {
        if (number == imgSrc.length - 1)
            number = 0;
        else
            number += 1;
        $("#image").attr({
            "src": imgSrc[number],
            "alt": imgAlt[number]
        });
    }


    function imgPrev() {
        if (number == 0)
            number = imgSrc.length - 1;
        else
            number -= 1;
        $("#image").attr({
            "src": imgSrc[number],
            "alt": imgAlt[number]
        });
    }

    /* function pauseSlide() {
         clearInterval(set);
     } */
    $("#teammates-header,#teammate-line").click(function () {
        $(".teammates-box").slideToggle();
    })
    $("#courses-header,#course-line").click(function () {
        $(".courses-box").slideToggle();
    })
    $("#guidence-header,#guidence-line").click(function () {
        $(".guidence-content").slideToggle();
    })

    ///////////////aside box 

    $("#last-title").click(function () {
        $("#mostVisited-content").css({
            "zIndex": "-1"
        });
        $("#last-content").css({
            "zIndex": "1"
        });
        $("#mostPopular-content").css({
            "zIndex": "-1"
        });
        $("#mostVisited-title").removeClass("active");
        $("#last-title").addClass("active");
        $("#mostPopular-title").removeClass("active");

    });
    $("#mostVisited-title").click(function () {
        $("#mostVisited-content").css({
            "zIndex": "1"
        });
        $("#last-content").css({
            "zIndex": "-1"
        });
        $("#mostPopular-content").css({
            "zIndex": "-1"
        });
        $("#mostVisited-title").addClass("active");
        $("#last-title").removeClass("active");
        $("#mostPopular-title").removeClass("active");

    });
    $("#mostPopular-title").click(function () {
        $("#mostVisited-content").css({
            "zIndex": "-1"
        });
        $("#last-content").css({
            "zIndex": "-1"
        });
        $("#mostPopular-content").css({
            "zIndex": "1"
        });
        $("#mostVisited-title").removeClass("active");
        $("#last-title").removeClass("active");
        $("#mostPopular-title").addClass("active");
    });
})
