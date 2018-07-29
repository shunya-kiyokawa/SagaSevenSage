var text1="遊学の旅に出てしばらく経ったが、私は今は大阪で著名な蘭学者である緒方洪庵殿が開く適々斎塾で教えを受けていた。"
var text2="今日も適塾の方に教えを受けに来たのだが、そこに懐かしい顔を見つけた。
"
var text3="まさかこんなところで再会するとはな。まだ遊学をしているんじゃないかと思ってはいたが、今はここで教えを受けているのか？"
var text4="ああ、そうだな。江戸に遊学した後に今度は大阪で蘭学を学ぼうと思ったのだが、それなら洪庵先生が一番と聞いたからな。そういえば、もう医学を修めたのか？"
var text5="いや、まだ修行中だったんだが、藩主直正公に藩政立て直しの一環として全国各地を遊学し様々教えを受けてくるように命じられたんだよ。"
var text6="そういえば、同郷の人間がそのようなことを言っていたな。直正公は藩政を立て直すためには人材の拡充からと考えておられるのだろう。"
var text7="そうなのだろうなぁ。あの方は先見の明があるからな。それにこのような機会を与えてくださったのだ。この恩は、各地で学んだことをもって返したいものだ。"
var text8="ところで、遊学にはいつ出たのだ？最近ではないとおもうのだが？"
var text9="二年前に藩をでて、先日までは京都の広瀬元恭先生に教えを受けていたんだ。"
var text10="ということは、時習塾か。ならば蘭学を学んできたのか"
var text11="そうだが、あそこで学んでいる内に、もっと様々なことを学びたいと思ってな。そのために今度は洪庵殿から教えを受けようと適々斎塾に入塾した。"
var text12="ならば、また一緒に学ぶことが出来るな。こちらは君よりも長く遊学していたのだ。追い抜かれないよう気をつけよう。"
var text13="あのときの話か、まだ覚えていたんだな。"
var text14="それから会話を少し続けた後、佐野は洪庵先生から教えを受けていた。"
var text15="会話の中で、何でも佐賀藩に帰国している間に同じく常徴の養子である佐賀藩士の娘である駒子という女性と結婚したらしい。"
var text16="翌日、適塾で佐野とまた出会ったのだが、昨日受けた教えに非常に感動を覚えていたようだ。
"
var text17="昨日洪庵先生から蘭医学について教えを受けたのだが、非常に感銘を受けた。私が外科医を目指しているのは知っていると思う。"
var text18="ああ、そういえばそうだったな。"
var text19="だからこそ、『扶氏医戒略』の教えには感銘を受けざるを得なかった。"
var text20="そういって、佐野は昨日受けた教えの一部を語り始めた。"
var text21="たとえ救えなくとも、それでも直そうと治療することが医学である、という部分か。"
var text22="ドイツの医学者フーフェランドが書いた本の内、医師の義務を記した部分を和訳した内の、その一文。"
var text23="こういった教え、人道に基づく医学の教えを受けて感動していたようだ。"
var text24="私もここに来た頃は非常に感銘を受けていたが、彼はそれ以上に感動していた。"
var text25="この精神こそが彼なのだ、と思ってしまった。"
var text26="ーーー数ヶ月後"
var text27="私は佐賀藩から帰国するようにとの命が来たため、数日の内に帰国することになった。"
var text28="そのことを洪庵先生に伝えようと適塾に行ったら、栄寿に声をかけられた。"
var text29="君はもうそろそろ藩に帰国するといっていたが、私もそろそろ違う所に教えを受けに行こうと思うのだ。それでどこかいい教えを受けることができる所はないか？"
var text30="そうだな、医学を目指しているならば紀伊国平山の華岡青洲殿が開いている春林軒塾などはどうだ？"
var text31="なるほど、たしかにそこであれば医学の実地指導も受けられそうだ。"
var text32="さて、私は先生にもうそろそろ帰国する旨を伝えねばな。君ともまた当分の間のお別れだが、君もあっちに帰国したらまた会おうじゃないか。"
var text33="そういってら別れ、帰国の命が出たことを洪庵先生に伝えに行った。"
var text34="佐野の方は華岡青洲殿に教えを請いに行くそうだ。"
var text35="数日後、私はまた栄寿や洪庵先生と顔を合わせた後、帰国するために大阪から出立した。"
var text36="・・・・アイテム『蘭学書』を手に入れた・・・・"

$(function(){
    $('.butom_1').click(function(){
        if (confirm('ページ遷移しますか？')) {
            window.location.href = '../../../../../view/chara.html';
          }  
    });
});

$(function(){
    $('.butom_2').click(function(){
        $('.comentin').text(text1),$('.nametitle').text(" ").css("box-shadow","0px 3px 10px 2px gray").css("border","solid white").css("background-color","white").css("font-size","4vmin")
        $('.butom_2').click(function(){
            $('.comentin').text(text2),$('.nametitle').text(" ")
            $('.butom_2').click(function(){
                $('.comentin').text(text3),$('.nametitle').text("佐野 常民"),$('.human').html("<img src='../../../../share/佐野常民基本表情.png'>")
                $('.butom_2').click(function(){
                    $('.comentin').text(text4),$('.nametitle').text("主人公")
                    $('.butom_2').click(function(){
                        $('.comentin').text(text5),$('.nametitle').text("佐野 常民")
                        $('.butom_2').click(function(){
                            $('.comentin').text(text6),$('.nametitle').text("主人公")
                            $('.butom_2').click(function(){
                                $('.comentin').text(text7),$('.nametitle').text("佐野 常民")
                                $('.butom_2').click(function(){
                                    $('.comentin').text(text8),$('.nametitle').text("主人公")
                                    $('.butom_2').click(function(){
                                        $('.comentin').text(text9),$('.nametitle').text("佐野 常民")
                                        $('.butom_2').click(function(){
                                            $('.comentin').text(text10),$('.nametitle').text("主人公")
                                            $('.butom_2').click(function(){
                                                $('.comentin').text(text11),$('.nametitle').text("佐野 常民")
                                                $('.butom_2').click(function(){
                                                    $('.comentin').text(text12),$('.nametitle').text("主人公")
                                                    $('.butom_2').click(function(){
                                                        $('.comentin').text(text13),$('.nametitle').text("佐野 常民")
                                                        $('.butom_2').click(function(){
                                                            $('.comentin').text(text14),$('.nametitle').text(" "),$('.human').html(" ")
                                                            $('.butom_2').click(function(){
                                                                $('.comentin').text(text15),$('.nametitle').text(" ")
                                                                $('.butom_2').click(function(){
                                                                    $('.comentin').text(text16),$('.nametitle').text(" ")
                                                                    $('.butom_2').click(function(){
                                                                        $('.comentin').text(text17),$('.nametitle').text("佐野 常民"),$('.human').html("<img src='../../../../share/佐野常民基本表情.png'>")
                                                                        $('.butom_2').click(function(){
                                                                            $('.comentin').text(text18),$('.nametitle').text("主人公")
                                                                            $('.butom_2').click(function(){
                                                                                 $('.comentin').text(text19),$('.nametitle').text("佐野 常民")
                                                                                 $('.butom_2').click(function(){
                                                                                     $('.comentin').text(text20),$('.nametitle').text(" ")
                                                                                     $('.butom_2').click(function(){
                                                                                           $('.comentin').text(text21),$('.nametitle').text("主人公")
                                                                                           $('.butom_2').click(function(){
                                                                                                $('.comentin').text(text22),$('.nametitle').text(" "),$('.human').html(" ")
                                                                                                 $('.butom_2').click(function(){
                                                                                                    $('.comentin').text(text23),$('.nametitle').text(" ")
                                                                                                    $('.butom_2').click(function(){
                                                                                                       $('.comentin').text(text24),$('.nametitle').text(" ")
                                                                                                       $('.butom_2').click(function(){
                                                                                                          $('.comentin').text(text25),$('.nametitle').text(" ")
                                                                                                          $('.butom_2').click(function(){
                                                                                                                $('.comentin').text(text26),$('.nametitle').text(" ")
                                                                                                                $('.butom_2').click(function(){
                                                                                                                   $('.comentin').text(text27),$('.nametitle').text("  ")
                                                                                                                   $('.butom_2').click(function(){                                           $('.comentin').text(text28),$('.nametitle').text(" ")
                                                                                                                         $('.butom_2').click(function()                                               $('.comentin').text(text29),$('.nametitle').text("佐野常民"),$('.human').html("<img src='../../../../share/佐野常民基本表情.png'>")
                                                                                                                           $('.butom_2').click(function(){                                          $('.comentin').text(text30),$('.nametitle').text("主人公")
                                                                                                                            $('.butom_2').click(function(){
                                                                                                                             $('.comentin').text(text31),$('.nametitle').text("佐野常民")
                                                                                                                             $('.butom_2').click(function(){ 
                                                                                                                              $('.comentin').text(text32),$('.nametitle').text("主人公")
                                                                                                                              $('.butom_2').click(function(){
                                                                                                                                $('.comentin').text(text33),$('.nametitle').text(" "),$('.human').html(" ")
                                                                                                                                $('.butom_2').click(function(){ 
                                                                                                                                  $('.comentin').text(text34),$('.nametitle').text(" ")
                                                                                                                                  $('.butom_2').click(function(){
                                                                                                                                    $('.comentin').text(text35),$('.nametitle').text("  ")
                                                                                                                                    $('.butom_2').click(function(){ 
                                                                                                                                     $('.comentin').text(text36),$('.nametitle').text(" ")
                                                                                                                                           
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
