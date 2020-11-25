<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2020-11-25 11:05:21
-->
<template>
	<div class="box">
		{{ counter }}
		<a-button type="primary" @click="addCount">添加</a-button>
	</div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
export default {
	name: "App",
	// 组合API函数入口
	setup() {
		const store: any = useStore();

		const counter = computed(() => {
			return store.state.counter;
		});

		const addCount = () => {
			store.commit("addCount");
		};

		return { counter, addCount };
	},
};
</script>

<style lang="less" scoped>
.box {
	width: 300px;
	height: 300px;
	background: red;
}
</style>