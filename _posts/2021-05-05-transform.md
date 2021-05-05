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

{% highlight html %}
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
{% endhighlight %}

위와같이 실행하게 된다면, 이동이 부자연스러워 진다. 


{% highlight html %}
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
{% endhighlight %}

*position:relative;
left: 0;
top:0;* 
추가하여 초기화를 수동으로 적용시키면 이동이 자연스럽게 변하게 되지만
position은 배치하고 끝내는 개념이기에 animation되는 것에 특화되어 있지 않아
많은 부하가 일어나게 되어 Rendering, repainting이라고 얘기한다.
그러므로 position으로 이동하는 것보다 transform을 사용하여 이동하는 것을 권장


{% highlight html %}
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
    /* transform: scale(.8); // 크기 줄이기 */
    /* transform: skewX(45deg); // 비틀기 */
    /* transform: translate(20px, 10px) skewX(20deg); // 동시 수행가능 */
  }
{% endhighlight %}

transform을 사용하였기에 다른 애니매이션을 사용할 때 부담없이 사용할 수 있다.


