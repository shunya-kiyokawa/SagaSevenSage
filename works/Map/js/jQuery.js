var count;
main();

function main() {
 initialization();
 change_pinone();
}

// 初期化処理
function initialization() {
 count = 1;
 $('.pinone').html("<img src='118567.png'>");
}

// 画像がタッチされたらカウントしていき、画像を差し替える
function change_pinone() {
 $('.pinone').click(function () {
 if (count < 9) {
 count += 1;
 $('.pinone').html("<img src='picture/"+count+".jpg'>");
        } else if (count == 9) {
 count += 1;
 $('.pinone').html("<a href='https://www.low-ya.com/category/BED_METAL/F911_G1248.html'><img src='picture/"+count+".jpg'></a>");
        } else {
 // none
        }
    })
}

console.log("Hello");