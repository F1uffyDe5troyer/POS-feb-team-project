<template>
  <div class="register">
    <register />
    <end />
  </div>
</template>
<script>
import register from "@/components/auth/register";
import end from "@/components/end";

export default {
  components: {
    register,
    end,
  }
};
</script>