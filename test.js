let i = 0,
  j = 0;

const textArray = [
    "멋진 인터페이스를 개발하는",
    "커뮤니케이션 능력을 갖춘",
    "미적감각을 충족한",
    "하루하루 발전하는",
  ],
  speed = 100,
  target = document.getElementById("myself");

function txtnum() {
  j == textArray.length - 1 ? (j = 0) : j++;
}

function type() {
  i < textArray[j].length
    ? ((target.innerHTML += textArray[j].charAt(i)),
      i++,
      setTimeout(type, speed))
    : remove();
}

function remove() {
  0 <= i
    ? ((target.innerHTML = target.innerHTML.slice(0, i)),
      i--,
      setTimeout(remove, speed))
    : (type(), txtnum());
}

type();
