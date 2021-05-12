---
layout: post
title:  "Bootstrap"
date:  2021-05-11
excerpt: "부트스트랩"
tag:
- css
- html5
category: [WEB]
comments: true

---

# BootStrap
- .css를 불러오고, 다른 사용자들이 만들어 놓은 레이아웃 등등 외부주소/다운로드로 가져와서 사용
- 클래스로 간단하게 사용
- 트위터 개발

> 버전 3.4.1 사용 <https://www.bootstrapcdn.com/legacy/bootstrap/>
{% highlight html %}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
<a href="" class="btn btn-default">기본버튼 테스트</a>
{% endhighlight %}



# 버전 3와 4의 차이
- CSS와 화면 그리드에서 px -> em 사용
- IE8이하 버전 지원 종료

# 버전 3 추천
- 아직 까지 기반 플러그인들이 3에 있는 경우가 많음

## Summernote
- 오픈소스이면서 HTML5 기반의 깔끔한 UI와 가장 많이 쓰이는 기능이 구현
- bootstrap4 버젼은 다른 CSS와 충돌 가능성이 너무 많아


# 레이아웃
- 한 줄은 **12**개로 이루어져 있다
* 화면 사이즈가 768px보다 작을 때   - col-xs-
*              768px보다 클 때     - col-sm-  (sm: small device)
*              970px보다 클 때     - col-md    (md: middle display)
*              1170px보다 클 때    - col-lg

{% highlight html %}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <div class="container">
        <!-- 
            한줄은 12개로 이루어져 있어 12에 맞춰준다. 
            sm -> small device
        -->
        <div class="col-sm-4">첫번째</div>
        <div class="col-sm-4">두번째</div>
        <div class="col-sm-4">세번째</div>
    </div>
{% endhighlight %}

> 화면 사이즈가 768px보다 작을 시 항목이 1개 하나씩 출력 enter되어 출력
> 화면 사이즈가 768px이상에서는 2개 항목이 한줄에 출력
> 화면 사이즈가 970px이상에서는 3개 항목이 한줄에 보임



# 콤포넌트

## 버튼

{% highlight html %}
<iframe height="317" style="width: 100%;" scrolling="no" title="bootstrap-button" src="https://codepen.io/sum529-create/embed/BaWjNjw?height=317&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sum529-create/pen/BaWjNjw'>bootstrap-button</a> by sumin
  (<a href='https://codepen.io/sum529-create'>@sum529-create</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
{% endhighlight %}
{% highlight html %}

{% endhighlight %}
{% highlight html %}

{% endhighlight %}
<pre>
<code>
</code>
</pre>


<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
<pre>
<code>

</code>
</pre>
