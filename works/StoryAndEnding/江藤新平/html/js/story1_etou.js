var text1="開国通商、富国強兵の必要性について文書を書いている。名は「図海策」だ。"
var text2="具体的にはどんなこと？"
var text3="「鎖国を続けていても西洋列強との戦争は避けられない。鎖国して、外国との交流を絶ってきた日本は、知識、軍備ともに差をつけられていて大敗するだろう。"
var text4="戦争になれば財政は悪化し、負の連鎖が始まってしまう。唯一の策としては西洋列強と和親を結び開国、世界から知識を吸収し、軍備をそろえて通商し、国を富ませることだ。」ということを述べている。"
var text5=" 完成したら読ませてよ。"
var text6="いいとも。この悲惨な状況に一人でも多く気づいてもらわないとな。"

$(function(){
    $('.butom_1').click(function(){
        if (confirm('ページ遷移しますか？')) {
            window.location.href = '../../../../view/chara.html';
          }  
    });
});

$(function(){
    $('.butom_2').click(function(){
        $('.comentin').text(text1).css("font-size","4vmin"),$('.nametitle').text("江藤 新平").css("font-size","4vmin"),$('.human').html("<img src='../../../TopAndKyara/etou.png'>")
        $('.butom_2').click(function(){
            $('.comentin').text(text2).css("font-size","5vmin"),$('.nametitle').text("主人公")
            $('.butom_2').click(function(){
                $('.comentin').text(text3).css("font-size","3vmin"),$('.nametitle').text("江藤 新平").css("font-size","4vmin")
                $('.butom_2').click(function(){
                    $('.comentin').text(text4).css("font-size","2.5vmin"),$('.nametitle').text("江藤 新平").css("font-size","4vmin")
                    $('.butom_2').click(function(){
                        $('.comentin').text(text5).css("font-size","5vmin"),$('.nametitle').text("主人公")
                        $('.butom_2').click(function(){
                            $('.comentin').text(text6).css("font-size","4vmin"),$('.nametitle').text("江藤 新平").css("font-size","4vmin");   
                            $('.butom_2').click(function(){
                                if (confirm('ページ遷移しますか？')) {
                                    window.location.href = '../../../../view/clear.html';
                                  }                            
                            });          
                        });
                    });
                });
            });
        });
    });
});
