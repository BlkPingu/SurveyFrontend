<template>
	<div id="app">
		<header class="wrapper site-header">
			<div class="title">
				<router-link to="/">
					<h1 v-if="title">{{ title }}</h1>
				</router-link>
				<h2 v-if="subtitle">{{ subtitle }}</h2>
			</div>
			<div v-if="sessionID">
				<p class="SessionID">SessionID: <strong>{{ sessionID }}</strong></p>
				<p class="SessionID">Speichern Sie sich diese Nummer zur Identifikation Ihres Datensatzes für Anfragen im Rahmen Ihrer Rechte nach der DSGVO. Ohne Ihre SessionID ist eine Identifikation Ihres Datensatzes nicht mehr möglich.</p>
			</div>
		</header>
		<article class="wrapper article-content">
			<router-view></router-view>
		</article>
		<footer class="footer">
			<router-link to="/privacy-notice">Datenschutz</router-link>
			<router-link to="/imprint">Impressum</router-link>
		</footer>
	</div>
</template>

<script>
import { title, subtitle, logo } from '@/config.js'

export default {
	name: 'AppWrapper',
	data() {
		return {
			logo,
			title,
			subtitle,
		}
	},
	computed: {
        sessionID(){
        	return this.$store.getters.getSessionID
        }
	}
}
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/fonts';

*,
*:after,
*:before {
	box-sizing: border-box;
}

body {
	background: $background-color;
	margin: 0;
	padding: 0;
	line-height: 1.8;
	font-size: 1rem;
	color: $text-color;
	font-family: $font-family;
}

@supports (font-variation-settings: normal) {
	font-family: $font-family-variable;
}

.wrapper {
	width: 100%;
	max-width: 45rem;
	padding: 2rem;
	margin: 0 auto;
}

.article-content {
	margin-bottom: 5rem;
}

.site-header {
	a {
		text-decoration: none;
	}
}

.title {
	display: inline-block;

	h1,
	h2 {
		line-height: 1;
		margin: 0 0 1rem;
	}

	h1 {
		color: $primary-color;
	}

	h2 {
		font-weight: normal;
		font-size: 1.2rem;
	}
}

h1,h2,h3,h4,h5,h6 {
	word-break: break-all;
}

article {
	margin-bottom: 200px;
	display: block;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a {
		color: $primary-color;
	}
}

button,
input[type="submit"] {
	background: $primary-color;
	padding: 0.75rem;
	border-radius: 5px;
	font-weight: bold;
	color: $button-text-color;
	border: none;

	&:not(:disabled):hover {
		box-shadow: inset 0 4px 0 $primary-dark;
		//filter: brightness(85%);
		background: $primary-dark;
		cursor: pointer;
	}

	&:active {
		background: $primary-dark;
	}

	&:focus {
		background: mix($primary-color, $primary-dark, 50%);
	}

	&:disabled {
		background: $light-background;
		color: #bbb;
	}
}

footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	text-align: center;
	padding: 1rem;
	background-color: $primary-color;

	a {
		margin: 0 20px;
		color: $background-color;
		text-decoration: none;
	}
}

.SessionID{
	font-size: .8rem;
	opacity: .5;

	span {
		font-style: italic;
	}
}

</style>
