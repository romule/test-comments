import postCard from '@/components/postCard/index.vue';

export default {
  name: 'HomeView',

  data() {
    return {
      isLoading: null,
      posts: [],
      comments: [],

      title: '',
      filteredPosts: [],
    };
  },

  mounted() {
    this.fetchPosts();
    this.fetchComments();
  },

  computed: {
    combineDataPosts() {
      if (this.title) {
        return this.filteredPosts.map((el) => {
          return {
            ...el,
            comments: this.comments.filter((c) => c.postId === el.id),
          };
        });
      } else {
        return this.posts.map((el) => {
          return {
            ...el,
            comments: this.comments.filter((c) => c.postId === el.id),
          };
        });
      }
    },
  },

  watch: {
    title() {
      this.getPostByFilter();
    },
  },

  methods: {
    fetchPosts() {
      this.isLoading = true;

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return res.json();
        })
        .then((data) => this.posts.push(...data))
        .catch((err) => console.log(err))
        .finally(() => (this.isLoading = false));
    },

    fetchComments() {
      this.isLoading = true;

      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((data) => this.comments.push(...data))
        .catch((err) => console.log(err))
        .finally(() => (this.isLoading = false));
    },

    getPostByFilter() {
      return (this.filteredPosts = this.posts.filter((p) =>
        p.title.includes(this.title)
      ));
    },
  },

  components: {
    postCard,
  },
};
