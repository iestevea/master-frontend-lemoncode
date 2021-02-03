<template>
  <div class="github">
    <div class="employees-searcher">
      <input type="text" :value="organization" @blur="event => filterEmployees(event.target.value) " />
    </div>
    <div class="employees-wrapper" v-if="employees.length > 0">
      <div v-for="employee in employees" :key="employee.id" >
        <CardEmployee :employee="employee" />
      </div>
    </div>
    <div v-else class="not-found-wrapper"><p>No hemos encontrado resultados</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardEmployee from "@/components/CardEmployee.vue";
import { Employee } from "@/types";
import { employeeService } from "@/services/employees";

export default defineComponent({
  name: "Github",
  components: { CardEmployee },
  data() {
    return { employees: [] as Employee[], organization: "lemoncode" as string };
  },
  methods: {
    async filterEmployees(org: string) {
      this.organization = org;
      this.employees = await employeeService.getEmployees(org);
    }
  },
  async created() {
    this.employees = await employeeService.getEmployees();
  }
});
</script>

<style>
.github {
  padding: 1.5rem;
}
.employees-searcher {
  border: 1px solid gray;
  width: fit-content;
  border-radius: 8px;
}
.employees-searcher > input{
  border-radius: 8px;
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 8px;
}
.employees-wrapper {
  display: grid;
  margin-top: 2rem;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 3rem;
}
</style>
