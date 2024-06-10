<template>
  <header>
    <nav>
      <ul>
        <li><a href="javascript:;">About</a></li>
        <li><a href="javascript:;">Careers</a></li>
        <li><a href="javascript:;">Skills</a></li>
        <li><a href="javascript:;">Projects</a></li>
        <li><a href="javascript:;">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
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
