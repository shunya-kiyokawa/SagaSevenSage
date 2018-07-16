//htmlとつながっているか確認用。確認後に消去
document.write("JQ")

var count;
main();

function main() {
 initialization();
 change_gazou();
}

// 初期化処理
function initialization() {
 count = 1;
 $('.gazou').html("<img src='../works/ShouAndDonhu/imag/1.jpg' width='200' height='250'>");
}

// 画像がタッチされたらカウントしていき、画像を差し替える
function change_gazou() {
 $('.gazou').click(function () {
 if (count < 3) {
 count += 1;
 $('.gazou').html("<img src='../works/ShouAndDonhu/imag/"+count+".jpg' width='200' height='250'>");
        } else if (count == 3) {
 count += 1;
 $('.gazou').html("<img src='../works/ShouAndDonhu/imag/last.jpg' width='300' height='250'>");
        } else {
 // none
        }
    })
}

//導入のラストをどうするかによって最後に表示する画像を変える。数字は使った画像数に応じて変更(1以外)。リンクはhtmlに書いて確認