export interface EmployeeVm {
  id: number;
  name: string;
  company: string;
  bio: string;
  img: string;
}

export const createEmptyEmployee = (): EmployeeVm => ({
  id: 0,
  name: '',
  company: '',
  bio: '',
  img: ''
})