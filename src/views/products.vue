<template>
<div class="products">
  <navbar />
  <products />
  <end />
</div>
</template>

<script>
import products from "@/components/products";
import navbar from "@/components/navbar";
import end from "@/components/end";

export default {
      components: {
    products,
    end,
    navbar
  }
}
</script>

<style>

</style>