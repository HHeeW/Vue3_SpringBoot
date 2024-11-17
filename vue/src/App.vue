<template>
  <div id="VueContainer">
    <img id="Logo" alt="Vue logo" src="./assets/logo.png">
    <p id="path">
      <strong>경로:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <RouterLink to="/">REDIRECT</RouterLink>
      <RouterLink to="/home">HOME</RouterLink>
      <RouterLink to="/helloSpring">Spring</RouterLink>
      <RouterLink to="/HelloWorld">HelloWorld</RouterLink>
      <RouterLink to="/Dashboard">게시판</RouterLink>
    </nav>
  </div>
  <main style="overflow: auto; padding-bottom: 30px;">
    <RouterView/>
  </main>
</template>

<script>
export default {
  
}
</script>

<style>
body{margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
}
#VueContainer{
  display: grid;
  grid-template-columns: 50px 300px 1fr 300px 50px;
}
#Logo{
  height: 50px;
  width: 50px;
}
#path{
  text-align: left;
}
nav{
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
}
</style>
