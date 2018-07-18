var count;
main();

function main() {
    initialization();
    change_gazou();
}

// 初期化処理
function initialization() {
    count = 1;
    $('.gazou').html("<img src='副島⓵pin/118567.png'>");
}

// 画像がタッチされたらカウントしていき、画像を差し替える
function change_gazou() {
    $('.gazou').click(function () {
        count += 1;
        $('.gazou').html("<img src='副島⓵pin/"+count+".png'>");
    })
}
/*
function change_gazou() {
    $('.gazou').click(function () {
        count += 1;
        $('.gazou').children('img').attr('src', 'picture/'+count+'.jpg');
    })
}
*/