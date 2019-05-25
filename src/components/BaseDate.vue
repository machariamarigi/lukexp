<template>
  <span :title="timestamp | readableDate">
    {{ timestamp | timePassed }}
  </span>
</template>

<script>
import moment from "moment";

export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },

  filters: {
    readableDate(date) {
      return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    timePassed(date) {
      return moment.unix(date).fromNow();
    }
  }
};
</script>
