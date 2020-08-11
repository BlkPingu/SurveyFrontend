<template>
	<div :class="'question question-' + index">
		<h3>
			This is Question {{ index }} of {{ questions.length }}
		</h3>
		<div class="task">
			<p>
				Bitte folgenden Text sprechen: "{{ this.questions[index-1].text }}"
			</p>
			<Recorder :id="id" :index="index - 1" ref="audiorecorder" />
		</div>
		<!--
			Router link removed from tabindex because button triggers it and is
			visible
		-->
		<router-link :to="nextPage" tabindex="-1">
			<button tabindex="0" :disabled="blockProceed">
				{{ buttonText }}
			</button>
		</router-link>
	</div>
</template>

<script>
import questions from '@/questions.json'
import Recorder from '@/components/Recorder'
import { nextPageText, finishText } from '@/config.js'

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let questions_shuffled = shuffle(questions)

export default {
	name: 'Question',
	// index is starts at 1 as it is the visual indicator,
	// please pay attention
	props: ['index'],
	components: { Recorder },
	data() {
		return {
			questions: questions_shuffled,
		}
	},
	computed: {
		nextPage() {
			return this.index < questions_shuffled.length
				? '/question/' + (parseInt(this.index) + 1)
				: '/thanks'
		},
		buttonText() {
			return this.index < questions_shuffled.length ? nextPageText : finishText
		},
		// disable navigation to next page if there is no audio recording
		blockProceed() {
			if (questions_shuffled[this.index - 1].required) {
				return (
					this.$store.getters.getQuestionById(this.id).recordURL ==
					null
				)
			}
			return false
		},
		// id of the current question
		id() {
			return questions_shuffled[this.index - 1].id
		},
	},
}
</script>

<style lang="scss">
@import '@/scss/variables';

.task {
	background: $light-background;
	padding: 1rem 2rem 2rem;
	margin-bottom: 2rem;
	border-radius: 5px;
}
</style>
