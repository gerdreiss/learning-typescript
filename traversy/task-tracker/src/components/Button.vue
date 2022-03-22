<template>
  <button
    class="btn"
    :style="{ background: color }"
    @click="$emit('btn-click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
};
</script>
