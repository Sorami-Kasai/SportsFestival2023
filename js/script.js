$(function () {
    const topBtn = $(".page-top");
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            500
        );
        return false;
    });
});

$(document).ready(function () {
    // 偶数行のみにクラス(even)を付加
    $('table tr:even').addClass('even');
    // 奇数行のみにクラス(odd)を付加
    $('table tr:odd').addClass('odd');

    // 仮に11月2日開催としています
    let date = new Date(2023,11 - 1, 2);
    let today = new Date();
    let date2 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const day = (date.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24;
    let message;
    if (day == 0) {
        message = "本日開催！";
    }
    else if (day < 0) {
        message = "開催終了いたしました。";
    }
    else {
        message = `開催まであと${day}日！`;
    }
    $('.day').text(message);
});
