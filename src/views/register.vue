<template>
  <div class="register">
    <navbar />
    <register />
    <end />
  </div>
</template>
<script>
import register from "@/components/auth/register";
import end from "@/components/end";
import navbar from "@/components/navbar";

export default {
  components: {
    register,
    end,
    navbar
  }
};
</script>