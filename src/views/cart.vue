<template>
<div class="cart">
  <navbar />
  <cart />
  <end />
</div>
</template>

<script>
import cart from "@/components/cart";
import navbar from "@/components/navbar";
import end from "@/components/end";

export default {
      components: {
    cart,
    end,
    navbar
  }
}
</script>

<style>

</style>