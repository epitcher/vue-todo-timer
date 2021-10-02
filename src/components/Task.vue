<template>
    <div class="task d-flex row border-bottom">
        <div class="d-flex col mx-2 py-3">Name: {{ task.name }}</div>
        <div class="d-flex col mx-2 py-3">Desc: {{ task.desc }}</div>
        <div
            class="col mx-2 my-3 btn btn-success"
            @click="toggleContinueCount"
        >Timer: <TimeDisplay :time="timeCount"></TimeDisplay></div>
        <div class="col mx-2 py-3 text-center">
            <button class="btn btn-link text-dark" @click="remove">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
</template>

<script>
import TimeDisplay from './TimeDisplay'
export default {
    name: 'Task',
    components: {
        TimeDisplay
    },
    props: {
        task: Object,
        time: Number
    },
    data() {
        return {
            timeCount: this.time,
            continueCount: false
        }
    },
    created() {

        setInterval(() => {
            if (this.continueCount) this.timeCount++
        }, 1000);

    },
    methods: {
        toggleContinueCount: function () {
            this.continueCount = !this.continueCount;
        },
        remove: function() {
            console.log(this.task.id);
            this.$emit('pop-task', this.task.id);
        }
    }
}
</script>