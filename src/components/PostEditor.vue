<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="form-input"
        v-model="text"
      ></textarea>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },

  props: {
    threadId: {
      required: true,
      type: String
    }
  },

  methods: {
    save() {
      const postId = `newpost ${Math.random()}`;

      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: "rpbB8C6ifrYmNDufMERWfQUoa202",
        ".key": postId
      };

      this.$emit("save", { post });
    }
  }
};
</script>

