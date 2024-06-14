<template>
  <section class="about-me">
    <div class="about-me__container">
      <div class="about-me__content">
        <div class="about-me__photo">
          <img src="../assets/my-ar-img.jpeg" alt="노수민 AR 이미지" class="about-me__image">
          <div class="about-me__profile">
            <div class="about-me__name">
              <h3 class="about-me__name-kor">노수민</h3>
              <span class="about-me__name-eng">(NohSuMin)</span>
            </div>
            <div class="about-me-intro">
              <p>저는 창의적이고 열정적인 프론트엔드 개발자 홍길동입니다.</p>
            </div>
          </div>
        </div>
        <div class="about-me__details">
          <div class="about-me__header">
            <h2 class="about-me__title">About Me</h2>
          </div>
          <div class="about-me__info">
            <h3 class="about-me__sub-title">
              <i class="material-icons work-icon">work</i>
              <span>경력</span>
            </h3>
            <ul class="about-me__list">
              <li class="about-me__list-item">[Detail 1]</li>
              <li class="about-me__list-item">[Detail 2]</li>
            </ul>
          </div>
          <div class="about-me__info">
            <h3 class="about-me__sub-title">
              <i class="material-icons construction-icon">construction</i>
              <span>기술 스택</span>
            </h3>
            <ul class="about-me__list">
              <li class="about-me__list-item">[Detail 1]</li>
              <li class="about-me__list-item">[Detail 2]</li>
            </ul>
          </div>
          <div class="about-me__info">
            <h3 class="about-me__sub-title">
              <i class="material-icons school-icon">school</i>
              <span>교육</span>
            </h3>
            <ul class="about-me__list">
              <li class="about-me__list-item">[Detail 1]</li>
              <li class="about-me__list-item">[Detail 2]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
.about-me__container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-me__content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.about-me__photo {
  flex: 1;
  text-align: flex-start;
}

.about-me__image {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}

.about-me__profile{
  margin: 1rem 0;
  width: 100%;
  line-height: 1.5rem;
}
.about-me__name-eng{
  color: #666;
}

.about-me-intro{
  padding: 1rem 0;
}

.about-me__details {
  flex: 3;
  margin-left: 2rem;
}
.about-me__header {
  text-align: left;
  margin-bottom: 1.5rem;
}

.about-me__title {
  font-size: 2.5rem;
}
.about-me__info{
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  background-color: #373737;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.about-me__sub-title {
  font-size: 1.125rem;
  color: #EFEFEF;
  text-align: left;
  margin-bottom: 1.5rem;
}
.about-me__sub-title > i{
  margin-right: 0.5rem;
}

.about-me__list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.about-me__list-item {
  font-size: 1rem;
  color: #666;
  flex: 0 0 50%;
  box-sizing: border-box;
  padding: 10px;
}
.about-me__list-item:nth-child(odd){
  text-align: left;
}
.about-me__list-item:nth-child(even){
  text-align: right;
}
</style>
