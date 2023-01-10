import Chart from 'chart.js/auto';

export default {
  name: 'postCard',
  props: {
    post: { type: Object },
  },

  mounted() {
    // console.log(this.post.comments.map((c) => c.body.length));

    new Chart(this.$refs.chart, {
      type: 'bar',
      data: {
        labels: this.post.comments.map((c) => c.name),
        datasets: [
          {
            axis: 'y',
            fill: false,
            label: '# of chars in comments',
            data: this.post.comments.map((c) => c.body.length),
          },
        ],
      },
      options: {
        indexAxis: 'y',
      },
    });
  },
};
