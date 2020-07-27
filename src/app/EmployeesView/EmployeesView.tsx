import * as React from 'react';
import { CubesIcon } from '@patternfly/react-icons';
import { Avatar } from '@patternfly/react-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {
  PageSection,
  Title,
} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';

export interface ISupportProps {
  sampleProp?: string;
}

const EmployeesView: React.FunctionComponent<ISupportProps> = () => {

  const columns = [
    '',
    'Nombre',
    'Hábito',
    'Nº Ciclos / semana' // deliberately empty
  ];
  const rows = [[{
    title: <FontAwesomeIcon icon={faUserCircle} size="lg"/>
  }, 'Manolo López', 'three', '2'], ['one', 'two', 'three', 'four'], ['one', 'two', 'three', '8']]

  return (
    <PageSection>
      <Title headingLevel="h1" size="lg">
        Resultados semanaX
      </Title>
      <Title headingLevel="h1" size="lg">
        Gráfica
      </Title>
      <Title headingLevel="h1" size="lg">
        Buscador de empleados
      </Title>

      {/* Componente empleados */}
      <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    </PageSection>
  );
}

export { EmployeesView };
