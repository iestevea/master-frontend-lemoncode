import { EmployeeApi } from "./api/employee-detail.api-model";
import { EmployeeVm } from "./employee-detail.vm";

export const mapEmployeeFromApiToVm = (employee: EmployeeApi): EmployeeVm => ({
  id: employee.id,
  name: employee.name,
  company: employee.company,
  bio: employee.bio,
  img: employee.avatar_url
})