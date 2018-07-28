var text1="京都ついたねー、お寺が多いね"
var text2="京都といえばお寺が有名だからね"
var text3="この金閣寺以外にはなにがあるの？"
var text4="銀閣寺や二条城、清水寺があるんだよ"
var text5="有名なお寺がたくさんあるんだね。"
var text6="少しお腹すいてきたね なにか軽食でも食べようか"
var text7="京都で有名なのってなに？"
var text8="八つ橋っていうのがあるんだ 中にあんこやカスタードがはいっていておいしいよ"
var text9="食べてみたいわ、行きましょう"
var text10=" 二人は3日ほど京都を満喫した。そして最後の夜宿泊所にて会話している。"
var text11="3日間とてもたのしかったー"
var text12=" 私は明日佐賀に戻ることにするよ"
var text13="僕は京都に残って調べてみたいことあるんだ"
var text14="まだ調べたいことあるのー 本当に調べるの好きだよね"
var text15="京都について詳しくなって本を出してみたいな"
var text16="じゃあがんばって作り上げてね"

$(function(){
    $('.butom_1').click(function(){
        if (confirm('ページ遷移しますか？')) {
            window.location.href = '../../../../../view/chara.html';
          }  
    });
});

$(function(){
    $('.butom_2').click(function(){
        $('.comentin').text(text1),$('.nametitle').text("主人公").css("box-shadow","0px 3px 10px 2px gray").css("border","solid white").css("background-color","white").css("font-size","4vmin")
        $('.butom_2').click(function(){
            $('.comentin').text(text2),$('.nametitle').text("江藤 新平"),$('.human').html("<img src='../../../../share/a1.png'>")
            $('.butom_2').click(function(){
                $('.comentin').text(text3),$('.nametitle').text("主人公")
                $('.butom_2').click(function(){
                    $('.comentin').text(text4),$('.nametitle').text("江藤 新平")
                    $('.butom_2').click(function(){
                        $('.comentin').text(text5),$('.nametitle').text("主人公")
                        $('.butom_2').click(function(){
                            $('.comentin').text(text6),$('.nametitle').text("江藤 新平")
                            $('.butom_2').click(function(){
                                $('.comentin').text(text7),$('.nametitle').text("主人公")
                                $('.butom_2').click(function(){
                                    $('.comentin').text(text8),$('.nametitle').text("江藤 新平")
                                    $('.butom_2').click(function(){
                                        $('.comentin').text(text9),$('.nametitle').text("主人公")
                                        $('.butom_2').click(function(){
                                            $('.comentin').text(text10),$('.nametitle').text(" ").css("box-shadow","0px 3px 10px 2px rgba(0,0,0,0)").css("border","solid rgba(0,0,0,0)").css("background-color","rgba(0,0,0,0)").css("font-size","4vmin"),$('.human').html(" "),$('.background_1').html('<img src="../../eto_back_03_2.jpg" width="1333" id="background_1">')
                                            $('.butom_2').click(function(){
                                                $('.comentin').text(text11),$('.nametitle').text("主人公").css("box-shadow","0px 3px 10px 2px gray").css("border","solid white").css("background-color","white").css("font-size","4vmin")
                                                $('.butom_2').click(function(){
                                                    $('.comentin').text(text12),$('.nametitle').text("主人公")
                                                    $('.butom_2').click(function(){
                                                        $('.comentin').text(text13),$('.nametitle').text("江藤 新平"),$('.human').html("<img src='../../../../share/a1.png'>")
                                                        $('.butom_2').click(function(){
                                                            $('.comentin').text(text14),$('.nametitle').text("主人公")
                                                            $('.butom_2').click(function(){
                                                                $('.comentin').text(text15),$('.nametitle').text("江藤 新平")
                                                                $('.butom_2').click(function(){
                                                                    $('.comentin').text(text16),$('.nametitle').text("主人公")
                                                                    $('.butom_2').click(function(){
                                                                        if (confirm('ページ遷移しますか？')) {
                                                                            window.location.href = 'story_etou_qestion.html';
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
