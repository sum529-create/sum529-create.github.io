<template>
  <div class="box-area">
    <h2>Project Title 3</h2>
    <div class="project_info">
      <div class="project_info__img-wrapper">
        <img src="../assets/img/hero/developer_img.png" alt="Project 3 Image">
      </div>
      <div class="project_info__description-wrapper">
        <p>This is a brief description of Project 3. It explains the main features and objectives of the project.</p>
        <ul class="tech-stack">
            <li>Tech 1</li>
            <li>Tech 2</li>
            <li>Tech 3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkBox",
}
</script>

<style>
.box-area{
  padding: 3rem;
  border-radius: 1rem;
  background-color: #1c1c1c;
  box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
  -webkit-box-shadow: 1rem 1rem 1rem 0 rgba(68, 68, 68, .2);
  width: 100%;
  box-sizing: border-box;
}

.box-area h2 {
  padding-bottom: .5rem;
  font-weight: 400;
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
}

.project_info{
  display: flex;
  display: -ms-flexbox;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
}

.project_info .project_info__img-wrapper{
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.project_info .project_info__description-wrapper{
  width: calc(50% - 3rem);
}

.project_info .project_info__img-wrapper img {
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.box-area p {
  margin: 0.5rem 0;
}

.tech-stack {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  display: flex;
  gap: 0.5rem;
}

.tech-stack li {
  background-color: #333;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
}
</style>