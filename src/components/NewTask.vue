<template>
    <form class="container mb-3" @submit.prevent="addTask(task)">
        <div class="new-task d-flex row">
            <div class="d-flex col form-floating m-2">
                <input
                required
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="task.name"
                />
                <label class="px-4" for="floatingInput">Title*</label>
            </div>
            <div class="d-flex col form-floating m-2">
                <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="task.desc"
                />
                <label class="px-4" for="floatingInput">Description</label>
            </div>
            <div class="d-flex col m-2 py-3">Timer</div>
            <div class="d-flex col mx-1 py-3">
                <div class="btn-group">
                    <button type="submit" class="btn btn-primary">Add</button>
                    <button
                        v-on:click="addItem"

                        type="button"
                        class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                    ><span class="visually-hidden">Toggle Dropdown</span></button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li>
                            <button class="dropdown-item" type="button">Add & Start</button>
                        </li>
                        <li>
                            <button class="dropdown-item" type="button">Schedule</button>
                        </li>
                        <li>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'NewTask',
    props: {

    },
    data() {
        return {
            task: {

            }
        }
    },
    methods: {
        addTask: function(task) {
            this.task = {};
            this.$emit('add-task', task)
        }
    }
}
</script>