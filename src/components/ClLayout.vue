<template>
  <div id="components-layout-demo-basic" :style="{height:'100%'}">
    <a-layout id="components-layout-demo-custom-trigger" :style="{height:'100%',minHeight:'500px'}">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
          <cl-sidebar/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header><cl-tabs/></a-layout-header>
        <a-layout-content ><cl-body/></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import ClSidebar from './ClSidebar.vue'
import ClTabs from './ClTabs.vue'
import ClBody from './ClBody.vue'

export default {
  name: 'ClLayout',
  components:{
      ClSidebar,
      ClTabs,
      ClBody
  },
  data() {
    return {
      collapsed: true
    }
  }
}
</script>

<style scoped>
#components-layout-demo-basic .ant-layout-header{
    height: 84px;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #FCFCFC;
  padding: 0;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #FCFCFC;
  color: #F0FFFF;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: #FCFCFC;
  color: #FEFFFF;
  padding: 0 10px;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>