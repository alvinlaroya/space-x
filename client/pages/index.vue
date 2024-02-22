<script lang="ts" setup>
definePageMeta({
	layout: 'navigation'
})

/* const store = useCounter()
const selection = ref(0) */
import { ref } from 'vue'

// queries

const litmit = ref(10);
const offset = ref(0);

const query = gql`
	query getLaunhes($limit: Int, $offset: Int) {
		launches (limit: $limit, offset: $offset) {
			id
			mission_name
			launch_date_local
			details
			launch_site {
				site_name
			}
			rocket {
				rocket {
					id
					name
				}
			}
		}
	}
`
const variables = {
	limit: litmit.value,
	offset: offset.value
}

interface LaunchSite {
	site_name: String
}

interface Rocket {
	rocket: {
		id: String
		name: String
	}
}

const { data } = useAsyncQuery<{
	launches: {
		id: String
		mission_name: String
		launch_date_local: String
		details: String
		launch_site: LaunchSite
		rocket: Rocket
	}[]
}>(query, variables)

const launches = computed(() => data.value?.launches ?? [])
</script>


<template>
	<v-container fluid>
		<p>There are {{ launches?.length || 0 }} launches.</p>
		<pre>{{ launches }}</pre>
	</v-container>
</template>
