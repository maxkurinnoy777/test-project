<template>
  <div>
    <h2> {{ title }} </h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet est magnam neque nesciunt non quas quisquam rem tempore, ullam.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure magni nam perferendis qui quisquam.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 20px 0 30px;
    text-align: center;
  }

  p {
    text-align: center;
  }
</style>
