import React, { useEffect, useState } from "react";
import { Button, TextField, List } from "@material-ui/core";
import { EmployeeVm } from "./employees-list.vm";
import * as classes from "./employees-list.styles";
import { CardEmployeeComponent } from "./components";
import { Pagination } from "@material-ui/lab";
import { FetchOptions } from "./api";

interface Props {
  onFilter: (options: FetchOptions) => void;
  employees: EmployeeVm[];
  total: number;
}

export const EmployeesListComponent: React.FC<Props> = ({
  onFilter,
  employees,
  total,
}) => {
  const [filter, setFilter] = useState<string>("lemoncode");
  const [page, setPage] = useState<number>(1);

  return (
    <div className={classes.root}>
      <h2>Filtra por organización: </h2>
      <div className="filters-container">
        <TextField
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={() => {
            setPage(1);
            onFilter({ filter, page: 1 });
          }}
        >
          Filtrar
        </Button>
      </div>
      <List>
        {employees.map((employee: EmployeeVm) => (
          <CardEmployeeComponent employee={employee} key={employee.id} />
        ))}
      </List>
      <Pagination
        color="primary"
        variant="outlined"
        count={total}
        onChange={(e, page) => {
          setPage(page);
          onFilter({ filter, page });
        }}
        page={page}
      />
    </div>
  );
};
