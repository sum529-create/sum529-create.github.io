---
layout: post
title:  "가상 요소 선택자 - before, after"
date:   2021-05-03
excerpt: "before, after"
tag:
- css
- html5
category: [WEB]
comments: true

---
# 가상 요소 선택자 (Pseudo-Elements Selectors)


# before

E 요소 내부의 앞에, 내용(Contnet)을 가상의 요소로서 삽입 'E::before'으로 표기

# after

E 요소 내부의 뒤에, 내용(content)을 삽입
E::after

{% highlight html %}

<!DOCTYPE html>
<html>
	<head>

		<meta charset="UTF-8">
		<title>Insert title here</title>
    <style>
      ul li::before{ /* <li>과 1의 사이 부분*/
        content: "얍";   /* 얍1 <br> 얍2 ... */
        width:30px;
        height:30px;
        background:tomato;
        display:inline-block;
        color:lightblue;
        margin-right: 20px;
        border-radius: 50%;
      }
      ul li::after{ /* 1과 </li> 사이 부분 */
        content: "!!";  /* 1! <br> 2! ... */
      }
    </style>
	</head>
	<body>
  <!-- enmet : div>ul>li{$}*10    // $ : 입력될 값 -->
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
	</body>
</html>

{% endhighlight %}
