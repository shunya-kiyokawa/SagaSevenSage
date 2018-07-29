$(function(){
  if($.cookie('secret') == undefined){
    $.cookie('secret', 'no');
  }
  if($.cookie('all-clear') == undefined){
    $.cookie('all-clear', 'no');
  }
  if($.cookie('chapter') == undefined){
    $.cookie('chapter', '1');
  }
  // クッキーの値取得
  var chapterCookieValue = $.cookie('chapter');
  var charaCookieValue = $.cookie('chara');
  var secretCookieValue = $.cookie('secret');
  var allClearCookieValue = $.cookie('all-clear');

  // 画像が入っているフォルダのパス
  var imageDir = "../works/ClearAndForEnding/";

  // Cookieの値によって章番号変更
  switch(chapterCookieValue){
    case "1":
      $('.chapter-image').attr('src', imageDir + '第1章　文字（縦）.png');
      break;
    case "2":
      $('.chapter-image').attr('src', imageDir + '第2章　文字（縦）.png');
      break;
    case "3":
      $('.chapter-image').attr('src', imageDir + '第3章　文字（縦）.png');
      break;
    default:
      $('.chapter-image').hide();
      $('.name-image').css('left', '37.5%');
  }

  if(secretCookieValue == "yes"){
      $('.chapter-image').hide();
      $('.name-image').css('left', '37.5%');
  }
  
  // Cookieの値によって人物画像変更
  switch(charaCookieValue){
    case "etou":
      $('.sage-image').attr('src', imageDir + '江藤新平　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '江藤新平　文字（縦）.png');
      break;
    case "ooki":
      $('.sage-image').attr('src', imageDir + '大木喬任　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '大木喬任　文字（縦）.png');
      break;
    case "soejima":
      $('.sage-image').attr('src', imageDir + '副島種臣　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '副島種臣　文字（縦）.png');
      break;
    case "ookuma":
      $('.sage-image').attr('src', imageDir + '大隈重信　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '大隈重信　文字（縦）.png');
      break;
    case "sano":
      $('.sage-image').attr('src', imageDir + '佐野常民　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '佐野常民　文字（縦）.png');
      break;
    case "nabesima":
      $('.sage-image').attr('src', imageDir + '鍋島直正　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '鍋島直正　文字（縦）.png');
      break;
    case "sima":
      $('.sage-image').attr('src', imageDir + '島義勇　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '島義勇　文字（縦）.png');
      break;
    default:
      $('.sage-image').attr('src', imageDir + '江藤新平　人物（縦）.png');
      $('.name-image').attr('src', imageDir + '江藤新平　文字（縦）.png');
      break;
  }

  // 秘密のパスワードかどうか
  if(secretCookieValue == "yes"){
    $('.link-text').attr('href', 'chara.html');
  }
  else{
    // 章の全ストーリークリアかどうか
    if(allClearCookieValue == "yes"){
      // 第三章かどうか
      if(chapterCookieValue == "3"){
        $('.link-text').attr('href', 'endhing.html');
      }
      else{
        $('.link-text').attr('href', 'map.html');
      }
    }
    else{
      $('.link-text').attr('href', 'map.html');
      // 当該イベントピン非表示
    }
  }

});
