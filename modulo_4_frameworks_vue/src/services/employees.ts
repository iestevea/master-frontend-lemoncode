import { Employee } from "@/types";

export const employeeService = {
  async getEmployees(organization: string = "lemoncode"): Promise<Employee[]> {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    .then((json) => json);
  }
}