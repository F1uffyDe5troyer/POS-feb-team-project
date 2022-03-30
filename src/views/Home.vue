<template>
<div id="Home">
  <navbar />
  <home />
  <end />
</div>
</template>

<script>
import home from "@/components/home";
import navbar from "@/components/navbar";
import end from "@/components/end";

export default {
      components: {
    home,
    end,
    navbar
  }
}
</script>

<style scoped>

</style>