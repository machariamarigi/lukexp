<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts" />
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
            v-model="newPostText"
          ></textarea>
          <div class="form-actions">
            <button class="btn-blue">Submit Post</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sourceData from "../data.json";
import PostList from "../components/PostList";

export default {
  components: {
    PostList
  },

  props: {
    id: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      thread: sourceData.threads[this.id],
      newPostText: ""
    };
  },

  methods: {
    addPost() {
      const postId = `newpost ${Math.random()}`;

      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "rpbB8C6ifrYmNDufMERWfQUoa202",
        ".key": postId
      };

      this.$set(sourceData.posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(sourceData.users[post.userId].posts, postId, postId);

      this.newPostText = "";
    }
  },

  computed: {
    posts() {
      const postIds = Object.values(this.thread.posts);

      return Object.values(sourceData.posts).filter(post =>
        postIds.includes(post[".key"])
      );
    }
  }
};
</script>
