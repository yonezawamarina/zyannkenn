    var You;
    var random;
    var Oponent;
    var point = You - Oponent;
    var time = 3;

    // 選択したじゃんけんで数値を変更
    function gu(){
      You = 1;
    };
    function choki(){
      You = 0;
    };
    function pa(){
      You = -1;
    };

    // タイトルを押すと音楽が流れる
    $('#opening_audio').on('click', function(){
      document.getElementById( 'sound-file' ).play() ;
      });
      $('#sound-file').on('ended', function(){
      window.location.href = 'map.html';
    });

    $('.title .small').on('click', function(){
      window.location.href = 'map.html';
    });

    // 相手のじゃんけんの出し手を乱数で決める
    function janken(random){

      if (random === 1){
          return "グー！";
        }else if(random === 0){
          return "チョキ！";
        }else if(random === -1){
          return "パー！";
      };

    };

    // 表示するコンテンツの初期化
    $(".js-janken").show();
    $(".js-player").hide();
    $(".js-oponent").hide();
    $(".js-kekka").hide();
    $(".img__anko").hide();
    $(".img__camp").hide();
    $(".img__charisma").hide();
    $('.js-don').get(0).play();

    // じゃんけん表示後、一定時間で画面切り替え
    setTimeout(function(){

      $(".js-janken").hide();
      $(".js-player").show();
      $(".js-oponent").show();

    }, time*1000);

    // 出し手選択後の処理

    function judge(){

      random = Math.floor ( Math.random() * 3 - 1);

      // 選択効果音と相手の出し手表示
      $('.js-kaka').get(0).play();
      $(".js-oponent").show();
      $(".js-oponent").html(janken(random));

      // 勝敗の決定と表示
      setTimeout(function(){

        $(".js-player").hide();
        $(".js-oponent").hide();
      
      // 勝敗の場合分け      
        point = You - random;

        if (point === -2){
          kekka = "勝ち！";
          $(".img__charisma").show();
        }else if(point === -1){
          kekka = "負け！";
          $(".img__anko").show();
        }else if(point === 0){
          kekka = "あいこ！";
          $(".img__camp").show();
        }else if(point === 1){
          kekka = "勝ち！";
          $(".img__charisma").show();
        }else{
          kekka = "負け！";
          $(".img__anko").show();
        };

        $('.js-dodon').get(0).play();
        $(".js-kekka").html(kekka);
        $(".js-kekka").show();

        console.log(You);
        console.log(random);
        console.log(point);
        console.log(kekka);
        
        // あいこの場合は元に戻り、勝敗が決まったらマップに戻る
        setTimeout(function(){
          if(point === 0){
            document.location.reload();
          }else{
            window.location.href = 'map.html';
          };

        }, time*1000);

      }, time*1000);
    };

// ->出し手を選択した時に赤くなる様にしたかったが、出来ず…
// if (You === 1){
//   $(".js-gu").css('color','#f00');
// }else if(You === 0){
//   $(".js-choki").css('color','#f00');
// }else if(You === -1){
//   $(".js-pa").css('color','#f00');
// };