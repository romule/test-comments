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

  <div class="posts-table" v-else>
    <div class="filter">
      <h1>Posts & Comments statistics</h1>
      <form>
        <label for="filter">Filter by </label>
        <input
          id="filter"
          type="text"
          placeholder="title"
          v-model.lazy="title"
        />
      </form>
    </div>

    <div v-if="filteredPosts">
      <postCard v-for="post in combineDataPosts" :key="post.id" :post="post" />
    </div>
    <h4 v-else>No results</h4>
  </div>
</template>

<script src="./script.js"></script>
