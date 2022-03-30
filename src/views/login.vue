<template>
  <div class="login">
    <login />
    <end />
  </div>
</template>
<script>
import login from "@/components/auth/login";
import end from "@/components/end";
import navbar from "@/components/navbar";

export default {
  components: {
    login,
    end,
    navbar
  }
};
</script>