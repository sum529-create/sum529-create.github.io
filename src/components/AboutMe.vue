<template>
  <section class="about-me">
    <div class="about-me__container">
      <div class="about-me__header">
        <h2 class="about-me__title">About Me</h2>
      </div>
      <div class="about-me__content">
        <div class="about-me__photo">
          <img src="path/to/photo.jpg" alt="Your Photo" class="about-me__image">
        </div>
        <div class="about-me__details">
          <p class="about-me__text">
            Hello! I'm [Your Name], a [Your Profession]. I specialize in [Your Specialization] and have experience in [Your Experience]. I am passionate about [Your Passion] and love to [Your Hobby].
          </p>
          <ul class="about-me__list">
            <li class="about-me__list-item">[Detail 1]</li>
            <li class="about-me__list-item">[Detail 2]</li>
            <li class="about-me__list-item">[Detail 3]</li>
          </ul>
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
.about-me {
  padding: 2rem 0;
}

.about-me__container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-me__header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.about-me__title {
  font-size: 2.5rem;
  color: #333;
}

.about-me__content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-me__photo {
  flex: 1;
  text-align: center;
}

.about-me__image {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}

.about-me__details {
  flex: 2;
  padding-left: 2rem;
}

.about-me__text {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 1rem;
}

.about-me__list {
  list-style-type: none;
  padding: 0;
}

.about-me__list-item {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}
</style>
