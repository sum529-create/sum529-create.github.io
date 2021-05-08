---
layout: post
title:  "transform"
date:   2021-05-05
excerpt: "ftansform"
tag:
- css
- html5
category: [WEB]
comments: true

---

# transform
- 요소의 변환 효과(변형)를 지정
- *transform: rotate(20deg) translate(10px, 0);* /* position:relative; left:10px;과 동일 */
- ()가 있으면 함수. deg(degree)-기울기. translate(x, y)

**transform 2D변환 함수**
> translate(x, y)         - 이동(x축, y축)
> transltateX(x)          - 이동(x축)
> translateY(y)           - 이동(y축)
> scale(x, y)             - 크기(x축, y축) 비율에 맞게 확대/축소 ex) scale(1.5) -> 50%크기로 확대
> scaleX(x)               - 크기(x축)
> scaleY(y)               - 크기(y축)
> rotate(degree)          - 회전(각도)
> skew(x-deg, y-deg)      - 기울임(x축, y축)
> skewX(x-deg)            - 기울임(x축)
> skewY(y-deg)            - 기울임(y축)
> matrix(n,n,n,n,n,n,)    - 2차원 변환 효과
=> 2D변환 함수로는 크게 '이동', '크기', '회전', '기울임' 4개의 함수로 구성되어 있으며
   모든것을 아우르는 matrix가 존재한다.


{% highlight html %}
  <div class="box"></div>
{% endhighlight %}

<pre>
<code>
  .box{
    width:200px;
    height:200px;
    background:tomato;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  .box:hover{
    position:relative;
    left:100px;
    top:30px;
  }
</pre>
</code>

위와같이 실행하게 된다면, 이동이 부자연스러워 진다. 


<pre>
<code>
  .box{
    width:200px;
    height:200px;
    background:tomato;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    position:relative;
    left: 0;
    top: 0;
  }
</pre>
</code>
<pre>
<code>
position:relative;
left: 0;
top:0; 
</pre>
</code>
추가하여 초기화를 수동으로 적용시키면 이동이 자연스럽게 변하게 되지만
position은 배치하고 끝내는 개념이기에 animation되는 것에 특화되어 있지 않아
많은 부하가 일어나게 되어 Rendering, repainting이라고 얘기한다.
그러므로 position으로 이동하는 것보다 transform을 사용하여 이동하는 것을 권장


<pre>
<code>
  .box{
    width:200px;
    height:200px;
    background:tomato;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    transition: 1s;
  }
  .box:hover{
    transform: translate(30px, 30px); /*x축, y축*/
    /* transform: scale(.8);  크기 줄이기 */
    /* transform: skewX(45deg);  비틀기 */
    /* transform: translate(20px, 10px) skewX(20deg); 동시 수행가능 */
    
  }
</pre>
</code>

transform을 사용하였기에 다른 애니매이션을 사용할 때 부담없이 사용할 수 있다.


**transform 3D 변환 함수**
> translate3d(x, y, z)                      - 이동(x축, y축, z축)
> translateZ(z)                             - 이동(z축) : z축은 눈으로 확인 불가(화면과 사용간의 거리?)
> scale3d(x, y, z)                          - 크기(x축, y축, z축)
> rotate3d(x, y, z, a)                      - 회전(x벡터, y 벡터, z벡터, 각도)
> rotateX(x)                                - 회전(x축)
> rotateY(y)                                - 회전(y축)
> rotateZ(z)                                - 회전(z축)
> perspective(n)                            - 원근법(거리)
> matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) - 3차원 변환 효과

<pre>
<code>
img{
    width:300px;
    border:1px solid lightgray;
    transition: 1s;
    /*transform: rotateX(45deg); 이미지가 찌푸된 듯이 보여지기에 perspective로 원근 값을 주면 3d로 입체감있게 보여진다.*/
    transform: perspective(500px) rotateX(45deg); /* perspective()는 첫번째 위치할것, 값이 높을 수록 원근값이 높아진다 반대로 값이 낮을 때는 원근값이 높아진다. */
}
</pre>
</code>


**transform 변환 속성** 
> transform-origin      - 요소 변환의 기준점을 설정
-> rotate를 할시 회전할 기준점을 별도로 설정할 수 있다. 기본적으로 중심이 기준점인 것을 다른 위치로 기준점을 바꾼다
- x축 : left, right, center, %, 단위   기본값:50%
- y축 : top, bottom, center, %, 단위   기본값:50%
> transform-style       - 3D 변환 요소이 자식 요소도 3D변환을 사용할지 설정
> perspective           - 하위 요소를 관찰하는 원근 거리를 설정
> perspective-origin    - 원근거리의 기준점을 설정
> backgface-visivility  - 3D 변환으로 회전된 요소의 뒷면 숨김을 설정
-> 3d로 180도로 돌리게 되면 이미지가 반전 되어 나오게되는 것을 숨김으로 처리한다.


# transform-origin 테스트 css
{% highlight html %}
img{
    width:200px;
    border: 1px solid lightgray;
    transition: 1s;
    transform: rotate(45deg);
    transform-origin: 0% 0%;
    /* x축과 y축을 볼때 왼쪽 모서리를 기준으로 x은 왼쪽->오른쪽, y는 위쪽-> 아래쪽 
        0% 0%; -> left top
        100% 100% -> right bottom;    */
}

{% endhighlight %}


**transform-style**
- 3d 변환 요소의 자식 요소도 3d변환을 사용할지 설정
> flat          - 자식 요소의 3d 변환을 사용하지 않음 (기본값)
> perserve-3d   - 자식 요소의 3d 변환을 사용함

{% highlight html %}
<div class="perspective">
  <div class="grand-parent">
    <div class="parent">
      <img src="http://heropy.blog/css/images/logo.png">
    </div>
   </div>
</div>
{% endhighlight %}

<pre>
<code>
.perspective{
  width :200px;
  perspective: 500px;
  padding:70px;
}
.grand-parent{
  width:200px;
  border:3px solid dodgerblue;
  transition: 1s;
  transform: rotateX(-45deg);
  /*transform-style:preserve-3d;를 추가 해야한다.*/
} 
.parent{
  width:200px;
  border:3px solid tomato;
  transition: 1s;
  transform: rotateY(45deg);
}
img{
   width:200px;
}
</pre>
</code>

grand-parent값에서 'transform-style:flat' 기본값으로 저장되어 있기 때문에, parent에서는 3d값이 지정되지 않는다.
'transform-style:preserve-3d;'를 적어주어야 적용가능

img도 transform 값을 설정한다면

<pre>
<code>
.parent{
  width:200px;
  border:3px solid tomato;
  transition: 1s;
  transform: rotateY(45deg);
  transform-style:preserve-3d;
}
img{
  width:200px;
  border: 3px solid lightgray;
  transition: 1s;
  transform: rotateX(45deg);
}
</pre>
</code>


**perspective**
- 하위 요소를 관찰하는 원근 거리를 설정
- 단위 : px, em, cm 등 단위로 지정
- 값이 작을 수록 원근감이 커진다.

**perspective 속성과 함수의 차이점**
> perspective               - 관찰 대상의 부모 요소       - perspective-origin
> transform: perspective()  - 관찰 대상                  - transform-origin
=> 원근값을 줘야 하는 대상이 본인일 경우 transform: perspective(500px) rotateX(45deg);
=> 내 밑의 자식들에게 원근값을 줘야 하는 경우 prespective : 500px;
perspective 속성은 관찰 대상의 부모(조상)요소에 적용하여 하위 요소들을 관찰하는 원근거리를 설정하며, 
transform: perspective() 변환 함수는 관찰대상에 직접 적용하여 그 대상을 관찰하는 원근거리를 설정합니다.

**perspective-origin**
- 원근 거리의 기준점을 설정
- x축 : left, right, center, %, 단위   기본값:50%
- y축 : top, bottom, center, %, 단위   기본값:50%


**backface-vidsivility**
- 3d변환으로 회전된 요소의 뒷면 숨김을 설정
> visible       - 뒷면 숨기지 않음 (기본값)
> hidden        - 뒷면 숨김
 
<pre>
<code>

img{
  width:300px;
  border:1ps solid lightgray;
  transition: 1s;
  transform: perspective(400px) rotateY(180deg);
  backface-visibility: hidden;  /* 뒷면이 나오는 시점에 숨겨라 */
  
}
</pre>
</code>


**matrix(a,b,c,d,e,f)**
- a~f 6개의 인수
- 요소의 2차원 변환(Transforms)효과를 지정
- scale(), skew(), translate() 그리고 rotate()를 지정
=> 요소에 일반 변환(Transforms)함수(2D, 3D)를 사용하더라도 브라우저에 의해 matrix 함수로
    계산되어 적용됩니다. (2D 변환함수(6개 인수)는 matrix로, 3D변환함수는 matrix3d(16개 인수)로)
    따라서 일반적인 경우는 matrix 함수가 아닌 변환 함수를 사용하면 됩니다.
    

    *matrix(a,b,c,d,e,f)*
        a   c   e
        b   d   f
        0   0   1
        
*scale(x, y)*       *translate(x,y)*        *skew(x0, y0)*      *rotate(0)*
x   0   0               1   0   x           1   tan x0  x       cos0    -sin0   0
0   y   0               0   1   y           tan y0 1    y       sin0    cos0    0
0   0   1               0   0   1           0     0     1       0       0       1


ex) scale(1.5)
    -> matrix(1.5, 0, 1.5, 0)
       1.5      0       0
       0        1.5     0
       0        0       1
       
*특정 일정한 입력 값이 들어가는 것이 아니라 동시에 연산이 되어 들어가게 된다*
ex) scale(0.9) translate(15px, -10px) skew(45deg, -20deg) rotate(35deg)
    -> matrix(1.25346, 0.247887, 0.925125, 13.5, -9)
        1.25346     0.221018        13.5
        0.247887    0.925125        -9
        0           0               1
        
        
        
        
        



