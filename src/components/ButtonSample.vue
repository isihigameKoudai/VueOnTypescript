<template>
	<input 
		class="button"
		:class="{'is-active': isActive}"
		type="button"
		value="PUSH"
		@click="push()"
	/>
</template>
<script lang="ts">

export default {
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		push() {
			const _self:any = this;
			_self.isActive = !_self.isActive;
		}
	}
}
</script>
<style lang="scss" scoped>
.button {
	width: 100px;
	height: 50px;
	border-radius: 25px;
	font-size: 20px;
	background-color: #444;
	color: #ccc;

	&.is-active {
		background-color: #ccc;
		color: #222;
	}
}
</style>
