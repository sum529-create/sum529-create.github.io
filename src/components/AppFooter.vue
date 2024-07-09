<template>
  <div class="footer">
    <div class="container">
      <img src="../assets/img/icon/favicon_pf_sumin.png" alt="">
      <p class="text-muted">@ 2024 sumin.noh. All rights reserved.</p>
    </div>
  </div>
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
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.container img{
  width: 20px;
}

.text-muted {
  color: #aaa;
}
</style>
