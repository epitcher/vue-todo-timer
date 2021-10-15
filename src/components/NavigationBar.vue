<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vue.js</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/timer" class="nav-link" aria-current="page">Timer</router-link>
                    </li>
                </ul>

                <!-- Search -->
                <form class="d-flex" @submit.prevent="search">
                    <input
                        v-model="query"
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',
    methods: {
        search: function() {
            console.log(this.query);
        }
    }
}
</script>