<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        href="#"
        class="forum-name"
        :to="{name: 'Forum', params: { id: forum['.key']}}"
      >{{ forum.name }}</router-link>

      <p class="forum-description ">{{ forum.description }}</p>
    </div>

    <div class="threads-count">
      <p class="count">{{ threadCount }}</p>
      {{ threadCount === 1 ? 'thread' : 'threads' }}
    </div>

    <div class="last-thread">
      <!-- TODO: Implement later -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forum: {
      required: true,
      type: Object
    }
  },

  computed: {
    threadCount() {
      return this.forum.threads ? Object.values(this.forum.threads).length : 0;
    }
  }
};
</script>

