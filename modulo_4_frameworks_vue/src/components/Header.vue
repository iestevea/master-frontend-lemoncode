<template>
  <div class="header-wrapper">
    <img alt="logo" src="../assets/female_dev_icon.png" />
    <h1>Welcome to basic vue example!</h1>
    <div class="header-links">
      <router-link :to="routeGithub.root">Home</router-link>
      <router-link :to="routeGithub.github">Github People Filter</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routeStrings } from "@/router/index";

export default defineComponent({
  data: () => ({
    routeGithub: routeStrings
  })
});
</script>

<style>
.header-wrapper {
  width: calc(100% - 2rem) ;
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #93e5e9;
  color: white;
  padding: 0 1rem;
}
.header-wrapper > * + * {
  padding-left: 1rem;
  width: 100%;
}
.header-wrapper > img {
  max-height: 50%;
  border-radius: 45%;
}
.header-links {
  display: flex;
  justify-content: flex-end;
}
.header-links > a {
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding-right: 1rem;
  color: white;
}
</style>
