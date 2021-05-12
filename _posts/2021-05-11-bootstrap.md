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
### btn-default, btn-primary, btn-success, btn-info, btn-warning, btn-danger
 
{% highlight html %}

    <div class="container" style="padding-top:50px">
        <div class="btn btn-default">default</div>       <!-- 흰색바탕 -->
        <div class="btn btn-primary">primaryt</div>      <!-- 파랑색바탕 -->
        <div class="btn btn-success">success</div>       <!-- 초록색바탕 -->

        <div class="btn btn-info">info</div>             <!-- 하늘색바탕 -->
        <div class="btn btn-warning">warning</div>       <!-- 노란색바탕 -->
        <div class="btn btn-danger">danger</div>         <!-- 빨간색바탕 -->
        
    </div>
https://codepen.io/sum529-create/embed/BaWjNjw?height=317&theme-id=dark&default-tab=html,result
{% endhighlight %}


## 테이블
### table-bordered, table-hover
{% highlight html %}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <div class="container" style="padding-top:30px;">
        <!-- bordered, hover : 각 속성들을 붙여준다.-->
        <table class="table table-bordered table-hover">
            <tr>
                <th>제목</th>
                <th>작성일</th>
                <th>삭제</th>
            </tr>
            <tr>
                <td>안녕하세요</td>
                <td>2019-03-25</td>
                <td>
                    <a href="" class="btn btn-danger">삭제</td>
            </tr>
        </table>
        <a href="" class="btn btn-default">작성하기</a>
    </div>
{% endhighlight %}


## 패널
### panel-default, panel-header, panel-body
{% highlight html %}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-header">
                이건 헤더부분
            </div>
            <div class="panel-body">
              안녕하세요~!<br/>
              hi~!<br/>
              반가워요<br/>
              hello<br/>
            </div>
          </div>
    </div>
{% endhighlight %}


## 폼
### form-line, form-control, 
{% highlight html %}
<div class="container">
        <ul>
            <li class="form-inline">
                <label for="fid">아이디</label>
                <input type="text" class="form-control" id="fid">
            </li>
            <li class="form-inline">
                <label for="fpw">패스워드</label>
                <input type="password" class="form-control" id="fpw">
            </li>
            <li class="form-inline">
                <label for="fbth">생년월일</label>
                <select name="" id="fbth" class="form-control">
                    <option value="">년도</option>
                    <option value="">1995</option>
                    <option value="">1994</option>
                </select>
                -
                <select name="" class="form-control">
                    <option value="">월</option>
                    <option value="">01</option>
                    <option value="">02</option>
                </select>
                -
                <select name="" class="form-control">
                    <option value="">일</option>
                    <option value="">01</option>
                    <option value="">02</option>
                </select>
            </li>
            <li class="form-inline">
                <input type="checkbox" id="agree"/>
                <label for="agree">약관에 동의하시겠습니까?</label>
            </li>
        </ul>
    </div>    
{% endhighlight %}


## 네비게이션
> jQuery + bootstrap.min.js 두가지 필요
> https://code.jquery.com/
 
### navbar-inverse, container-fluid(고정폭 그리드 레이아웃을 최대폭 레이아웃으로 전환), navbar-header, navbar-toggle, sr-only(숨기고 싶은 태그요소), icon-bar, navbar-brand, navbar-collapse, collapse(정보를 안보이도록 접어 놓았다가 클릭하면 보이도록 하는기능), navbar-nav
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- bootstrap보다 jquery가 먼저 들어가야 함-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container" style="padding-top: 100px">
        <nav class="navbar navbar-inverse">
            <!-- navbar 색상 변경 default ->inverse (흰->검은색) -->
            <div class="container-fluid">
                <div class="navbar-header">
                    <!-- 오른쪽 메뉴바 -->
                    <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#nav_menu" aria-expanded="false">
                        <!-- data-target으로 하단에 보여질 부분의 nav-menu의 영역을 잡는다. -->
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        bootstrap 강의
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="nav_menu">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="">HTML</a>
                        </li>
                        <li>
                            <a href="">CSS</a>
                        </li>
                        <li>
                            <a href="">PYTHON</a>
                        </li>
                        <li>
                            <a href="">Javascript</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</body>
</html>
{% endhighlight %}


# 로그인 폼
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>네비게이션</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
        <!--폰트어섬추가 -->
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!--폰트어섬추가 -->
    </head>
<body>
    <div class="container" style="padding-top: 50px;">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#nav_menu" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        bootstrap 강의
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="nav_menu">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="">HTML</a></li>
                        <li><a href="">CSS</a></li>
                        <li><a href="">JAVA</a></li>
                        <li><a href="">JAVASCRIPT</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- offset 뒤에서부터 4칸 => 가운데 정렬 -->
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    로그인
                </div>
                <div class="panel-body">
                    <input type="text" class="form-control" placeholder="ID">
                    <br/>
                    <input type="text" class="form-control" placeholder="비밀번호">
                    <br/>
                    <button class="btn btn-lg btn-success btn-block">로그인</button>
                    <br/>
                    <!-- 폰트 어썸 아이콘 -->
                    <a href="#" class="btn btn-lg btn-primary btn-block">
                        <i class="fa fa-facebook" aria-hidden="true"></i> 페이스북 로그인
                    </a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
{% endhighlight %}


# 게시판 폼
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>네비게이션</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!--폰트어섬추가 -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--폰트어섬추가 -->
</head>
<body>

    <div class="container" style="padding-top: 100px">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!-- 오른쪽 메뉴바 -->
                    <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#nav_menu" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        bootstrap 강의
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="nav_menu">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="">HTML</a>
                        </li>
                        <li>
                            <a href="">CSS</a>
                        </li>
                        <li>
                            <a href="">PYTHON</a>
                        </li>
                        <li>
                            <a href="">Javascript</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="col-sm-2">

            <div class="panel panel-default">
                <div class="panel-heading">
                    Board
                </div>
                <div class="panel-body">
                    <a href="">자유게시판</a><br />
                    <a href="">포럼</a><br />
                    <a href="">News</a><br />
                </div>
            </div>

        </div>

        <div class="col-sm-10">
            <table class="table table-bordered table-hover">
                <tr>
                    <th>제목</th>
                    <th>작성일</th>
                    <th>삭제</th>
                </tr>
                <tr>
                    <td>안녕하세요</td>
                    <td>2019-03-24</td>
                    <td>
                        <a href="#" class="btn btn-danger">삭제</a>
                    </td>
                </tr>
                <tr>
                    <td>안녕하세요</td>
                    <td>2019-03-24</td>
                    <td>
                        <a href="#" class="btn btn-danger">삭제</a>
                    </td>
                </tr>
                <tr>
                    <td>안녕하세요</td>
                    <td>2019-03-24</td>
                    <td>
                        <a href="#" class="btn btn-danger">삭제</a>
                    </td>
                </tr>
            </table>
            
            <!-- pagination -->
            <nav class="text-center">
                <ul class="pagination">
                    <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            
            <a href="" class="btn btn-default">작성하기</a>
        </div>

    </div>
    
</body>
</html>
{% endhighlight %}



# Bootstrap 활용 - Semmernote
{% highlight html %}

{% endhighlight %}
{% highlight html %}

{% endhighlight %}
{% highlight html %}

{% endhighlight %}
{% highlight html %}

{% endhighlight %}
{% highlight html %}

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
