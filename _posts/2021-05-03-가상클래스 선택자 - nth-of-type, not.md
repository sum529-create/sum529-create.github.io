---
layout: post
title:  "가상클래스 선택자 - nth-of-type, not"
date:   2021-05-03
excerpt: "nth-of-type, not"
tag:
- css
- html5
category: [WEB]
comments: true

---

# nth-of-type

E의 타입(태그이름)과 동일한 타입인 형제 요소 중 E가 n번째 요소라면 선택 (n키워드 사용시 0부터 해석(Zero-base))

{% highlight html %}

<!DOCTYPE html>
<html>
	<head>

		<meta charset="UTF-8">
		<title>Insert title here</title>
    <style>
      .fruits1 p:nth-child(1){ /* "사과"가 선택 안됨 => p태그의 누군가 첫번째 자식 이지만 첫번째 자식인 딸기가 p태그가 아니기에 효과가 없다 */
        color : red;
      }
      
      .fruits1 p:nth-of-type(1){ /* p태그의 첫번째를 명시 => 사과 */
        color : yellow;
      }
    
    
    /* "사과"가 선택이 되질 않는다. => .red라는 클래스의 태그는 li이며, li 중에 첫번째 것을 찾는다. 첫번째 요소는 딸기이기에 아무것도 선택되지 않는다. */
      .fruits2 .red:nth-of-type(1){ 
        color : orange;
      }
    </style>
	</head>
	<body>
        <div class="fruits1">
          <div>딸기</div>
          <p>사과</p>   <!-- 선택 -->
          <p>망고</p>
          <span>오렌지</span>
        </div>
        
        <ul class="fruits2">
          <li>딸기</li>
          <li class="red">사과</li>
          <li>망고</li>
          <li class="red">오렌지</li>
        </ul>
	</body>
</html>

{% endhighlight %}


# 부정 선택자 (Negation Selector)

S가 아닌 E 선택

{% highlight html %}

<!DOCTYPE html>
<html>
	<head>

		<meta charset="UTF-8">
		<title>Insert title here</title>
    <style>
      .fruits li:not(.apple){ /* apple제외 적용 *?
        color:red;
      }
    </style>
	</head>
	<body>
        <ul class="fruits">
          <li>딸기</li>               <!-- 선택 -->
          <li class="apple">사과</li>
          <li>망고</li>               <!-- 선택 -->
          <li>오렌지</li>             <!-- 선택 -->
        </ul>
	</body>
</html>

{% endhighlight %}
