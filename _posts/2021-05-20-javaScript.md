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
* 기본 타입(Primitive values)
    * Boolean
    * Null      (정해져있지만, 비어있는 값)
    * Undefined (정해지지 않은 값)
    * Number
    * String
    * Symbol
* 객체 (Object)

<pre>
<code>
// Boolean
const a = new Boolean(false); // 새로운 객체 생성
console.log(a, typeof a); // [Boolean: false] 'object' | primitive values가 아니게 된다.

if (a) {    // object 타입일 때 true로 표기되어 아래 console이 실행되게 된다.
    console.log('false?');
}

const b = Boolean(false); // 함수 실행

console.log(b, typeof b); // false | primitive values가 됨

</code>
</pre>

<pre>
<code>
// String
const a = 'Mark';
console.log(a, typeof a);

const b = 'Mark' + 'Lee';

const c - a + 'Lee'; // Mark Lee

console.log(c, typeof c);

const d = '${a} Lee'; // Mark Lee (template String)

console.log(d, typeof d);
</code>
</pre>

<pre>
<code>
const a = Symbol();
const b = Symbol(37);
const c = Symbol('mark');
const d = Symbol('mark');

console.log(a typeof a); // Symbol() 'symbol'
console.log(c === d); // === type 같은가?   false (Symbol 같은 인자를 넣어도 고유한 다른 값이 된다)

new Symbol(); // error -> not constructor 
</code>
</pre>


# 조건문
<pre>
<code>
// false
// 0
// ''
// null
// undefined
// NaN

// true
// 37
// -37
// 'Mark'
// {}
// []

</code>
</pre>

# 논리연산식
- &&(한개만 참이면 거짓), ||(한개만 참이면 참(앞이면 참이면 뒤표현식 실행안해도됨)), !(반대)

# 무한루프
<pre>
<code>
for(;;) {
    console.log('hi');
    if(Math.random() * 100 > 90) {
        break;
    }
}
</code>
</pre>


# for of (iterable)
- 객체에 모두 사용가능
- iterable한 프로토콜을 자체적으로 내장하고 있는 객체들이 있다 (ex. 배열(배열을 하나하나 출력가능))


# for in (모든 프로퍼티)
- 객체에서 사용가능
- 객체 안에 있는 프로퍼티 하나하나를 모두 돌릴 수 있다.
<pre>
<code>
// for of
for (const i of [1, 2, 3]) {
    console.log(i);
} // 1 2 3


// for in
Object.protype.test = function() {}; // 프로토타입안에 프로퍼티를 설정해 놓으면

for (const i in { a: 1, b: 2, c: 3}) {  // 설정해 놓은 값만 출력되는 것이 아닌 프로토타입도 함께 나오게 되어 의도한 대로 나오지 않을 경우가 있다.
    console.log(i);
} // a b c test

</code>
</pre>


# 함수
<pre>
<code>
function hello() {} // 함수를 만들 때 키워드
</code>
</pre>
<pre>
<code>
// 이름이 hello1인 함수를 선언
function hello1() {
    console.log('hello1');
}

console.log(hello1, typeof hello1); // [Function: hello1] 'function'

// 함수의 매개변수
// 함수 호출할 때 값을 지정
function hello2(name) {
    console.log('hello2', name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
function hello3 (name) {
    return 'hello ${name}';
}
console.log(hello3('sum'));

</code>
</pre>


### 익명함수
<pre>
<code>
const hello = function(){} // 함수를 만들때 사용하는 키워드, 함수의 이름없이 사용하며 특정 변수에 담아두는 방식
</code>
</pre>

> 선언적 function과 익명함수를 만들어 변수에 할당 차이
<pre>
<code>
hello1();
hello2(); // error | hello2 is not a function
console.log(hello2, typeof hello2); // undefined

function hello1() {
    console.log('hello1');
}

var hello2 = function() {
  console.log('hello2');  
};
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

{% highlight html %}

{% endhighlight %}


* +
<pre>
<code>
</code>
</pre>
