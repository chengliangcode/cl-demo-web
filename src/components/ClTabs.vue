<template>
  <div>
    <!-- <a-tabs defaultActiveKey="1" @change="callback" :tabPosition="top" :tabBarGutter=100>
      <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>-->
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail">
        <a-icon type="mail" />
        <span>个人设置</span>
      </a-menu-item>
      <a-menu-item key="app">
        <a-icon type="appstore" />
        <span>公司设置</span>
      </a-menu-item>
      <a-menu-item key="alipay">
        <a-icon type="crown" />
        <span>权限设置</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'ClTabs'
}
</script>

<style scoped>
.ant-menu-item{
    padding: 0 100px;
}
</style>