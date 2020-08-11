<template>
    <div>
        <h2>
            Yay, das war's!
        </h2>
        <p>
            Wenn die Roboter übernehmen werden Sie zumindest dich verstehen.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Thanks',
    beforeMount () {
        this.$store.dispatch('completeSurvey')
    }
}
</script>