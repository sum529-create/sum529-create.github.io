---
layout: post
title:  "basic_canvas"
date:   2021-05-07
excerpt: "basic_canvas"
tag:
- css
- html5
category: [WEB]
comments: true

---

# basic_canvas

{% highlight html %}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--
        /** 밑부분을 읽지 못해 웹페이지에서 my-name을 못찾아서  error발생. ==> 위치 변경 필요 **/
        <script src="./js/basic_canvas.js">
        </script> 
        
        defer : html문서를 다 분석후에 자바 스크립트에 있는 링크를 실행하라.
                파일을 가져오지만 당장은 실행하지 않고 html 전체 분석 후에 실행한다.
    -->
    <script type="text/javascript" src="./js/basic_canvas.js" defer></script>  <!-- type은 일반적으로 작성하지 않아도 기본적으로 작성되어 있다.-->
    <title>Document</title>
</head>
<body>
    <!-- canvas : javascript를 활용하여 그림을 그리는 용도. 
                    애니메이션, 외부에서 가져온 것을 사용할 때 등등 -->
     <canvas id="canvas" width="200" height="150"></canvas>
     <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d'); // ctx는 2d그림을 그리는 용도로 사용할 것이다.
        ctx.fillStyle = 'rgb(200, 0, 0)'; // fillStyle : 카멜표기법
        ctx.fillRect(10,10, 50,50); // (x, y, width size, height size)
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
     </script>

    <div id= "my-name">HEROPY!</div>
    <!-- script 위치 변경
    <script src="./js/basic_canvas.js"></script>-->

    <script src="./js/basic_canvas.js">
        console.log('안녕하세요~!'); // src를 연결하여 외부의 자바 스크립트를 가져오면 내부에 작성된 코드는 무시가 된다.
    </script>


    <!-- noscript : 스크립트를 지원하지 않는 경우에 삽입할 HTML -->
    안녕하세요!
    <noscript>
        자바스크립트를 지원하지 않는 환경입니다~~
    </noscript>
</body>
</html>

{% endhighlight %}


{% highlight html %}

const myName = document.getElementById('my-name');
console.log(myName.innerText);

{% endhighlight %}



