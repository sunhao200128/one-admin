<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 匿名插槽 -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: '321312',
      };
    },
  };
</script>

<style></style>
