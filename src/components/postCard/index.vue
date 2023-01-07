<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <span>{{ post.comments.length }}</span>
  </div>
</template>

<script>
export default {
  name: 'postCard',
  props: {
    post: { type: Object },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
