$(function(){
  var imageSize = 'width="15%" height="40%"';
  var nameSize = 'width="22%" height="12%"';
  var image_id = 1;

  InitImage();
  
  // 画像id切り替え
  $('.select-left').click(function(){
    image_id--;
    if(image_id < 1) image_id = 7;
    $(".select-image").fadeOut(150, SwitchImage);
    $(".select-image").fadeIn(150);
    $(".select-name").fadeOut(150);
    $(".select-name").fadeIn(150);
  });
  $('.select-right').click(function(){
    image_id++;
    if(image_id > 7) image_id = 1;
    $(".select-image").fadeOut(150, SwitchImage);
    $(".select-image").fadeIn(150);
    $(".select-name").fadeOut(150);
    $(".select-name").fadeIn(150);
  });

  function InitImage(){
    $('.select-image').html("<img src='../works/TopAndKyara/etou.png'" + imageSize + ">");
    $('.select-name').html("<img src='../works/TopAndKyara/image/江藤新平.png'" + nameSize + ">");
  }
  // idの値によって画像を変更
  function SwitchImage(){
    switch(image_id){
      case 1:
        $('.select-image').html("<img src='../works/TopAndKyara/etou.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/江藤新平.png'" + nameSize + ">");
        $.cookie('chara', 'etou', { expires: 1});
        break;
      case 2:
        $('.select-image').html("<img src='../works/TopAndKyara/ooki.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/大木喬任.png'" + nameSize + ">");
        $.cookie('chara', 'ooki', { expires: 1});
        break;
      case 3:
        $('.select-image').html("<img src='../works/TopAndKyara/soejima.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/副島種臣.png'" + nameSize + ">");
        $.cookie('chara', 'soejima', { expires: 1});
        break;
      case 4:
        $('.select-image').html("<img src='../works/TopAndKyara/ookuma.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/大隈重信.png'" + nameSize + ">");
        $.cookie('chara', 'ookuma', { expires: 1});
        break;
      case 5:
        $('.select-image').html("<img src='../works/TopAndKyara/sano.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/佐野常民.png'" + nameSize + ">");
        $.cookie('chara', 'sano', { expires: 1});
        break;
      case 6:
        $('.select-image').html("<img src='../works/TopAndKyara/nabesima.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/鍋島直正.png'" + nameSize + ">");
        $.cookie('chara', 'nabesima', { expires: 1});
        break;
      case 7:
        $('.select-image').html("<img src='../works/TopAndKyara/sima.png'" + imageSize + ">");
        $('.select-name').html("<img src='../works/TopAndKyara/image/島義勇.png'" + nameSize + ">");
        $.cookie('chara', 'sima', { expires: 1});
        break;
    }
  }

});

