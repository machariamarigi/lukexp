<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItem :category="category" />
  </div>
</template>

<script>
import CategoryListItem from "../components/CategoryListItem";

export default {
  components: {
    CategoryListItem
  },

  props: {
    id: {
      required: true,
      types: String
    }
  },

  computed: {
    category() {
      return this.$store.state.categories[this.id];
    }
  }
};
</script>
