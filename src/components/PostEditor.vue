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
      const post = {
        text: this.text,
        threadId: this.threadId
      };

      this.$store.dispatch("createPost", post);
      this.text = "";

      this.$emit("save", { post });
    }
  }
};
</script>
