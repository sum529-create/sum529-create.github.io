---
layout: post
title:  "속성 선택자 - [attr], [attr=value]"
date:   2021-05-03
excerpt: "[attr], [attr=value]"
tag:
- css
- html5
category: [WEB]
comments: true

---

# attr

속성 attr을 포함한 요소 선택 [attr]

# attr = value
속성 attr을 포함하며 속성 값이 value인 요소 선택 [attr = value]


{% highlight html %}

<!DOCTYPE html>
<html>
	<head>

		<meta charset="UTF-8">
		<title>Insert title here</title>
    <style>
      [disabled]{
        opacity:0.5;  /* 20% */
        color:red;
      }
      [type="password"]{
        opacity:0.5;  /* 20% */
        color:red;
      }
    </style>
	</head>
	<body>
        <input type="text" value="attr test" disabled/>
        <input type="password" value="1234"/>
	</body>
</html>

{% endhighlight %}
