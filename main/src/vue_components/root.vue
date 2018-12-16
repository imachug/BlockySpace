<template>
	<div class="current-view">
		<component :is="$parent.currentView" ref="currentView"></component>
	</div>
</template>

<style lang="sass" scoped>
	.current-view
		display: flex
		height: 100%
</style>

<script language="text/javascript">
	export default {
		name: "root"
	};
</script>