<template>
  <div class="forum-list">
    <h2 class="list-title"><a href="#">{{ category.name }}</a></h2>

    <ForumList :forums="categoryForums" />
  </div>
</template>

<script>
import ForumList from "./ForumList";
import sourceData from "../data.json";

export default {
  components: {
    ForumList
  },

  props: {
    category: {
      required: true,
      type: Object
    }
  },

  computed: {
    categoryForums() {
      return Object.values(sourceData.forums).filter(
        forum => forum.categoryId === this.category["._key"]
      );
    }
  }
};
</script>
