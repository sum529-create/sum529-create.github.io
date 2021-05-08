---
layout: post
title:  "다단(Multi Columns)"
date:   2021-05-07
excerpt: "다단(Multi Columns)"
tag:
- css
- html5
category: [WEB]
comments: true

---

# Multi Columns
- 일반 블록 레이아웃을 확장하여 여러 텍스트 다단으로 쉽게 정리하며, 가독성을 확보

# columes
- 다단을 정의
* auto          - 브라우저가 단의 너비와 개수를 설정
* column-width  - 단의 최적 너비를 설정
-> 각 단이 줄어들 수 있는 최적 너비(최소 너비)를 설정하며,  요소의 너비가 가변하여 하나의 단이 최적너비보다 줄어들 경우 단의 개수가 조정됩니다.
(기본값: auto, 단위: px, em, cm 등 단위로 지정)
> column-count  - 단의 개수를 설정 (기본값: auto, 단위: 숫자)

=> 문단 형식이 'ㅁ|ㅁ|ㅁ' 와 같이 있을 때 각각의 문단의 너비(column-width)와 갯수(column-count)를 정의하는 것

<pre>
<code>
.text{
  columns: 100px 2; /* 단의 너비 단의 갯수*/
}
</pre>
</code>

# lorem ipsum
- 임의의 장문들을 갖고 있는 사이트

<pre>
<code>
p{
  columns: 150px 3;
  /* column-width: 200px;
  column-count: 3;*/
  /* 최적의 너비를 지정하는 것이기에 200px보다 작아질때 단의 갯수가 달라지게 된다. */
}
</pre>
</code>


# column-gap
- 단과 단 사이의 간격 설정
* normal        - 브라우저가 단과 단 사이의 간격을 설정(1em)  (기본값) * 1em == font-size:16px;
* 단위          - px, em, cm 등 단위로 지정
문단이 'ㅁ|ㅁ|ㅁ' 으로 있을 때 '|'의 간격 조정


# column-rule
- 단과 단 사이의 (구분) 선을 지정
* column-width        - 선의 두께를 지정   - 기본값: medium
* column-style        - 선의 종류를 지정   - 기본값 : none
* column-color        - 선의 색상을 지정   - 요소의 글자색과 동일
=> border와 동일 ex)border: 선두께 선종류 선색상;

<pre>
<code>
p{
  color:green;
  text-align: justify; /* 양쪽 정렬 */
  columns: 150px 3;
  column-gap: 20px;
  column-rule: 2px dashed red; /* 글자색과 다르게 주고 싶다면 색상을 꼭 명시해야 함, 동일 시 하고 싶다면 생략해도 무방 */
}
</pre>
</code>



