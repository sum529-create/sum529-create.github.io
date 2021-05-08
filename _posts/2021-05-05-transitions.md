---
layout: post
title:  "전환(Transitions)"
date:   2021-05-05
excerpt: "transitions"
tag:
- css
- html5
category: [WEB]
comments: true

---

# Transitions
* CSS 속성의 전환 효과를 지정

# transition
* css 속성의 시작과 끝을 지정(전환 효과)
* transition-property       - 전환 효과를 사용할 속성 이름
* transition-duration       - 전환 효과의 지속시간 설정
* transition-timing-function - 타이밍 함수 지정
* transition-delay           - 전환 효과의 대기시간 설정

# transition-duration
* 전환효과의 지속시간을 설정
* 기본값 0s
* 1s == 1000ms

# transition-timing-function
- 타이밍 수(애니메이션 전환 효과를 계산하는 방법)지정
* ease                  - 빠르게 - 느리게
* linear                - 일정하게
* ease-in               - 느리게-빠르게
* ease-out              - 빠르게-느리게
* ease-in-out           - 느리게-빠르게-느리게
* cubic-bezier(n,n,n,n) - 자신만의 값을 정의
* steps(n)              - n번 분활된 애니메이션

# transition-delay
- 전환효과가 몇 초 뒤에 시작할지 대기시간을 설정


{% highlight html %}

<pre>
<code>
		.box{
          width:100px;
          heightL100px;
          background:tomato;
          margin:50px;
          transition: 2s 3s; /* 앞에 있는 것이 duration, 뒤에있는 것이 delay */
          /* transition: 2s steps(4); 2초동안의 4번의 전환효과 */
          /* 
            transition: width 1s, background 1s;
                        ==
            transition-property: width, background;
            transition-duration:1s; 
        
        
          */
         }
        .box{
          width:300px;
          background:dodgerblue;
        }
</pre>
</code>
	<body>
		  <div class="box"></div>
	</body>
</html>

{% endhighlight %}
