$(function(){

  $("#enter").on("click", function(){

    if($("#password").val() == "0000"){
      location.href = "story.html";
    }
    else{
      alert("正しいパスワードを入力してね");
      $("#password").val("");
    }
  })

  $("#password").on("keydown", e => {
    if(e.keyCode === 13) $("#enter").trigger("click");
  });

});

