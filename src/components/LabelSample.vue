<template>
	<p class="label">Vue On {{message}}</p>
</template>
<script lang="ts">

export default {
	data() {
		return {
			message: "Typescript"
		}
	}
}
</script>
<style lang="scss" scoped>
.label {
	font-size: 24px;
	font-weight: bold;
}
</style>
