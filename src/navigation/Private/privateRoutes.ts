import { ReactElement } from 'react';
import ReceitasScreen from '../../screens/Receitas';
import DetalhesReceitaScreen from '../../screens/DetalhesReceita';

export const PRIVATE_INITIAL_ROUTE_NAME = 'Hello';

const routes = {
  Receitas: {
    component: ReceitasScreen,
    name: 'Receitas',
  },
  DetalhesReceitas: {
    component: DetalhesReceitaScreen,
    name: 'DetalhesReceitas',
  }
};

export function getPrivateRoutes(stackScreen): Array<ReactElement> {
  return Object.keys(routes).map((screen, index) =>
    stackScreen(routes[screen], index)
  );
}
