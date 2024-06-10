<template>
  <footer class="footer">
    <div class="container">
      <p class="text-muted">@ 2024 sumin.noh. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  z-index: 99;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.text-muted {
  color: #aaa;
}
</style>
