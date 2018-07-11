if(localStorage.getItem("count") == null){
  localStorage.setItem("count", 0);
}
if(localStorage.getItem("secret-count") == null){
  localStorage.setItem("secret-count", 0);
}

var secretCount = localStorage.getItem("secret-count")
var count = localStorage.getItem("count")

$(function(){
  $('.clear-count').html("クリア人数：" + count + "人" + "<br>");
  $('.secret-count').html("秘密のパスワード入力人数：" + secretCount + "人" + "<br>");
});