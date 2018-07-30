$(function(){
  var image_id = 1;
  var worksDir = "../works/TopAndKyara/"
  var fadeTime = 125;

  InitImage();
  
  // 画像id切り替え
  $('.select-left').click(function(){
    image_id--;
    if(image_id < 1) image_id = 7;
    $(".select-image").fadeOut(fadeTime, SwitchImage);
    $(".select-image").fadeIn(fadeTime);
    $(".select-name").fadeOut(fadeTime);
    $(".select-name").fadeIn(fadeTime);
  });
  $('.select-right').click(function(){
    image_id++;
    if(image_id > 7) image_id = 1;
    $(".select-image").fadeOut(fadeTime, SwitchImage);
    $(".select-image").fadeIn(fadeTime);
    $(".select-name").fadeOut(fadeTime);
    $(".select-name").fadeIn(fadeTime);
  });

  function InitImage(){
    $('.select-image').attr('src', worksDir + 'etou.png');
    $('.select-name').attr('src', worksDir + 'image/江藤新平.png');
  }
  // idの値によって画像を変更
  function SwitchImage(){
    switch(image_id){
      case 1:
        $('.select-image').attr('src', worksDir + 'etou.png');
        $('.select-name').attr('src', worksDir + 'image/江藤新平.png');
        $.cookie('chara', 'etou', { expires: 1});
        break;
      case 2:
        $('.select-image').attr('src', worksDir + 'ooki.png');
        $('.select-name').attr('src', worksDir + 'image/大木喬任.png');
        $.cookie('chara', 'ooki', { expires: 1});
        break;
      case 3:
        $('.select-image').attr('src', worksDir + 'soejima.png');
        $('.select-name').attr('src', worksDir + 'image/副島種臣.png');
        $.cookie('chara', 'soejima', { expires: 1});
        break;
      case 4:
        $('.select-image').attr('src', worksDir + 'ookuma.png');
        $('.select-name').attr('src', worksDir + 'image/大隈重信.png');
        $.cookie('chara', 'ookuma', { expires: 1});
        break;
      case 5:
        $('.select-image').attr('src', worksDir + 'sano.png');
        $('.select-name').attr('src', worksDir + 'image/佐野常民.png');
        $.cookie('chara', 'sano', { expires: 1});
        break;
      case 6:
        $('.select-image').attr('src', worksDir + 'nabesima.png');
        $('.select-name').attr('src', worksDir + 'image/鍋島直正.png');
        $.cookie('chara', 'nabesima', { expires: 1});
        break;
      case 7:
        $('.select-image').attr('src', worksDir + 'sima.png');
        $('.select-name').attr('src', worksDir + 'image/島義勇.png');
        $.cookie('chara', 'sima', { expires: 1});
        break;
    }
  }

});

