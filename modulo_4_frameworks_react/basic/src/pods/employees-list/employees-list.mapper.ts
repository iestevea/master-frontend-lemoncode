import { EmployeeApi } from "./api"
import { EmployeeVm } from "./employees-list.vm"

const mapEmployeeFromApiToVm = (employee: EmployeeApi): EmployeeVm => ({
  avatar: employee.avatar_url,
  name: employee.login,
  id: employee.id
})

export const mapEmployeesListFromApiToVm = (employeesList) => 
  employeesList.map((employee) => mapEmployeeFromApiToVm(employee))