<template>
  <div class="col-full">
    <h1>Not Found</h1>
    <p>
      Oops, We couldn't find what you're looking for.
      <router-link :to="{ name: 'Home' }">Go home instead?</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  text-align: center;
}
h1 {
  font-size: 100px;
}
p {
  font-size: 50px;
  font-weight: 100;
}
</style>

