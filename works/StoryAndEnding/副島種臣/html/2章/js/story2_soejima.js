var text1="はぁーー・・"
var text2="そんなため息ついてどうした？"
var text3="佐賀藩の方針がどうも気に食わんくてのぉ"
var text4="方針とかあんまりわからないけど自分に合ってなければやめちゃえば？"
var text5="そう簡単にはいかないんだよな"
var text6="藩を抜けるということは佐賀からいなくなるということじゃ"
var text7="んーでもこのまま方針に従って自分を隠しながら生きていくの？"
var text8="あなたは行動力もあるし佐賀だけじゃなくほかのところにも行ってみるべきだと思うよ。"
var text9="それはありがたい言葉だね。"
var text10="ちょっと一人で考えてみるよ"
var text11="1週間後同じベンチに呼び出された私。"
var text12="よく考えてみて、やっぱり方針が自分に合わないって思ったんだ。"
var text13="さっき脱藩してきたよ"
var text14="それがいいよ、でもこれからどうするの？"
var text15="京都に行ってみようかと思う。"
var text16="昔から行きたかったところでね"
var text17="え、私も京都に行きたかったの！！ついて行っていいかな？"
var text18="もちろんさ 明日出発しよう"

$(function(){
    $('.butom_1').click(function(){
        if (confirm('ページ遷移しますか？')) {
            window.location.href = '../../../../../view/chara.html';
          }  
    });
});

$(function(){
    $('.butom_2').click(function(){
        $('.comentin').text(text1),$('.nametitle').text("江藤 新平").css("box-shadow","0px 3px 10px 2px gray").css("border","solid white").css("background-color","white").css("font-size","4vmin"),$('.human').html("<img src='../../../../share/a3.png'>")
        $('.butom_2').click(function(){
            $('.comentin').text(text2),$('.nametitle').text("主人公")
            $('.butom_2').click(function(){
                $('.comentin').text(text3),$('.nametitle').text("江藤 新平")
                $('.butom_2').click(function(){
                    $('.comentin').text(text4),$('.nametitle').text("主人公")
                    $('.butom_2').click(function(){
                        $('.comentin').text(text5),$('.nametitle').text("江藤 新平")
                        $('.butom_2').click(function(){
                            $('.comentin').text(text6),$('.nametitle').text("江藤 新平")
                            $('.butom_2').click(function(){
                                $('.comentin').text(text7),$('.nametitle').text("主人公")
                                $('.butom_2').click(function(){
                                    $('.comentin').text(text8),$('.nametitle').text("主人公")
                                    $('.butom_2').click(function(){
                                        $('.comentin').text(text9),$('.nametitle').text("江藤 新平")
                                        $('.butom_2').click(function(){
                                            $('.comentin').text(text10),$('.nametitle').text("江藤 新平")
                                            $('.butom_2').click(function(){
                                                $('.comentin').text(text11),$('.nametitle').text("").css("box-shadow","0px 3px 10px 2px rgba(0,0,0,0)").css("border","solid rgba(0,0,0,0)").css("background-color","rgba(0,0,0,0)").css("font-size","4vmin"),$('.human').html(" ")
                                                $('.butom_2').click(function(){
                                                    $('.comentin').text(text12),$('.nametitle').text("江藤 新平").css("box-shadow","0px 3px 10px 2px gray").css("border","solid white").css("background-color","white").css("font-size","4vmin"),$('.human').html("<img src='../../../../share/a1.png'>")
                                                    $('.butom_2').click(function(){
                                                        $('.comentin').text(text13),$('.nametitle').text("江藤 新平")
                                                        $('.butom_2').click(function(){
                                                            $('.comentin').text(text14),$('.nametitle').text("主人公")
                                                            $('.butom_2').click(function(){
                                                                $('.comentin').text(text15),$('.nametitle').text("江藤 新平")
                                                                $('.butom_2').click(function(){
                                                                    $('.comentin').text(text16),$('.nametitle').text("江藤 新平")
                                                                    $('.butom_2').click(function(){
                                                                        $('.comentin').text(text17),$('.nametitle').text("主人公")
                                                                        $('.butom_2').click(function(){
                                                                            $('.comentin').text(text18),$('.nametitle').text("江藤 新平")
                                                                            $('.butom_2').click(function(){
                                                                                if (confirm('ページ遷移しますか？')) {
                                                                                    window.location.href = '../../../../../view/clear.html';
                                                                                }
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });                            
                            });          
                        });
                    });
                });
            });
        });
    });
});
