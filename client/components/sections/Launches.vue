<script lang="ts" setup>
import { ref } from 'vue'

// interface 
import type { ILaunches } from '@/interfaces/ILaunches';

//const store = useCounter()

const litmit = ref(24);
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

const { data } = useAsyncQuery<{
    launches: ILaunches[]
}>(query, variables)

const launches = computed(() => data.value?.launches ?? [])
</script>

<template>
    <v-container fluid>
        <p>There are {{ launches?.length || 0 }} launches.</p>
        <v-row justify="center" class="mt-3">
            <v-col cols="2" v-for="(launch, i) in launches" :key="i">
                <CardsLaunch 
                    :mission_name="launch.mission_name" 
                    :launch_date_local="launch.launch_date_local" 
                    :details="launch.details"
                    :launch_site_name="launch.launch_site.site_name"
                    :rocket_name="launch.rocket.rocket.name"
                />
            </v-col>
        </v-row>
        <pre>{{ launches }}</pre>
    </v-container>
</template>
