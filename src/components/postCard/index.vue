<template>
  <div class="post">
    <div class="content">
      <h3 class="post_header">{{ post.title }}</h3>
      <p class="post_body">{{ post.body }}</p>
      <span class="post_comments">Comments ({{ post.comments.length }})</span>
    </div>
    <canvas class="grafics" ref="chart"></canvas>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>
