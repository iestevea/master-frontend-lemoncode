import React, { useEffect, useState } from "react";
import {
  DEFAULT_LIMIT,
  fetchEmployeesList,
  fetchEmployeesListCount,
  FetchOptions,
  filterEmployeesList,
} from "./api";
import { EmployeesListComponent } from "./employees-list.component";
import { mapEmployeesListFromApiToVm } from "./employees-list.mapper";
import { EmployeeVm } from "./employees-list.vm";

export const EmployeesListContainer: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeVm[]>([]);
  const [total, setTotal] = useState<number>(0);

  const onLoadEmployeesList = async () => {
    const apiEmployeesList = await fetchEmployeesList();
    const count = await fetchEmployeesListCount();
    const vmEmployeesList = mapEmployeesListFromApiToVm(apiEmployeesList);

    if (vmEmployeesList.length > DEFAULT_LIMIT) {
      vmEmployeesList.splice(DEFAULT_LIMIT - 1);
    }

    setEmployees(vmEmployeesList);
    setTotal(Math.ceil(count / DEFAULT_LIMIT));
  };

  const onFilterEmployeesList = async (options: FetchOptions) => {
    const apiEmployeesList = await filterEmployeesList(
      options.filter,
      options.page
    );
    const count = await fetchEmployeesListCount(options.filter);
    const vmEmployeesList = mapEmployeesListFromApiToVm(apiEmployeesList);
    setEmployees(vmEmployeesList);
    setTotal(Math.ceil(count / DEFAULT_LIMIT));
  };

  useEffect(() => {
    onLoadEmployeesList();
  }, []);

  return (
    <EmployeesListComponent
      employees={employees}
      total={total}
      onFilter={onFilterEmployeesList}
    />
  );
};
