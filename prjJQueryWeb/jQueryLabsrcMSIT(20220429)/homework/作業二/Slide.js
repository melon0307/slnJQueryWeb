let slideNum = 0,
    slideCount = $(".slides li").length,
    lastIndex = slideCount - 1,
    time = setInterval(autoChange, 4000);

$(".dot li").eq(0).css("background-color", "white");
$(".dot li").click(function () {
    slideNum = $(this).index();
    show();
});

$("#prevSlide").click(function () {
    slideNum = --slideNum < 0 ? lastIndex : slideNum;
    show();
});

$("#nextSlide").click(function () {
    slideNum = ++slideNum > lastIndex ? 0 : slideNum;
    show();
});

$(".slides li").hover(function () {
    clearInterval(time);
},
    function () {
        time = setInterval(autoChange, 4000);
    })

function show() {
    $(".dot li").eq(slideNum).css("background-color", "white")
        .siblings().css("background-color", "transparent");

    let slideMove = 0 - 800 * slideNum;
    $("ul.slides").css("left", slideMove);
}

function autoChange() {
    slideNum = ++slideNum > lastIndex ? 0 : slideNum;
    show();
}