---
layout: post
title:  "background 속성"
date:   2021-05-04
excerpt: "background-repeat, background-position, background-attachment, background-size"
tag:
- css
- html5
category: [WEB]
comments: true

---

# background-repeat
- 배경 이미지의 반복을 설정

**속성 값** 
> repeat    - 배경 이미지를 수직, 수형으로 반복
> repeat-x  - 배경 이미지를 수평으로 반복
> repeat-y  - 배경 이미지를 수직으로 반복
> no-repeat - 반복 


# background-position
- 배경 이미지의 위치를 설정

**속성 값**
> %       - 왼쪽 상단 모서리는 0%(x) 0%(y), 오른쪽 하단 모서리는 100% 100%
> 방향    - 방향을 입력하면 위치 설정 top, bottom, left, right, center
> 단위    - px, em, cm 등 단위로 지정

**사용법**
> 값이 방향일 경우
> *background-position: 방향1 방향2;* (방향은 상관없음 bottom right == right bottom)
> 값이 단위(%, px등)일 경우
> *background-position: x축 y축;*
> *background-position: x축 방향*으로도 가능 단 순서는 바꿀수 없으며 방향으로는 top, bottom으로만 지정가능


# background-attachment
- 요소가 스크롤될 때 배경 이미지의 스크롤 여부(특성) 설정

**속성 값**
> scroll  - 배경 이미지가 요소를 따라서 같이 스크롤 됨 (기본값)
> fixed   - 배경 이미지가 뷰포트(viewPort)에 고정되어, 요소와 같이 스크롤되지 않음
> local   - 요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨


# background-size
- 배경 이미지의 크기를 지정
- background-size: width height;

**속성 값**
> auto    - 배경 이미지가 원래의 크기로 표시됨 [기본값]
> 단위    - px, em, % 등 단위로 지정
          - width height 형태로 입력가능(E.g. 120px 370px)
          - width만 입력하면 비율에 맞게 지정됨(E.g.120px)
> cover   - 배경 이미지의 크기 비율을 유지하며, 요소의 더 넓은 너비에 맞춰짐
          - 이미지가 잘릴 수 있음
> contain - 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰짐
          - 이미지가 잘리지 않음


{% highlight html %}

<pre>
<code>
      <!-- fixed test -->
     section{
        height:300px;
      }
      .section2{
        background-image:url("http://www.istarbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");
        background-size:auto 100%;
        background-position: right bottom;
        background-attachment:fixed;
      }
      .section3{
        background-image:url("http://www.istarbucks.co.kr/common/img/main/reserve_bg.jpg");
        background-size:auto 100%;
        background-position: right bottom;
        background-attachment:fixed;
      }
      <!-- local test -->
      .container{
        width:400px;
        height:300px;
        border: 4px solid red;
        margin: 50px;
        overflow:auto;
        background-image:url("http://www.istarbucks.co.kr/common/img/main/reserve_bg.jpg");
        background-size:90%;
        background-attachment: local;
      }
      .for-scroll{
        height:2000px;
      }
</code>
</pre>
	<body>
    <!-- fixed test -->
    <section class="section"></section>
    <section class="section2"></section>
    <section class="section3"></section>
    <!-- local test -->
    <div class="container">
      <div class="for-scroll"></div>
    </div>
	</body>
</html>

{% endhighlight %}
