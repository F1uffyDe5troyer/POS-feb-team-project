<template>
<div class="userDetails">
    <navbar />
    <userDetails />
    <end />
</div>
</template>

<script>
import userDetails from "@/components/userDetails";
import navbar from "@/components/navbar";
import end from "@/components/end";
export default {
          components: {
    userDetails,
    end,
    navbar
  }
}
</script>

<style>

</style>