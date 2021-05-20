---
layout: post
title:  "javaScript"
date: 2021-05-07
excerpt: "javaScript-fastcampus"
tag:
- javaScript
category: [WEB]
comments: true

---

# Expression (표현식)
- 값을 만들어내는 간단한 코드를 표현식이라 함
- 표현식은 값을 만들어내기 때문에 함수의 인자로 사용할 수 있음

# Statement
- 한줄에 문장이 하나인 경우에는 세미 콜론을 붙이지 않아도 문제가 없지만 관례적으로 붙일것
- 한 줄에 여러 문장을 적을 경우, 세미 콜론으로 문장을 구분해야 함
- 마지막 문장은 세미 콜론을 붙이지 않아도 문제가 없다
- 마지막 문장의 결과가 반환된다.
- 조건문(if), 반복문(for)도 문장이며 이 경우 마지막 } 뒤에 세미콜론을 붙이지 않는다.


# 키워드와 예약어

## 키워드 (KeyWords)
- 자바스크립트에서 특정한 목적을 위해 사용하는 단어
- 이러한 키워드 들은 예약어로 지정되어 있다

<pre>
<code>
var name = 'Mark' // var 변수 선언 키워드
</code>
</pre>


## 예약어 (Reserved Words)
- 프로그램을 작성할 때, 변수명, 함수명 등 이름으로 사용할 수 없는 단어


<pre>
<code>
var return = '변수명';
function for() {}
// return, for는 예약어라 사용 불가
</code>
</pre>


## Reserved Keywords
- 이미 특정한 목적을 위해 사용하기 때문에 사용할 수 없는 예약어
<pre>
<code>
break
case
catch
continue
if
in
now
return
....
</code>
</pre>


## Futrue reserved keywords
- 앞으로 특정한 목적을 위해 사용할 가능성이 있어서 사용할 수 없는 예약어
<pre>
<code>
double
int
final
goto
long
private
class
extends
...
</code>
</pre>


# 식별자
- 코드 내의 변수, 함수 혹은 속성을 식별하는 문자열 (내가 정의한 것)
- 대소문자로 구분한다
- '유니코드 문자', '$', '_', '숫자(0-9) ' 사용 불가
- 숫자로 시작 불가
- 예약어 사용 불가
- 공백문자 사용 불가
<pre>
<code>
var name = "alice";
function hello() {}
var person = {name="coco", age=6};
var myName = "jone"
// name, hello, person, jone
</code>
</pre>


# 변수와 상수

## const 상수를 지칭하는 이름 = 값
- 상수를 선언하면서 바로 값을 할당하는 방법

## let 변수를 지칭하는 이름 = 값;
- 변수에 값 할당
<pre>
<code>
const sum = 5 + 10;
let result = false;

if (sum%3 == 0) {
  console.log('얍');
  result = true;
}
console.log(result);
</code>
</pre>

# 변수의 유효 범위

## const, let의 유효 범위

<pre>
<code>
// 블럭
{
  const name = 'alice';
  console.log(name);
}

console.log(name); // error

let age = 13;
{
  age++;
  console.log(age);
}
console.log(age); // 38

// 중첩
{
  {
    console.log(age); // 가능
  }
}

</code>
</pre>


## var 함수 스코프

<pre>
<code>
var a = 0;

(function() {
  a++;
  console.log(a); // 1
})();

console.log(a); // 1

(function(){
  var b = 0;
  console.log(b); // 0 
})();
b++;
console.log(b); // error
</code>
</pre>


## 블록 스코프

<pre>
<code>
var c = 0;

{
  c++;
  console.log(c);
}

{
  var d = 0;
  console.log(d);
}
console.log(d); // error
</code>
</pre>

# 호이스팅
- 아래 있는 선언을(만) 끌어올리다.
- 선언을 아래에 작성
<pre>
<code>
// 함수 먼저
function hello1() {
  console.log('hello');
}
hello1();

// 함수 호출 먼저
hello2()

function hello2() {
  console.log('hello2');
}
</code>
</pre>

<pre>
<code>
// 변수 호이스팅
age = 6;
age++;
console.log(age);
var age;

// 값을 삽입하지 않으면 undefined가 나타남
console.log(name);  // undefined
name = 'alice';
console.log(name);  // alice
var name;

</code>
</pre>

<pre>
<code>

// let 호이스팅
console.log(name); // error
name = 'Mark';

console.log(name);  // error
let name;

</code>
</pre>

> var 변수의 호이스팅 현상을 주의할 것


# 자료형

## 동적 타이핑
- 변수 타입을 미리 선언할 필요가 없다 (느슨한 타입(loosley typed)언어)
- 프로그램 처리 과정에서 자동으로 파악한다
- 같은 변수에 여러 타입의 값을 넣을 수 있다
<pre>
<code>
var foo = 42;  // number type
var foo = "bar"; // String type
var foo = true;  // boolean type
</code>
</pre>

## 데이터 타입
<pre>
<code>
</code>
</pre>
<pre>
<code>
</code>
</pre>


{% highlight html %}

{% endhighlight %}


* +
<pre>
<code>
</code>
</pre>
