let scity = $("#selectCity"),
    sdist = $("#selectDistrict"),
    table = $("#zipTable"),
    flag = true,
    Top = $("#select").offset().top;
scity.append("<option>--選擇縣市--</option>");

$.each(data, function (idx, n) {
    scity.append(`<option>${n.name}</option>`);
    table.append(`<div class ="city">${n.name}<div id = ${n.name}></div></div>`);
    let zip = "";
    $.each(n.districts, function (index, x) {
        zip += `<div id = bm${x.name}><div>${x.zip}</div><div>${x.name}</div></div>`;
        $(`#${n.name}`).append(zip);
        zip = "";
    })
})

scity.change(function () {
    if (flag) {
        $("#selectCity option:first").remove();
        flag = false;
    }
    let idx = scity.get(0).selectedIndex;
    MoveAndAddDist(idx);
})

function MoveAndAddDist(idx) {
    $.each(data, function (index, n) {
        if (idx == index) {
            sdist.text("");
            $(n.districts).each(function (indx, dist) {
                let option = `<option>${dist.zip}:${dist.name}</option>`;
                sdist.append(option);
                if (indx == 0)
                    window.location.href = `#bm${dist.name}`;
            })
        }
    })
}

$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > Top)
        $("#select").addClass("move");
    else
        $("#select").removeClass("move");
})