<template>
	<div class="microphone-hint">
		<h2>Freigaben</h2>
		<div v-html="microphoneHint" class="hint-text"/>
		<router-link to="/question/1">
			<button>
				{{ nextPageText }}
			</button>
		</router-link>
	</div>
</template>

<script>
import {
	nextPageText,
	microphoneHint
} from '@/config.js'

export default {
	name: 'MicrophoneHint',
	data () {
		return {
			nextPageText,
			microphoneHint
		}
	}
}
</script>

<style lang="scss">
.hint-text {
	padding-bottom: 2rem;
}
</style>