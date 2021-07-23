<template>
  <div class="top">
    <h1>普通插槽</h1>
    <Base class="a" url="https://www.baidu.com">
      <!-- <template #content> -->
      <!-- <Icon icon="dynamic-avatar-4|svg" :size="100"></Icon> -->
      <!-- </template> -->
      <!-- 父组件值：{{ name.ict }}，子组件值：{{ url }} -->
    </Base>
  </div>
</template>

<script>
  import { Icon } from '/@/components/Icon';
  import Base from './components/base.vue';
  export default {
    name: 'baseSlot',
    components: {
      Base,
      Icon,
    },
    data() {
      return {
        name: {
          ict: '哈默',
        },
      };
    },
  };
</script>

<style lang="less" scoped>
  .top {
    margin: 0 auto;
    text-align: center;
    & > h1 {
      text-align: center;
      font-size: 50px;
    }
    & > .a {
      font-size: 40px;
    }
  }
</style>
