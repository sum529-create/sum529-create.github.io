---
layout: post
title:  "javaScript"
date: 2021-05-20
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
var hello2();
console.log(hello2); /* undefined */

hello3();   // error | hello3 is not defined

function hello1() {
   console.log('hello1');
}

var hello2 = function() {
   console.log('hello2');  
};

const hello3 = function() {
   console.log('hello3'); 
};

</code>
</pre>


## 생성자 함수로 함수를 만드는 방법
<pre>
<code>
const hello = new Function();
</code>
</pre>
<pre>
<code>
// 변수를 가질 떄 '' 문자열로 묶어줘야 함. 문자로 인식되기 때문
// new Function(/* 인자1,인자2, ... , 함수의 바디 */);
console.log(sum(1, 2, 3)); // error

const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3));
</code>
</pre>

## function과 new Function()의 차이점
<pre>
<code>
global.a = 0;
{
    const a = 1;
    
    const test = new Function('return a'); /* 위에서 선언한 a를 받을 수 없다. */
    
    console.log(test()); // 0
}

{
    const a = 2;
    const test = function() {
        return a;
    };
    
    console.log(test()); // 2
}
</code>
</pre>
> 전역에서 얻어와서 함수로 사용하고 싶다면 new를 사용할 수 있지만 대부분은 아래와 같은 형식을 많이 사용하게 된다.

## () => {} arrow function

<pre>
<code>
// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
    console.log('hello1');
};

</code>
</pre>

<pre>
<code>
// 함수의 매개변수
// 함수를 호출할 떄 값을 지정
// 매개변수가 하나일 떄, 괄호 생략 가능
const hello2 = name => { // 괄호 생략
    console.log('hello2', name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};

// 함수의 리턴
// 함수를 실행하면 얻어지는값
const hello4 = name => {
    return 'hello ${name}';
};

const hello5 = name => 'hello5 ${name}';
</code>
</pre>


# new 함수

<pre>
<code>
// constructor
function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('sum', 12);
console.log(p, p.name, p,age);

const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
};

const c = new Cat('얌', 1); // Cat안에 this를 가지고 있지 않기 때문 | Cat is not a consructor
</code>
</pre>

> allow function은 constructor를 만들 수 없다.


## 함수 안에서 함수를 만들어 리턴

<pre>
<code>

// 함수를 호출하려면 함수를 만들어서 리턴

function plus(base) {
    return function(num) {
        return base + num;
    }
}

const plus5 = plus(10);
console.log(plus5(5)); // 15

const plus7 = plus(7);
console.log(plus7(7));  //14 

</code>
</pre>

## 함수를 호출할 때, 인자로 함수를 사용

<pre>
<code>
// 함수를 인자로 하여 함수를 호출

function hello(c) {
    console.log('hello');
    c();
}

hello(function() {
    console.log('롤백');
});
</code>
</pre>

# 객체

## function 틀() {} => new 틀()
- 생성자 함수로 객체 만들기
<pre>
<code>

// 생성자 함수
function A() {}

const a = new A();
console.log(a, typeof a); // A {} 'object' 
console.log(A()); // return이 없기때문 undefined값이 나옴

// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name,age);
}

const b = new B();
const c = new B('name', 11);
console.log(B());
</code>
</pre>


## 객체에 속성 추가하기

<pre>
<code>
// 값을 속성으로 넣기
function A() {
    this.name = 'Mark';
}
const a = new A(); // {name: 'Mark'}
console.log(a);

// 함수를 속성으로 넣기
function B() {
    this.hello = function() {
        cnsole.log('hello');
    }
}

new B().hello;

// new Function(); 표준 내장객체에 의해 만들어진 새로운 객체이다

</code>
</pre>


## new Object()
- object로 객체 만들기

<pre>
<code>
// new object

const a = new Object;

console.log(a, typeof a);

const b = new Object(true);

console.log(b, typeof b);

const c = new Object({name: 'mark'});

console.log(c, typeof c);
</code>
</pre>
<pre>
<code>
{} object
[Boolean: true] object
{ name: 'mark' } object
</code>
</pre>


## 프로토타입 체인

<pre>
<code>
function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello', this.name, this.age);
    // };
}

// const p = new Person('mark', 21);
// p.hello();
// console.log(p.toString() + "\n"); // Object로부터 상속받은 기본값을 반환함 returns [Object Object]


// 메서드 재정의 위 소스 주석처리
Person.prototype.hello = function () {
    console.log('hello', this.name, this.age);
};

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor); // 함수 자체
console.log(Person.hello); // undefined | 객체로 생성이 되아야 사용가능하다

// 프로토 타입은 hello보다 위에 존재하나 보이진 않는다

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

// console.log(p instanceof Person);
// console.log(p instanceof Object); // p라는 객체가 Object라는 인스턴스로 나온 것이냐?
</code>
</pre>

<pre>
<code>
[Function (anonymous)]
{ hello: [Function (anonymous)] }
[Function: toString]
[Function: Person]
undefined
[Object: null prototype] {}
[Function: toString]
[Function: Object]
</code>
</pre>


## 프로토타입을 이용한 객체 확장

<pre>
<code>
// prototype 상속

function Person() {}

Person.prototype.hello = function(){
    console.log('hello');
}

function Korean(region) {
    this.region = region;
    this.where = function(){
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype; 
// korean의 프로토타입을 person의 프로토타입으로 변경
// 부모의 프로토타입을 자식의 어딘가에 프로토타입으로 받아 활용하는 방법

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean); // true 가장 가까운 곳에 있는 것은 Korean
console.log(k instanceof Person); // true korean의 프로토타입을 갖고있음
console.log(k instanceof Object); // true person의 여러 오브젝트들의 프로토타입을 갖고 있다.(toString)
</code>
</pre>


## 객체 리터럴

<pre>
<code>
// 객체 리터럴

// 리터럴 - 객체를 만들 때 숫자형값, 불린 같은 값을 {}을 사용해 객체로 직접 쓰면서 만드는 것 (문자 그대로 사용하는 것)

const a = {};

console.log(a, typeof a); // {} object

const b = {
    name: 'mark',
    // 값뿐만 아닌 함수도 올 수 있다
    hello1() {
        console.log('hello1', this);
    },
    hello2() {
        console.log('hello2', this);
    },
    hello3: () => {
        console.log('hello3', this);
    }
}; // literal

b.hello1();
b.hello2();
/*
hello1 { // hello2
  name: 'mark',
  hello1: [Function: hello1],
  hello2: [Function: hello2],
  hello3: [Function: hello3]
}
// 'hello1', this.name 으로 표기되어 이 객체 자체를 this로 판단하고 있음
*/
b.hello3();
// hello3 {} // arrow 함수는 this적용이 되지 않기떄문. this가 이 객체가 아니라고 인식하게 되어 unddfned형식이 됨

</code>
</pre>


## 표준 내장 객체
- 객체가 이미 런타임 환경에 만들어 진것
- 자바스크립트가 기본적으로 가지고 있는 객체들
- new자가 들어간 function으로 새로운 객체를 만드는것 역시 표준 내장 객체
> Object
> Function
> Array
> String
> Boolean
> Number
> Math
> Date
> RegExp


<pre>
<code>
// 표준 내장 객체: Array

const a = new Array('red', 'black', 'white'); // array객체를 생성자 함수로 표기해서 사용할 수 있다

console.log(a, typeof a); // ['red', 'black', 'white'] 'object'
console.log(a instanceof Array);  // true
console.log(a instanceof Object); // true

const b = ['red', 'gray', 'yellow']; // literal 표기법으로도 사용 가능하다
console.log(b, typeof b); // ['red', 'gray', 'yellow'] 'object'
console.log(b instanceof Array);  // true
console.log(b instanceof Object); // true

console.log(b.slice(0, 1)); // array 함수에 들어있는 함수
console.log(Array.prototype.slice, Object.prototype.slice); 
// [Function: slice] undefined => Object안에 slice함수가 있는 것이 아닌 prototype으로 불러온 array안에 위치해 있다.
</code>
</pre>


# 클래스

## 객체를 만들 수 있는 새로운 방법

<pre>
<code>
// class
// 1) 선언적 방식
class A {}

console.log(new A()); // A {}

// 2) class 표현식을 변수에 할당
const B = class {};

console.log(new B()); // B {}

// 선언적 방식이지만 호이스팅은 일어나지 않는다.
new C();

class C {}
</code>
</pre>

## 생성자 (Constructor)
<pre>
<code>
// constructor

class A {}
console.log(new A());

class B {
    constructor() {
        console.log('constructor');
    }
}

console.log(new B()); // constructor은 따로 표기하지 않아도 실행된다.

class C {
    constructor(name, age) {
        console.log('constructor', name, age);
    }
}
console.log(new C('sum', 12));
console.log(new C()); // undefined

</code>
</pre>


## 멤버 변수 (객체의 프로퍼티)
<pre>
<code>
// 멤버 변수
class A {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('coco', 7));

// class field는 런타임 확인

class B {
    name; // this.name = name과 동일
    age;
}

console.log(new B());

class C {
    name = 'no name';
    age = 0;

    // constructor로 재정의 시킬 수 있다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


console.log(new C('coco', 7));
</code>
</pre>


## 멤버 함수
<pre>
<code>
// 멤버 함수

class A {
    hello1() {
        console.log('hello1', this);
    };

    hello2 = () => {
        console.log('hello2', this);
    };
}

new A().hello1();
new A().hello2();


class B {
    name = 'coco';
    hello() {
        console.log('hello', this.name);
    }
}

new B().hello();
</code>
</pre>


## get, set
<pre>
<code>
// get, set

class A {
    _name = 'no name';

    get name() {
        return this._name + "@@@";
    }
    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark';
console.log(a);
console.log(a.name);
console.log(a._name);

// readonly
class B {
    _name = 'no name'; /* _ => 외부에서 값을 바꾸지 말자! */

    get name() {
        return this._name + "@@@";
    }
}

const b = new B();
console.log(b); // no name
b.name = 'Mark';
console.log(b); // no name | set 함수가 없어서 마치 readonly만 되는것처럼 기능이 사용된다.
</code>
</pre>


## static 변수, 함수
- 객체가 아니고, 클래스와 변수와 함수
<pre>
<code>
// static 변수, 함수

class A {
    static age = 12;
    static hello() {
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();

class B {
    age = 12;
    static hello() {
        console.log(this.age);
    }
}
console.log(B, B.age);  // undefined
B.hello();              // undefined
// new B.hello(); // static이기떄문 객체에 속해있는 속성이 아니기에 new는 사용불가

class C {
    static name = '이 클래스의 이름은 C가 아니다.'; // static name은 클래스의 이름을 뜻한다.
}

console.log(C);
</code>
</pre>
<pre>
<code>
[class A] { age: 12 } 12
12
[class B] undefined
undefined
[class 이 클래스의 이름은 C가 아니다.] { name: '이 클래스의 이름은 C가  아니다.' }
</code>
</pre>


## 상속 기본
<pre>
<code>
class Parent {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();
</code>
</pre>
<pre>
<code>
Parent { name: 'Lee' } Child { name: 'Lee' }
hello Lee
</code>
</pre>


## override
- 클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가

<pre>
<code>
class Parent {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 12;

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();
console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();

</code>
</pre>
<pre>
<code>
Parent { name: 'Lee' } Child { name: 'Lee', age: 12 }
hello Lee 12
hello Anna 12
</code>
</pre>


## super
- 클래스의 상속 생성자 함수 변경
<pre>
<code>
// super

class Parent {
    name;

    constructor(name){
        this.name = name;
    }
    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age;

    constructor(name, age){
        super(name);
        this.age = age;
    }
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent('sum');
const c = new Child('sum', 22);

console.log(p, c);
</code>
</pre>
<pre>
<code>
Parent { name: 'sum' } Child { name: 'sum', age: 22 }
</code>
</pre>


## static
- 클래스의 상속 static 상속
<pre>
<code>
// static 상속

class Parent {
    static age = 12;
}

class Child extends Parent {}
console.log(Parent.age, Child.age); //12 12
</code>
</pre>


# Promise
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
- Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

<pre>
<code>
console.log(Promise); // [Function: Promise]

/*
    생성자를 통해서 프로미스 객체를 만들 수 있습니다.
    생성자의 인자로 executor라는 함수를 이용합니다.
*/

/*
    executor 함수는 resolve와 reject를 인자로 가집니다.
    (resolve, reject) => { ... }
    resolve와 reject는 함수입니다.
    resolve(), reject()
*/

new Promise(/* executor */(resolver, reject) => {}); // pending (대기)

/*
    생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태라고 합니다.
*/

/*
    executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행(실행이 됐다라고 알려주는 것)) 상태가 됩니다.
*/
new Promise((resolve, reject) => {
    // ...
    // 어떤 상태를 정상적으로 마무리 했을 때 resolve(); 함수를 사용하여 이행된 상태로 바뀌게 된다.
    resolve(); // fulfilled (이행)
});

/*
    executor 함수 인자 중 하나만 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.
*/
new Promise((resolve, reject) => {
   reject(); // rejected (거부)
});

/*
    pending 중에 어떤 비동기적인 행동을 하게되고 정상적으로 실행된다면 fulfilled 함수를 호출하고,
    어떤 에러 상황이 발생하게 된다면 rejected 상태로 만들어주게 된다.
*/
</code>
</pre>

> p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
<pre>
<code>
/*
    p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
*/

new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve();  /* fulfilled */
    }, 1000)
});
</code>
</pre>

> p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
> p.then으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback이 실행됩니다.
<pre>
<code>
/*
    p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve();  /* fulfilled */
    }, 1000)
});

/* 1초 후에 실행됨 */
p.then(() => {
    /* callback */
   console.log('1000ms 후에 fulfilled 됩니다.');
});
</code>
</pre>


> then을 설정하는 시점을 정확히하고, 함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해 프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수 (p) 실행과 동시에 then 을 설정합니다.
<pre>
<code>
function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve();  /* fulfilled */
        }, 1000);
    });
}

p().then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');
});
</code>
</pre>


> 마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행됩니다.
<pre>
<code>
function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject();  /* rejected */
        }, 1000);
    });
}

p()
    .then(() => {
        console.log('1000ms 후에 fulfilled 됩니다.');
    })
    .catch(() => {
        console.log('1000ms 후에 rejected 됩니다.');
    });
</code>
</pre>


> executor의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다. 
> resolve('hello');
> then((message) => {...})
<pre>
<code>
function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve('hello'); /* 보내고 싶은 문자열을 작성한다 */
        }, 1000);
    });
}

p()
    .then((message => { /* 받을 시 message로 받는다 */
        console.log('1000ms 후에 fulfilled 됩니다.', message); /* message 추가 */
    })
    .catch(() => {
        console.log('1000ms 후에 rejected 됩니다.');
    });
</code>
</pre>


> 마찬가지로, executor의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch의 callback 함수의 이자로 받을 수 있다
> reject('error');
> then((reason) => {...})

<pre>
<code>
function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject('error');
        }, 1000);
    });
}

p()
    .then((message => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch((reason => {
        console.log('1000ms 후에 rejected 됩니다.', reason);
    });
</code>
</pre>

> 보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만들어 준다.
<pre>
<code>

function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(new Error('bad'));
        }, 1000);
    });
}

p()
    .then((message => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch((reason => {
        console.log('1000ms 후에 rejected 됩니다.', reason);
    });
</code>
</pre>


> fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally()를 설정하고, 함수를 인자로 넣습니다.
<pre>
<code>

function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(new Error('bad'));
        }, 1000);
    });
}

p()
    .then((message => {
        console.log('1000ms 후에 fulfilled 됩니다.', message);
    })
    .catch((reason => {
        console.log('1000ms 후에 rejected 됩니다.', reason);
    })
    .finally((=>{
        console.log('end');
    });
</code>
</pre>

> 보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다. 이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.
> 콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있습니다.
<pre>
<code>
function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback 함수가 실행됩니다.');
});
c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행됩니다.');
        });
    });
});
</code>
</pre>


> then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
> then에 함수를 넣는 여러 방법을 확인해보자

<pre>
<code>
function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

/* 1초 후 실행 */
p().then(() => {
    return p();
})
/* 2초 후 실행 */
.then(() => p())
/* 3초 후 실행 */
.then(p)
/* 4초 후 실행 */
.then(() => {
    console.log('4000ms후에 fulfilled 됩니다.');
])

</code>
</pre>


> value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다. value가 프로미스 객체면, resolve된 then메서드를 실행합니다. value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행합니다.
<pre>
<code>
Promise.resolve(/* value */);

Promise.resolve(
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 1000);
    }),
).then(data => {
    console.log(
        '프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됩니다.',
        data,
    );
});

Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우, fulfilled 됩니다');
});
// promise 객체가 아닌 아래가 먼저 시작하게 된다.
</code>
</pre>
<pre>
<code>
then 메서드가 없는 경우, fulfilled 됩니다. bar
프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다. foo
</code>
</pre>


> Promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경됩니다.
<pre>
<code>
Promise.reject(/* value */);

Promise.reject(new Error('reason'))
    .then(error => {})
    .catch(error => {
        console.log(error);
    });
</code>
</pre>


> 프로미스 객체 여러개를 생성하여, 배열로 만들어 인자로 넣고 Promise.all을 실행하면, 배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then의 함수가 실행됩니다. then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.
<pre>
<code>
// Promise.all([프로미스 객체들]);
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.all([p(1000), p(2000), p(3000)]).then(messages => {
    console.log('모두 fulfilled 된 이후에 실행됩니다.', messages);
});
// 3초 후에 실행이 된다. (모두 실행)
</code>
</pre>


> 프로미스 객체 여러개를 생성하여, 배열로 만들어 인자로 넣고 Promise.race를 실행하면, 배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled된 것으로, then의 함수가 실행됩니다. then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려줍니다.

<pre>
<code>
// Promise.race([프로미스 객체들]);

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000), p(2000), p(3000)].then((messages) => {
    console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', messages);
});
// 1초 후에 실행된다. (가장 빠르게 fulfilled 된 프로미스 객체)
</code>
</pre>

# async function과 await
### async function 함수이름() {}
### const 함수이름 = async() => {}

<pre>
<code>
// Promise 객체를 리턴하는 함수
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then(ms => {
    console.log('${ms}' ms 후에 실행된다.');
});

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법
const ms = await p(1000);
console.log('${ms} ms 후에 실행된다.');

// 두개 모두 같은 방법
// await 에서 eroor가 발생하게 된다.

</code>
</pre>
<pre>
<code>
SyntaxError: await is only valid in async function
</code>
</pre>


> await를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.
<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    });
}

(async function main(){
    const ms = await p(1000);
    console.log('${ms} ms 후에 실행된다.');
})();
// main();으로 호출하여도 무방하나, main이 만들자 마자 실행되는 형태이기 때문에 위와 같은 형태로 해줘도 된다.
</code>
</pre>

> Promise 객체가 rejected 된 경우의 처리를 위해 **try catch**를 이용한다
<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    });
}

(async function main(){
    try{
        const ms = await p(1000);
    } catch (error) {
        console.log(error);
    }
})();
</code>
</pre>


> async function 에서 return 되는 값은 **Promise.resolve** 함수로 감싸서 리턴된다.
> asyncP를 비동기로 불러서 p()로 가서 다시 받은 ms를 문자열과 합쳐서 보내줌

<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'));
        }, ms)
    });
}

async function asyncP() {
    const ms = await p(1000);
    return 'Mark:' + ms;
}

(async function main(){
    try{
        const name = await asyncP(); /* 1초 */
        console.log(name);
    } catch (error) {
        console.log(error);
    }
})();
</code>
</pre>


> error의 전파 (reject 사용)

<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    });
}

// ayncP에서 어떤 에러를 처리한 다음에 정상적인 결과를 보내고 싶다면 try-catch문으로 감싸서 error에 대한 처리를 하고 정상적으로 밑으로 흘러서 처리될 수 있도록 함
async function asyncP() {
    const ms = await p(1000); /* reject가 불리면서 이 부분에서 error가 throw가 되게된다. */
    // 대부분 throw catch를 사용하여 에러의 예외처리를 해주지만
    // return 자체를 해주고 싶지 않을 경우에는 catch를 따로 적어주지 않는다.
    // 바로 하단의 catch부분으로 넘어가게 된다.
    return 'Mark:' + ms;
}

// async 비동기 함수를 출력하면서 그 밑에서 일어나는 일들을 모두 try-catch문으로 처리
(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch (error) {
        console.log(error);
    }
})();

</code>
</pre>

<pre>
<code>
Error: reason
</code>
</pre>


> finally

<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    });
}

async function asyncP() {
    const ms = await p(1000);
    return 'Mark:' + ms;
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('end');
    }
})();

</code>
</pre>


## 연속된 Promise에 대한 처리와 연속된 async await에 대한 처리의 비교

<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    });
}

// Promise
p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(()=> {
        console.log('3000ms 후에 실행');
    });


// async await

(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000ms 후에 실행');
})();
</code>
</pre>


## Promise.all 과 Promise.race 의 차이점
<pre>
<code>
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms)
    });
}

// Promise.all
(async function main() {
    const results = await Promise.all([p(1000), p(2000), p(3000)]);
    console.log(results);
})(); // 3초 후에 실행


// Promise.race
(async function main() {
    const results = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(results);
})(); // 1초 후에 실행

</code>
</pre>

