$(function(){
  var image_id = 1;
  
  // 画像切り替え・未動作
  $('.select-left').click(function(){
    image_id--;
    if(image_id < 0) image_id = 7;
  });
  $('.select-right').click(function(){
    image_id++;
    if(image_id > 7) image_id = 1;
  });

  /* 画像切り替え・暫定
  switch(image_id){
    case 1:
      $('.select-image').attr("href", "episode.html");
      break;
  }
  */
});