import { EmployeeApi } from "./employees-list.api-model";

export const DEFAULT_LIMIT: number = 5;

export interface FetchOptions {
  filter?: string;
  page?: number;
}

export const fetchEmployeesList = async (organization: string = "lemoncode"): Promise<EmployeeApi[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    .then((json) => json);
};

export const fetchEmployeesListCount = async (organization: string = "lemoncode"): Promise<number> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
    .then((json) => json.length);
};

export const filterEmployeesList = async (organization: string = "lemoncode", page: number = 1): Promise<EmployeeApi[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${DEFAULT_LIMIT}`)
    .then((response) => response.json())
    .then((json) => json);
};