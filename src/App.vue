<template>
    <img class="mb-4" alt="Vue logo" src="./assets/logo.png" />

    <div @pop-task="popTask">
        <NewTask @add-task="pushTask"></NewTask>
        <div class="container" v-for="(task, index) in tasks" :key="index">
            <Task :task="task" :time="0"></Task>
        </div>
    </div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import Task from './components/Task.vue'

import 'bootstrap/dist/js/bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
    name: 'App',
    components: {
        Task,
        NewTask
    },
    data() {
        return {
            tasks: []
        }
    },
    created() {
        // Programatically add test tasks
        this.pushTask({ name: "First Task" });
        this.pushTask({ name: "Second Task" })
    },
    methods: {
        pushTask: function (item) {
            item.id = Math.random().toString(16).substr(2, 8);
            this.tasks.push(item);
        },
        popTask: function(id) {
            console.log(this.tasks)

            for(var i = 0; i < this.tasks.length; i++) {
                if(this.tasks[i].id == id) {
                    this.tasks.$delete(this.tasks, i);
                }
            }
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
