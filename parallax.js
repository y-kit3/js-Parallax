// headerの背景画像のパララックス
$(function () {
 //表示位置にあるかのフラグを用意
    var flag_target1 = false;
    var flag_target2 = false;
    var flag_target3 = false;
    var flag_target4 = false;

    var target1 = $("#header");
    var target2 = $("#menu-img");
    var target3 = $("#about-img");
    var target4 = $("#location-img");

    //指定ID(#header)の位置取得 0
    var targetPosOT1 = target1.offset().top; 
    var targetPosOT2 = target2.offset().top; 
    var targetPosOT3 = target3.offset().top;
    var targetPosOT4 = target4.offset().top; 

    //どのくらい画像を動かすか
    var targetFactor =0.5; 

    //ウインドウの高さを取得 625
    var windowH = $(window).height();

    //対象の位置を計算
    var scrollYStart1 = targetPosOT1 - windowH; //0-625
    var scrollYStart2 = targetPosOT2 - windowH; 
    var scrollYStart3 = targetPosOT3 - windowH;
    var scrollYStart4 = targetPosOT4 - windowH;

    console.log('targetPosOT2=>' , targetPosOT2);
    console.log('scrollYStart2=>' , scrollYStart2);
    console.log('targetPosOT3=>' , targetPosOT3);
    console.log('scrollYStart3=>' , scrollYStart3);
    console.log('targetPosOT4=>' , targetPosOT4);
    console.log('scrollYStart4=>' , scrollYStart4);

//指定要素が見えたら、再計算
    $("#menu-img").on('inview', function(event, isInView) {
        if(isInView) { 
            targetPosOT2 = target2.offset().top;
            scrollYStart2 = targetPosOT2 - windowH;

            console.log('targetPosOT2=>' , targetPosOT2);
            console.log('scrollYStart2=>' , scrollYStart2);
        }
    });

    $("#about-img").on('inview', function(event, isInView) {
    if(isInView) { 
        targetPosOT3 = target3.offset().top;
        scrollYStart3 = targetPosOT3 - windowH;
        console.log('targetPosOT3=>' , targetPosOT3);
        console.log('scrollYStart3=>' , scrollYStart3);
    }
    });

    $("#location-img").on('inview', function(event, isInView) {
        if(isInView) { 
            targetPosOT4 = target4.offset().top;
            scrollYStart4 = targetPosOT4 - windowH;

            console.log('targetPosOT4=>' , targetPosOT4);
            console.log('scrollYStart4=>' , scrollYStart4);
        }
        });

    //要素が見えたら、フラグをON
    $(target1).on('inview', function(event, isInView) {
        if(isInView) { 
        flag_target1 = true;
        }else{
        flag_target1 = false;
    }
        console.log("flag_target1: " + flag_target1);
    });

    $(target2).on('inview', function(event, isInView) {
        if(isInView) { 
        flag_target2 = true;
        }else{
        flag_target2 = false;
    }
        console.log("flag_target2: " + flag_target2);
    });

    $(target3).on('inview', function(event, isInView) {
        if(isInView) { 
        flag_target3 = true;
        }else{
        flag_target3 = false;
    }
        console.log("flag_target3: " + flag_target3);
    });

    $(target4).on('inview', function(event, isInView) {
        if(isInView) { 
        flag_target4 = true;
        }else{
        flag_target4 = false;
    }
        console.log("flag_target4: " + flag_target4);
    });
    
     //スクロールで都度計算
    $(window).on('scroll',function(){
        var scrollY = $(this).scrollTop();
        console.log('scrollY',scrollY);

    //要素が見えている時に動くようにしてます 「scrollYの値が、各開始位置よりも大きい」　かつ　「フラグがTrue（要素が見えている）」
        if(scrollY > scrollYStart1&&flag_target1 == true){
            target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
            }else{
            target1.css('background-position','center top');
            }

        if(scrollY > scrollYStart2&&flag_target2 == true){
            target2.css('background-position-y', (scrollY - targetPosOT2) * 0.2 + 'px');
            }else{
            target2.css('background-position','center top');
            }

        if(scrollY > scrollYStart3&&flag_target3 == true){
            target3.css('background-position-y', (scrollY - targetPosOT3) * 0.2 + 'px');
            }else{
            target3.css('background-position','center top');
            }

        if(scrollY > scrollYStart4&&flag_target4 == true){
            target4.css('background-position-y', (scrollY - targetPosOT4) * 0.2 + 'px');
            }else{
            target4.css('background-position','center top');
            }
    });
    
});

