<template>
  <div v-if="isLoading" class="home">
    <div class="spinner">
      <img
        width="100"
        height="100"
        src="@/assets/images/spinner_post.png"
        alt="spinner"
      />
    </div>
  </div>

  <div v-else>
    <postCard v-for="post in combineDataPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import postCard from '@/components/postCard/index.vue';

export default {
  name: 'HomeView',

  data() {
    return {
      isLoading: null,
      posts: [],
      comments: [],
    };
  },

  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.isLoading = true;
        return res.json();
      })
      .then((data) => this.posts.push(...data))
      .catch((err) => console.log(err));

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => this.comments.push(...data))
      .catch((err) => console.log(err))
      .finally(() => (this.isLoading = false));
  },

  computed: {
    combineDataPosts() {
      return this.posts.map((el) => {
        return {
          ...el,
          comments: this.comments.filter((c) => c.postId === el.id),
        };
      });
    },
  },

  components: {
    postCard,
  },
};
</script>
