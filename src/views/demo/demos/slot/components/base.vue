<template>
  <a :href="url">
    <slot name="content" :synopsis="synopsis">
      百度
      <!-- {{ url }} -->
    </slot>
  </a>
</template>

<script>
  export default {
    props: ['url'],
    data() {
      return {
        synopsis: {
          name: '英泰思特',
          age: '21',
          time: '2021-08-13',
        },
      };
    },
  };
</script>

<style></style>
