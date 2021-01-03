import { EmployeeApi } from "./employee-detail.api-model";

export const fetchEmployeeDetail = async (id: number): Promise<EmployeeApi> => {
  return fetch(`https://api.github.com/user/${id}`)
    .then((response) => response.json())
    .then((json) => json);
}