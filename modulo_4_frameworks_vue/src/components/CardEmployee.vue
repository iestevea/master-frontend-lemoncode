<template>
  <div class="employee-card">
    <img alt="logo" :src="employee.avatar_url" />
    <h2>Usuario: {{employee.login}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Employee } from "@/types";

export default defineComponent({
  name: "CardEmployee",
  props: { employee: { type: Object as PropType<Employee>, required: true } }
});
</script>

<style>
.employee-card {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  max-width: 300px;
}
.employee-card > h2 {
  margin-left: 8px;
}
.employee-card > img {
  max-height: 100%;
  border-radius: 50%;
}
</style>
