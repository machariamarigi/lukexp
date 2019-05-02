<template>
  <div>
    <h1>Welcome To The Forum</h1>
    <div
      v-for="thread in threads"
      v-bind:key="thread.id"
    >
      <h1>{{ thread.title }}</h1>
      <div
        v-for="postId in thread.posts"
        v-bind:key="postId"
      >
        <p>{{ users[posts[postId].userId].name }}</p>
        <p>{{ posts[postId].text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "../data.json";

export default {
  name: "HelloWorld",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
