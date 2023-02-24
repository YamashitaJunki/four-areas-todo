<template>
  <div class="main-top">
    <div class="top"></div>

    <div class="container">
      <div class="row">
        <div class="col">
          <div>use free!!!</div>
          <h1>Four Areas TODO App.</h1>

          <NuxtLink to="/">try</NuxtLink>
        </div>
        <div class="col"></div>
        <img src="@/static/pc.png" class="pc" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

.main-top {
  height: 100vh;
  width: 100vw;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  background-image: linear-gradient(
    90deg,
    rgba(251, 213, 251, 1),
    rgba(149, 233, 243, 1)
  );
}
.top {
  margin-top: 3rem;
}
.pc {
  width: 500px;
}
</style>
