<template>
  <section id="video" class="bg-black d-flex justify-content-center">
    <video controls autoplay>
      <source src="/video/IlPalazzodeiDestini.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#video {
  max-width: 100vw;
  height: 100vh;
}

video {
  width: 100%;
}

.bg-black {
  background-color: black;
}
</style>
