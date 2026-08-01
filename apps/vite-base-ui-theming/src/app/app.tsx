import { Badge, Button, Card, Input, Tabs } from '@bend-ui/base-ui';
import { data, resortStats } from 'demo-data';
import { useEffect, useState } from 'react';
import './index.css';

declare const __CUSTOMIZATION_LEVEL__: 'Level 2' | 'Level 3';

const themes = [
  'default',
  'stratus',
  'solstice',
  'volt',
  'nebula',
  'canopy',
  'aster',
] as const;

export function App() {
  const [theme, setTheme] = useState<(typeof themes)[number]>('default');

  useEffect(() => {
    document.documentElement.dataset.pandaTheme = theme;
  }, [theme]);

  return (
    <main className="gallery-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Consumer customization harness</p>
          <h1>Same components. A different visual language.</h1>
          <p className="hero-copy">
            This gallery consumes <code>@bend-ui/base-ui</code> unchanged while
            the application owns every design decision in its Panda config.
          </p>
        </div>
        <Badge tone="info">{__CUSTOMIZATION_LEVEL__} build</Badge>
      </header>

      <section className="theme-strip" aria-labelledby="theme-heading">
        <div>
          <p className="eyebrow" id="theme-heading">
            Bundled theme swap
          </p>
          <p className="theme-note">Active theme: {theme}</p>
        </div>
        <div className="button-row">
          {themes.map((option) => (
            <Button
              key={option}
              size="sm"
              variant={option === theme ? 'primary' : 'secondary'}
              onClick={() => setTheme(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </section>

      <section
        className="gallery-grid"
        aria-label="Customized component gallery"
      >
        <Card>
          <Card.Header>
            <Card.Title>Actions and status</Card.Title>
            <Card.Description>
              Recipe variants retain the Base UI behavior contract.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <div className="button-row">
              <Button variant="primary">Create report</Button>
              <Button variant="secondary">Save draft</Button>
              <Button variant="danger">Archive</Button>
            </div>
            <div className="badge-row">
              <Badge tone="success">47 runs open</Badge>
              <Badge tone="warning">Wind watch</Badge>
              <Badge tone="danger">2 lifts held</Badge>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Operational snapshot</Card.Title>
            <Card.Description>
              Canonical fixtures come from the adapter-neutral demo-data
              library.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <dl className="metric-grid">
              <div>
                <dt>Open runs</dt>
                <dd>{resortStats.openRuns}</dd>
              </div>
              <div>
                <dt>Snow base</dt>
                <dd>{resortStats.snowBase}</dd>
              </div>
              <div>
                <dt>Patients</dt>
                <dd>{data.patients.length}</dd>
              </div>
            </dl>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Form controls</Card.Title>
            <Card.Description>
              Focus, disabled, and pressed states still come from Base UI.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <label className="field-label" htmlFor="gallery-search">
              Find a patient
            </label>
            <Input id="gallery-search" placeholder="Search by name" />
            <div className="button-row compact-row">
              <Button variant="primary">Search</Button>
              <Button isDisabled>Unavailable</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Content navigation</Card.Title>
            <Card.Description>
              Compound parts render with the same adapter composition.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Tabs.Root defaultValue="overview">
              <Tabs.List aria-label="Gallery views">
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="activity">Activity</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="overview">
                Today’s operational summary is ready for review.
              </Tabs.Panel>
              <Tabs.Panel value="activity">
                Three scenario records changed since the last sync.
              </Tabs.Panel>
            </Tabs.Root>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}

export default App;
