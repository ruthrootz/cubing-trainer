<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap" rel="stylesheet">
        <h1 id="nav">cubing trainer <span id="info"><i class="fas fa-info-circle"></i></span></h1>
        <b-popover target="info" triggers="hover" placement="bottom">
            <p class="popover-text">The scrambles are for 3x3 cubes.</p>
            <p class="popover-text">Use SPACEBAR to start/stop the timer. Use ESC to clear the timer.</p>
            <p class="popover-text">Click on the X in a solve's DNF cell to toggle the DNF status.</p>
            <p class="popover-text">Hover on (or touch on mobile) a solve's time cell to +2.</p>
            <p class="popover-text">created by: <a href="https://rutholdja.netlify.app/">Ruth O.</a></p>
        </b-popover>
        <!-- <div id="nav">
            <router-link to="/">Timer</router-link> |
            <router-link to="/algorithms">Algorithms</router-link>
        </div> -->
        <router-view/>
        <notifications group="notifications" />
    </div>
</template>

<style>
* {
    background-color: #2c3e50;
    user-select: none;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
}

#nav {
    padding: 10px;
    color: rgb(15, 220, 121);
}

#nav a {
    font-weight: bold;
    color: #ffffff;
}

#nav a.router-link-exact-active {
    color: #fffb05;
}

#info {
    font-size: 0.5em;
}

.popover-text {
    color: #ffffff;
}
</style>
