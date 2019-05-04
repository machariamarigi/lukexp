<template>
  <div
    class="col-full"
    :class="$style.centred"
  >
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">
      Oops, We couldn't find what you're looking for.
      <router-link :to="{ name: 'Home' }">Go home instead?</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.centred {
  text-align: center;
}
.headingLarge {
  font-size: 100px;
}
.textLarge {
  font-size: 50px;
  font-weight: 100;
}
</style>

