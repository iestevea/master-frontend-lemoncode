import { generatePath } from "react-router-dom";


interface SwitchRoutes {
  root: string;
  employees: string;
  detailEmployee: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  employees: "/list",
  detailEmployee: "/detail/:id"
}

interface Routes extends Omit<SwitchRoutes, 'detailEmployee'> {
  detailEmployee: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detailEmployee: (id: number) => generatePath(switchRoutes.detailEmployee, { id })
}