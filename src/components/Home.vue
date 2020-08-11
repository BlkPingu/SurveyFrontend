<template>
	<div class="intro">
		<h1>Hallo und Danke!</h1>
		<p>{{ instructions }}</p>
		<router-link to='/cookie'>
			<button>
				{{ nextPageText }}
			</button>
		</router-link>
	</div>
</template>

<script>
import {instructions, nextPageText} from '@/config.js'
export default {
	name: 'Homepage',
	data () {
		return {
			instructions,
			nextPageText
		}
	}
}
</script>