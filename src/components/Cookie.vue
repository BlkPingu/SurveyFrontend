<template>
    <div class="intro">
        <h1>Einsatz von Cookies</h1>
        <div v-html="cookiePolicy" class="cookie-policy" />
        <div class="accept">
            <input type="checkbox" id="cookie-accept" v-model="checked" />
            <label for="cookie-accept">{{ cookieAcknowledgement }}</label>
        </div>
        <!-- Button to proceed is disabled as long as checkbox is not checked -->
        <button :disabled="!checked" @click="acceptCookiePolicy">
            {{ nextPageText }}
        </button>
    </div>
</template>

<script>
import {
    nextPageText,
    cookiePolicy,
    cookieAcknowledgement,
} from '@/config.js'

export default {
    name: 'cookieDisclaimer',
    data() {
        return {
            checked: false,
            nextPageText,
            cookiePolicy,
            cookieAcknowledgement,
        }
    },
    methods: {
        acceptCookiePolicy () {
            if (this.checked) {
                this.$store.commit('setCookieAcknowledgement', true)
                this.$router.push('/privacy')
            }
        }
    },
}
</script>

<style lang="scss">
@import '@/scss/variables';

input,
label {
    cursor: pointer;
}

.accept {
    margin: 2rem 0;
    padding: 1rem;
    background: $light-background;
    border-radius: 5px;
}

.cookie-policy {
    display: block;
}
</style>
