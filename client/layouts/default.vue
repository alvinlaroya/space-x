<template>
	<v-app>
		<NavigationsNavbar>
			<slot />
		</NavigationsNavbar>
		<NavigationsFooter />
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
