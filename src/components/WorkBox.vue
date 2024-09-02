<template>
  <div class="box-area">
    <h2>{{ project.title }}</h2>
    <div class="project_info">
      <div class="project_info__img-wrapper">
        <img
          :src="require(`@/assets/img/projects/${project.prjImg}`)"
          :alt="project.title"
        />
      </div>
      <div class="project_info__description-wrapper">
        <p>{{ project.desTxt }}</p>
        <ul class="project_info__label-wrapper mb10 mt10">
          <li
            v-for="(lang, index) in project.prdLan"
            :key="index"
            :class="{
              label: true,
              'label-green': lang === 'vue',
              'label-vue-router': lang === 'vue-router',
              'label-vuex': lang === 'vuex',
              'label-yellow': lang === 'javascript',
              'label-babel': lang === 'Babel',
              'label-darkgreen': lang === 'Node.js',
              'label-darkblue': lang === 'css',
            }"
          >
            {{ lang }}
          </li>
        </ul>
        <div class="project_info__link-wrapper">
          <a :href="project.gitHubUrl" target="_blank" class="label-white">
            <svg
              height="32"
              width="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              class="octicon octicon-mark-github v-align-middle"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <a :href="project.webLink" target="_blank"
            ><svg
              height="32"
              width="32"
              data-slot="icon"
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
              ></path></svg
          ></a>
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
.box-area {
  padding: 3rem;
  border-radius: 1rem;
  background-color: #3a3a3a;
  box-shadow: 1rem 1rem 1rem 0 #0000004e;
  -webkit-box-shadow: 1rem 1rem 1rem 0 #0000004e;
  width: 100%;
  box-sizing: border-box;
}

.box-area h2 {
  padding-bottom: 0.5rem;
  font-weight: 400;
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
}

.project_info {
  display: flex;
  display: -ms-flexbox;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-pack: space-between;
  -ms-flex-pack: space-between;
}

.project_info .project_info__img-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.project_info .project_info__description-wrapper {
  width: 100%;
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

.project_info__label-wrapper {
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
}

.project_info__link-wrapper {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.project_info__link-wrapper a {
  display: inline-block;
  border-radius: 5px;
  padding: 5px;
}
.project_info__link-wrapper .label-white svg {
  filter: invert(18%) sepia(61%) saturate(0%) hue-rotate(176deg) brightness(91%)
    contrast(96%);
}
.project_info__link-wrapper svg {
  filter: invert(96%) sepia(2%) saturate(804%) hue-rotate(189deg)
    brightness(101%) contrast(89%);
}
</style>
