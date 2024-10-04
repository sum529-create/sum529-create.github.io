<template>
  <div class="wave-text fs-2">
    <span
      v-for="(char, index) in text"
      :key="index"
      class="wave"
      :style="{ animationDelay: `${0.1 * index}s` }"
    >
      {{ char === "_" ? "&nbsp;" : char }}
    </span>
  </div>
</template>

<script>
export default {
  name: "WaveText",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.wave-text {
  display: inline-block;
  color: #f0c300; /* 노란색 */
}

.wave {
  display: inline-block;
  animation: wave-animation 1.5s ease-in-out;
}

@keyframes wave-animation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px); /* 파도 높이 조절 */
  }
  100% {
    transform: translateY(0);
  }
}
</style>
