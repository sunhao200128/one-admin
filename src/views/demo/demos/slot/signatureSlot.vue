<template>
  <div class="top">
    <h1>具名插槽</h1>
    <Signature>
      <template v-slot:header>
        <div> herader中显示</div>
      </template>
      <div>内容</div>
      <template #footer>
        <div> footer中显示 </div>
      </template>
    </Signature>
  </div>
</template>

<script>
  import { Icon } from '/@/components/Icon';
  import Signature from './components/signature.vue';
  export default {
    name: 'baseSlot',
    components: {
      Signature,
      Icon,
    },
    data() {
      return {
        name: {
          ict: '哈默',
          age:21,
          sex:"男"
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
    & > div {
      font-size: 40px;
    }
    & > .a {
      font-size: 40px;
    }
  }
</style>
