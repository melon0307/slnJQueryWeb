$(".i").mouseenter(function () {
    $(this).prop("src", "../images/chngstar.gif").prevAll().prop("src", "../images/chngstar.gif").end().nextAll().prop("src", "../images/star.gif");
    let index = $(this).index();
    $(".label").text("評分中..." + (index + 1));
});

$(".ratingBox").mouseleave(function () {
    $(".i").prop("src", "../images/star.gif")
    $(".label").text("評分中...0");
});

$("img").click(function () {
    $(".i").off("mouseenter");
    $(".ratingBox").off("mouseleave");
    let index = $(this).index();
    $(".label").text("評分為..." + (index + 1) + "星");
});