<template>
  <div class="project-card">
    <div class="project-card-title fs-2-5">
      <svg
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
        ></path>
      </svg>
      <h2>{{ project.title }}</h2>
    </div>
    <div class="project-info">
      <div class="img-wrapper">
        <a :href="project.webLink" target="_blank">
          <img
            :src="require(`@/assets/img/projects/${project.prjImg}`)"
            :alt="project.title"
          />
        </a>
      </div>
      <div class="description-wrapper">
        <div class="labels-wrapper">
          <span>Skills</span>
          <ul class="label-wrapper">
            <li
              v-for="(lang, index) in project.prdLan"
              :key="index"
              :class="{
                label: true,
                'label-green': lang === 'Vue',
                'label-vue-router': lang === 'Vue-Router',
                'label-vuex': lang === 'Vuex',
                'label-yellow': lang === 'JavaScript',
                'label-babel': lang === 'Babel',
                'label-darkgreen': lang === 'Node.js',
                'label-darkblue': lang === 'Css' || lang === 'CSS-in-JS',
                'label-vite': lang === 'Vite',
                'label-firebase': lang === 'Firebase',
                'label-blue': lang === 'TypeScript',
                'label-pink': lang === 'Scss',
                'label-pink': lang === 'Sass',
                'label-orange': lang === 'Html',
                'label-react': lang === 'React',
                'label-react-router': lang === 'React-router',
                'label-react-dom': lang === 'React-dom',
                'label-glitch': lang === 'Glitch',
              }"
            >
              {{ lang }}
            </li>
          </ul>
        </div>
        <div class="project-description">
          <div class="project-sub">
            <i class="material-icons"> menu_book </i>
            <h3>Description</h3>
          </div>
          <ul class="bull_list">
            <li v-for="(des, i) in project.desTxt" :key="i">
              {{ des }}
            </li>
          </ul>
        </div>
        <div class="link-wrapper">
          <a :href="project.gitHubUrl" target="_blank" class="label-white">
            <svg
              height="32"
              width="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              class="octicon octicon-mark-github"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <a :href="project.webLink" target="_blank">
            <svg
              height="32"
              width="32"
              fill="none"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkBox",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
};
</script>

<style>
.project-card {
  padding: 2rem;
  border-radius: 1rem;
  background-color: #3a3a3a;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  overflow: hidden;
  box-sizing: border-box;
}

/* .project-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-10px);
} */

.project-card .project-card-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 20px;
  gap: 5px;
  align-items: center;
  margin-bottom: 1rem;
}

.project-card .project-card-title h2 {
  font-weight: 600;
  color: #fff;
  text-align: center;
}

.project-card .project-card-title svg {
  height: 42px;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.img-wrapper {
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  background: #2c2c2c;
}

.img-wrapper img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s;
  cursor: pointer;
}

.img-wrapper:hover img {
  transform: scale(1.05);
}

.description-wrapper {
  color: #d1d1d1;
}

.labels-wrapper {
  text-align: left;
}

.labels-wrapper span {
  color: #9fadbc;
  font-size: 12px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 4px;
  line-height: 20px;
}

.label-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem 0;
}

.project-description {
  text-align: left;
  margin-bottom: 2rem;
}

.project-sub {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 32px;
  margin: 0 0 4px 40px;
  padding: 8px 0;
}

.project-sub i {
  position: absolute;
  left: -36px;
  display: inline-block;
  line-height: 1;
}

.project-sub h3 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #b6c2cf;
}

.link-wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.link-wrapper a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #fff;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.link-wrapper a:hover {
  background-color: #f1f1f1;
  transform: translateY(-2px);
}

.link-wrapper svg {
  width: 24px;
  height: 24px;
  filter: invert(20%) sepia(10%) saturate(400%) hue-rotate(200deg)
    brightness(90%) contrast(90%);
}
</style>
