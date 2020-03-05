<template>
  <a-tabs @change="callback" type="card">
    <a-tab-pane tab="账号管理" key="1">
      <cl-test-table/>
    </a-tab-pane>
    <a-tab-pane tab="数据权限" key="2">Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane tab="功能权限" key="3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>

<script>
import ClTestTable from './ClTestTable.vue'
export default {
  name: 'ClBody',
  components:{
    ClTestTable
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<style>
</style>