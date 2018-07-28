var text1="私と佐野が出会った日から四年が過ぎた。"
var text2="佐野は弘道館の内生においても非常に優秀な成績を積み上げていった。"
var text3="共に教えを受ける身ではあったが、私は栄寿からも様々な学ぶところがあった"
var text4="しかし、出会ってから一年後に養父である常徴殿がいる江戸へ上っていった。"
var text5="しばらくした後、佐賀藩の方に帰国してまた弘道館のほうに漢学の教えを受けに来たため、そこで再開を果たした。"
var text6="久しぶりだな。また弘道館で教えを受けるのか？"
var text7="ああ、常徴殿と一緒に帰国してきたんだ。今度はここで漢学を学びながら松尾塾の方で医学を学ぶつもりなんだ。"
var text8="そうなのか、私はもうそろそろ弘道館を卒業するから、また共に学ぶ事は出来そうにないことが残念だ。"
var text9="卒業後は穀堂殿のすすめで蘭学を学ぶために遊学をしようと思っている。"
var text10="確かに穀堂殿は蘭学を学ぶことは重要だと説いているからなぁ。私もこの弘道館や松尾塾で教えを受けたら蘭学を学びたいものだ..."
var text11="なら、またいつかは一緒に学ぶ事が出来る日が来るかも知れないな。"
var text12="ははは、それはまた楽しみにしたいものだ。"
var text13="だが、そうだな、私が遊学の旅に出た後に君が遊学に出たとしても、君は優秀だからな。"
var text14="すぐに追い抜かれてまた会ったときにはこちらが教えを請う立場になってるかも知れないな。"
var text15="なに、医学を修めるというのは大変なのだ。遊学に出るとしてもだいぶ後になるだろうさ。"
var text16="だからまたあったときにはこちらこそ君から教えを受けねばなるまいよ。"
var text17="はははははは、そう言われてしまったら次に会ったときに君に教えるために沢山勉強しなければならないな。"
var text18="それでは次に会うときは蘭学を君に学びに行くときかも知れないな。"
var text19="そんな会話を交わした後、彼と私は違う部屋で教えを受けた。"
var text20="少しして、私は弘道館を卒業した。 佐野の方は漢学を学びながら医学を修めるために必死に修行を続けている。"
var text21="優秀な彼のことだ、十年と言わないうちに遊学の旅に出るだろう。"
var text22="その時にまた出会えれば楽しいものだと思いながら、私は遊学の旅に出た。"


$(function(){
    $('.butom_1').click(function(){
        if (confirm('ページ遷移しますか？')) {
            window.location.href = '../../../../../view/chara.html';
          }  
    });
});

$(function(){
    $('.butom_2').click(function(){
        $('.comentin').text(text1).css("font-size","5vmin"),$('.nametitle').text(" ").css("font-size","4vmin"),$('.human').html("<img src='../../../../share/a1.png'>")
        $('.butom_2').click(function(){
            $('.comentin').text(text2).css("font-size","5vmin"),$('.nametitle').text(" ")
            $('.butom_2').click(function(){
                $('.comentin').text(text3).css("font-size","5vmin"),$('.nametitle').text(" ").css("font-size","4vmin")
                $('.butom_2').click(function(){
                    $('.comentin').text(text4).css("font-size","5vmin"),$('.nametitle').text(" ").css("font-size","4vmin")
                    $('.butom_2').click(function(){
                        $('.comentin').text(text5).css("font-size","5vmin"),$('.nametitle').text(" ")
                        $('.butom_2').click(function(){
                            $('.comentin').text(text6).css("font-size","4vmin"),$('.nametitle').text("主人公").css("font-size","4vmin")
                            $('.butom_2').click(function(){
                                $('.comentin').text(text7).css("font-size","5vmin"),$('.nametitle').text("佐野 常民")
                                $('.butom_2').click(function(){
                                    $('.comentin').text(text8).css("font-size","5vmin"),$('.nametitle').text("主人公")
                                    $('.butom_2').click(function(){
                                        $('.comentin').text(text9).css("font-size","5vmin"),$('.nametitle').text("主人公")
                                        $('.butom_2').click(function(){
                                            $('.comentin').text(text10).css("font-size","5vmin"),$('.nametitle').text("佐野 常民")
                                            $('.butom_2').click(function(){
                                                $('.comentin').text(text11).css("font-size","5vmin"),$('.nametitle').text("主人公")
                                                $('.butom_2').click(function(){
                                                    $('.comentin').text(text12).css("font-size","5vmin"),$('.nametitle').text("佐野 常民")
                                                    $('.butom_2').click(function(){
                                                        $('.comentin').text(text13).css("font-size","5vmin"),$('.nametitle').text("主人公")
                                                        $('.butom_2').click(function(){
                                                            $('.comentin').text(text14).css("font-size","5vmin"),$('.nametitle').text("主人公")
                                                            $('.butom_2').click(function(){
                                                                $('.comentin').text(text15).css("font-size","5vmin"),$('.nametitle').text("佐野 常民")
                                                                $('.butom_2').click(function(){
                                                                    $('.comentin').text(text16).css("font-size","5vmin"),$('.nametitle').text("佐野 常民")
                                                                    $('.butom_2').click(function(){
                                                                        $('.comentin').text(text17).css("font-size","5vmin"),$('.nametitle').text("主人公")
                                                                        $('.butom_2').click(function(){
                                                                            $('.comentin').text(text18).css("font-size","5vmin"),$('.nametitle').text("佐野 常民")
                                                                            $('.butom_2').click(function(){
                                                                                $('.comentin').text(text19).css("font-size","5vmin"),$('.nametitle').text(" ")
                                                                                $('.butom_2').click(function(){
                                                                                    $('.comentin').text(text20).css("font-size","5vmin"),$('.nametitle').text(" ")
                                                                                    $('.butom_2').click(function(){
                                                                                        $('.comentin').text(tex212).css("font-size","5vmin"),$('.nametitle').text(" ")
                                                                                        $('.butom_2').click(function(){
                                                                                            $('.comentin').text(text22).css("font-size","5vmin"),$('.nametitle').text(" ")
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
                });
            });
        });
    });
});
