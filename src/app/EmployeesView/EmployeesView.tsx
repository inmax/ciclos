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
import {
  BellIcon,
  CodeBranchIcon,
  CodeIcon,
  CogIcon,
  CubeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FilterIcon,
  SearchIcon,
  TimesCircleIcon
} from '@patternfly/react-icons';
export interface ISupportProps {
  sampleProp?: string;
}

const EmployeesView: React.FunctionComponent<ISupportProps> = () => {

  const columns = [
    '',
    'Nombre',
    'Hábito',
    'Nº Ciclos / semana' // deliberately empty<FontAwesomeIcon icon={faUserCircle} size="lg"/>
  ];
  const rows = [[{
    title: <Avatar src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="avatar"></Avatar>
  }, 'Manolo López', 'three', '2'], [{
    title: <Avatar src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="avatar"></Avatar>
  }, 'María Martinez', 'three', 'four'], [{
    title: <Avatar src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="avatar"></Avatar>
  }, 'María Martinez', 'three', '8']]

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
