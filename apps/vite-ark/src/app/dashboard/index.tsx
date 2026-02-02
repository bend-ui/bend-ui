import { css } from '@particles/styled-system/css';
import { Container } from '@particles/styled-system/jsx';
import { Button, Card, Level, Nav } from '@particles/ark';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <div
      className={css({ h: 'screen', display: 'flex', flexDirection: 'row' })}
    >
      <div className={css({ p: 'sm', minW: 'xs' })}>
        <h1>Ski resort</h1>
        <Nav direction="vertical">
          <Nav.Link asChild>
            <Link to="/dashboard/clients">Clients</Link>
          </Nav.Link>
          <Nav.Link asChild>
            <Link to="/dashboard/profile">Profile</Link>
          </Nav.Link>
        </Nav>
      </div>
      <div
        className={css({
          flexGrow: 1,
        })}
      >
        <div className={css({ p: 'lg' })}>
          <Level>
            <div>Dashboard</div>
            <div>
              <Button>Create new</Button>
            </div>
          </Level>
        </div>
        <div className={css({ p: 'lg' })}>
          <Container>
            <div>Common tools</div>
            <Card>Active clients</Card>
            <Card>Recent activities</Card>
            <div>Slopes state</div>
            <div>Weather conditions</div>
            <div>Ski lessons</div>
          </Container>
        </div>
      </div>
    </div>
  );
};
