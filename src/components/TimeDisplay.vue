<template>
    <span class="TimeDisplay">
        {{ normalizedTime }}
    </span>
</template>

<script>
export default {
    name: 'TimeDisplay',
    props: {
        time: {
            type: Number,
            required: true
        }
    },
    computed: {
        normalizedTime() {
            const format = val => `0${Math.floor(val)}`.slice(-2)

            let seconds = this.time;
            const hours = seconds / 3600
            const minutes = (seconds % 3600) / 60

            return [hours, minutes, seconds % 60].map(format).join(':')
        }
    }
}
</script>