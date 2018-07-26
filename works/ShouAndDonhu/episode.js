var charaCookieValue = $.cookie('chara');

// 画像が入っているフォルダのパス
var imageDir = "../works/ShouAndDonhu/";


$(function(){
    var charaCookieValue = $.cookie('chara');
    
    switch(charaCookieValue){
        case "etou":
        $('.chara-image').attr('src', imageDir + '江藤新平.png');
         //
         break;
        case "ooki":
        $('.chara-image').attr('src', imageDir + '大木.png');
         //
         break;
        case "soejima":
        $('.chara-image').attr('src', imageDir + '副島.png');
         //
         break;
        case "ookuma":
        $('.chara-image').attr('src', imageDir + '大隈重信.png');
         //
         break;
        case "sano":
        $('.chara-image').attr('src', imageDir + '佐野.png');
         //
         break;
        case "nabesima":
        $('.chara-image').attr('src', imageDir + '鍋島直正.png');
         //
         break;
        case "sima":
        $('.chara-image').attr('src', imageDir + '島.png');
         //
         break;
    }
}
