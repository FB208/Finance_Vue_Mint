<template>
  <div id="app" >
  <mt-header fixed title="固定在顶部"></mt-header>
  <div style="margin-top:50px;margin-bottom:60px;">
	<router-view/>
  </div>
    
<mt-tabbar v-model="selected" style="position:fixed;">
  <mt-tab-item id="资产">
    <img slot="icon" src="/assets/logo.png" >
    <router-link to="/">资产</router-link>
  </mt-tab-item>
  <mt-tab-item id="备用1">
    <img slot="icon" >
    <router-link to="/">备用1</router-link>
  </mt-tab-item>
  <mt-tab-item id="备用2">
    <img slot="icon">
    <router-link to="/">备用2</router-link>
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon">
    <router-link to="/my">我的</router-link>
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  
	return {selected:true,totalMoney:0}
  }
}
</script>

<style>

</style>
