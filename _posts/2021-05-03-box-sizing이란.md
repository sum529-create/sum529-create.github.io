---
layout: post
title:  "box-sizing"
date:   2021-05-03
excerpt: "box-sizing이란"
tag:
- css
- html5
category: [WEB]
comments: true

---

# box-sizing
CSS 속성은 요소의 너비와 높이를 계산하는 방법을 지정한다.

> content-box : 너비(width, height)만으로 요소으 크기를 계산
> border-box : 너비(width, height)에 안쪽 여백(padding)과 테두리 선(border)를 포함하여 요소의 크기를 계산

html에서 parent와 child영역이 있고 child가 parent영역 안에 속한다고 했을 시
아래 box-sizing에 따라 child 영역의 사이즈가 다르게 된다.

{% highlight html %}
box-sizing: content-box;
width: 100%;
border: solid #5B6DCD 10px;
padding: 5px;
{% endhighlight %}
이 css가 지정된 영역은 border로 지정된 영역에 의해서 영역을 넘어가게 된다. (parent 범위 초과)

{% highlight html %}
box-sizing: border-box;
width: 100%;
border: solid #5B6DCD 10px;
padding: 5px;
{% endhighlight %}
이 css가 지정한 영역은 너비와 안쪽 여백, 테두리 선을 포함하여 요소의 크기를 계산함으로 영역을 넘어가지 않는다.(parent 범위 일치)


