<template>
  <div class="mainTable">
<ul>
  <li v-for="item in dataGroups">

    <div class="contentBox">
		<div class="d-title">
			<label class="title">{{item.name}}</label>
			<label class="time">{{item.insertDate}}</label>
			<div style="height:10px;"></div>
			<hr/>
		</div>
		<div class="d-content">
			<div class="d-item">金额:&nbsp;&nbsp;{{item.money}}</div>
			<div class="d-item">回款日:&nbsp;&nbsp;{{item.BackDate}}</div>
			<div class="d-item">预期:&nbsp;&nbsp;{{item.expectInterst}}</div>
		</div>
	</div>
	
  </li>
</ul>
<div class="contentBox">

		<div class="d-content">
			<div class="d-item">合计:&nbsp;&nbsp;{{totalMoney}}</div>
		</div>
	</div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
	name: 'mainTable',
	data(){
		return {dataGroups:[],totalMoney:0}
  },
  created:function(){
	let _this=this
	Vue.http.get('http://123.207.187.133:10003/getjson.py').then(response => {
		console.log(response)
		_this.data=response.body;
		_this.dataGroups=_this.data.dataGroups;
		var total=0;
		for(var i in _this.dataGroups)
		{
			if(!isNaN(_this.dataGroups[i].money))
			{
				total+=parseInt(_this.dataGroups[i].money);
			}
		}
		_this.totalMoney=total;
	}, response => {
    this.$message.error('数据请求失败，请检查网络');
  })
	
  }
}
</script>

<style>
.contentBox{
	background-color:white;
	border:1px solid #d0d0d0;
	border-radius: 5px;
	margin:20px;
	padding:8px;
}
.contentBox .title{
	font-size:14px;
	font-weight:700px;
	
}
.contentBox .time{
	font-size:10px;
	color:#646464;
	float:right;
}
.contentBox hr{
	border:0.5px solid #d0d0d0
}
.contentBox .d-content{
	padding:10px 0px 5px 0;
}
.contentBox .d-content .d-item{
	padding-bottom:4px;
}
</style>