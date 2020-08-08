<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap" rel="stylesheet">
    <h1 id="nav">cubing trainer</h1>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #fffb05;
}
</style>
