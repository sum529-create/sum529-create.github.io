<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="javascript:;" @click.prevent="scrollTo('about', '/')"
            >About</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click.prevent="scrollTo('projects', '/projects')"
            >Projects</a
          >
        </li>
        <li>
          <a
            href="javascript:;"
            @click.prevent="scrollTo('contact', '/projects')"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    scrollTo(sectionId, routePath) {
      // 부모 컴포넌트에 이벤트를 발생시켜 섹션 아이디를 전달
      this.$emit("scrollToSection", sectionId, routePath);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #333;
  color: #fff;
  position: relative;
  z-index: 99;
}
nav {
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline;
      margin-right: 20px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
