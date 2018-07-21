


$(function(){
  // 画像切り替え
  $('.sage-image').html("<img src='../works/TopAndKyara/nabesima.png' width='76px' height='150px'>")
  
  // 画面遷移の条件分岐（仮：全ストーリークリアかつ第三章のとき）

  // 秘密のパスワードかどうか
  if(false){
    $('.link-text').attr("href", "chara.html");
  }
  // 章の全ストーリークリアかどうか
  if(true){
    // 第三章かどうか
    if(true){
      $('.link-text').attr("href", "endhing.html");
    }
    else{
      $('.link-text').attr("href", "map.html");
    }
  }
  else{
    $('.link-text').attr("href", "map.html");
    // 当該イベントピン非表示
  }
});
