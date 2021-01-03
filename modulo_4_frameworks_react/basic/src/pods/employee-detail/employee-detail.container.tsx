import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEmployeeDetail } from "./api";
import { EmployeeDetailComponent } from "./employee-detail.component";
import { mapEmployeeFromApiToVm } from "./employee-detail.mapper";
import { createEmptyEmployee, EmployeeVm } from "./employee-detail.vm";

export const EmployeeDetailContainer: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeVm>(createEmptyEmployee());
  const { id }: any = useParams();

  const onLoadEmployeeDetail = async (employeeId: number) => {
    const apiEmployeeDetail = await fetchEmployeeDetail(employeeId);
    const vmEmployeeDetail = mapEmployeeFromApiToVm(apiEmployeeDetail);
    setEmployee(vmEmployeeDetail);
  };

  React.useEffect(() => {
    onLoadEmployeeDetail(id);
  }, []);

  return <EmployeeDetailComponent employee={employee} />;
};
