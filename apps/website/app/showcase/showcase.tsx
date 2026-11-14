'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  Button,
  Dialog,
  Field,
  Input,
  Select,
  SurfaceProvider,
  Textarea,
} from '@bend-ui/base-ui';
import { cx } from '@bend-ui/styled-system/css';
import { styles } from './styles';

type Status = 'Active' | 'Review';
type Project = {
  id: number;
  name: string;
  client: string;
  notes: string;
  status: Status;
  due: string;
};
const options = [
  { label: 'Active', value: 'Active' },
  { label: 'Review', value: 'Review' },
];
const initialProjects: Project[] = [
  {
    id: 1,
    name: 'Spring campaign',
    client: 'Northstar',
    notes: 'Prepare the launch assets and review the final copy.',
    status: 'Active',
    due: '2026-12-04',
  },
  {
    id: 2,
    name: 'Editorial refresh',
    client: 'Morrow Studio',
    notes: 'Review the first round of layouts with the client.',
    status: 'Review',
    due: '2026-12-11',
  },
  {
    id: 3,
    name: 'Community stories',
    client: 'Fieldwork',
    notes: 'Collect interviews and confirm the publishing schedule.',
    status: 'Active',
    due: '2026-12-18',
  },
];

type Errors = { name?: string; client?: string };
function validate(form: HTMLFormElement): { values: FormData; errors: Errors } {
  const values = new FormData(form);
  const errors: Errors = {};
  if (!String(values.get('name') ?? '').trim())
    errors.name = 'Enter a project name.';
  if (!String(values.get('client') ?? '').trim())
    errors.client = 'Enter a client name.';
  return { values, errors };
}
function focusError(form: HTMLFormElement, errors: Errors) {
  const name = errors.name ? 'name' : errors.client ? 'client' : null;
  if (name) form.querySelector<HTMLInputElement>(`[name="${name}"]`)?.focus();
}
function ProjectFields({
  project,
  errors,
  prefix,
}: {
  project?: Project;
  errors: Errors;
  prefix: string;
}) {
  return (
    <>
      <Field name="name">
        <Field.Label>Project name</Field.Label>
        <Input
          defaultValue={project?.name}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${prefix}-name-error` : undefined}
          maxLength={80}
        />
        {errors.name && (
          <p role="alert" id={`${prefix}-name-error`} className={styles.error}>
            {errors.name}
          </p>
        )}
      </Field>
      <Field name="client">
        <Field.Label>Client</Field.Label>
        <Input
          defaultValue={project?.client}
          required
          aria-invalid={!!errors.client}
          aria-describedby={
            errors.client ? `${prefix}-client-error` : undefined
          }
          maxLength={80}
        />
        {errors.client && (
          <p
            role="alert"
            id={`${prefix}-client-error`}
            className={styles.error}
          >
            {errors.client}
          </p>
        )}
      </Field>
    </>
  );
}

export function Showcase() {
  const [projects, setProjects] = useState(initialProjects);
  const [selected, setSelected] = useState(1);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState(
    'Changes are kept in this page session.',
  );
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [newErrors, setNewErrors] = useState<Errors>({});
  const project = projects.find((item) => item.id === selected) ?? projects[0];
  const [status, setStatus] = useState<Status>(project.status);
  const filtered = projects.filter((item) =>
    `${item.name} ${item.client} ${item.status}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const submitDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { values, errors: next } = validate(form);
    setErrors(next);
    if (Object.keys(next).length) {
      focusError(form, next);
      return;
    }
    const name = String(values.get('name')).trim();
    setProjects((current) =>
      current.map((item) =>
        item.id === project.id
          ? {
              ...item,
              name,
              client: String(values.get('client')).trim(),
              notes: String(values.get('notes') ?? ''),
              due: String(values.get('due') ?? ''),
              status,
            }
          : item,
      ),
    );
    setMessage(`Saved ${name}.`);
  };
  return (
    <SurfaceProvider>
      <div className={cx(styles.page, styles.focusScope)}>
        <header className={styles.header}>
          <div>
            <Link href="/docs" className={styles.back}>
              ← Bend UI docs
            </Link>
            <p className={styles.eyebrow}>SAMPLE APPLICATION</p>
            <h1 className={styles.title}>Studio workspace</h1>
            <p>Keep client work moving, all in one place.</p>
          </div>
          <Dialog.Root
            open={open}
            onOpenChange={(value) => {
              setOpen(value);
              if (!value) setNewErrors({});
            }}
          >
            <Dialog.Trigger>New project</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className={styles.backdrop} />
              <Dialog.Positioner className={styles.positioner}>
                <Dialog.Popup className={cx(styles.dialog, styles.focusScope)}>
                  <Dialog.Title>New project</Dialog.Title>
                  <Dialog.Description>
                    Add a project to this session’s workspace.
                  </Dialog.Description>
                  <form
                    className={styles.form}
                    noValidate
                    onSubmit={(event) => {
                      event.preventDefault();
                      const form = event.currentTarget;
                      const { values, errors: next } = validate(form);
                      setNewErrors(next);
                      if (Object.keys(next).length) {
                        focusError(form, next);
                        return;
                      }
                      const name = String(values.get('name')).trim();
                      const item: Project = {
                        id: Date.now(),
                        name,
                        client: String(values.get('client')).trim(),
                        notes: '',
                        status: 'Active',
                        due: '',
                      };
                      setProjects((current) => [...current, item]);
                      setSelected(item.id);
                      setStatus(item.status);
                      setQuery('');
                      setErrors({});
                      setMessage(`Added ${name}.`);
                      setOpen(false);
                    }}
                  >
                    <ProjectFields errors={newErrors} prefix="new" />
                    <div className={styles.actions}>
                      <Dialog.Close className={styles.cancel}>
                        Cancel
                      </Dialog.Close>
                      <Button type="submit">Add project</Button>
                    </div>
                  </form>
                </Dialog.Popup>
              </Dialog.Positioner>
            </Dialog.Portal>
          </Dialog.Root>
        </header>
        <main className={styles.grid}>
          <section className={styles.panel} aria-labelledby="projects-heading">
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.eyebrow}>YOUR WORK</p>
                <h2 id="projects-heading" className={styles.heading}>
                  Projects
                </h2>
              </div>
              <span>{projects.length} total</span>
            </div>
            <label className={styles.label} htmlFor="project-search">
              Filter projects
            </label>
            <Input
              id="project-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ul className={styles.list}>
              {filtered.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={styles.project}
                    aria-pressed={item.id === project.id}
                    onClick={() => {
                      setSelected(item.id);
                      setStatus(item.status);
                      setErrors({});
                      setMessage(`Selected ${item.name}.`);
                    }}
                  >
                    <span className={styles.projectText}>
                      <strong>{item.name}</strong>
                      <small className={styles.small}>{item.client}</small>
                    </span>
                    <span className={styles.badge}>{item.status}</span>
                  </button>
                </li>
              ))}
            </ul>
            {filtered.length === 0 && <p>No projects match “{query}”.</p>}
          </section>
          <section className={styles.panel} aria-labelledby="details-heading">
            <p className={styles.eyebrow}>PROJECT DETAILS</p>
            <h2 id="details-heading" className={styles.heading}>
              {project.name}
            </h2>
            <p>Edit the details below, then save your changes.</p>
            <form
              key={project.id}
              className={styles.form}
              noValidate
              onSubmit={submitDetails}
              onReset={() => {
                setStatus(project.status);
                setErrors({});
                setMessage('Changes discarded.');
              }}
            >
              <ProjectFields project={project} errors={errors} prefix="edit" />
              <Field name="due">
                <Field.Label>Due date</Field.Label>
                <Input type="date" defaultValue={project.due} />
              </Field>
              <div>
                <label className={styles.label} id="status-label">
                  Status
                </label>
                <Select.Root
                  items={options}
                  value={status}
                  onValueChange={(value) => {
                    if (value) setStatus(value as Status);
                  }}
                >
                  <Select.Trigger aria-labelledby="status-label">
                    <Select.Value />
                    <Select.Icon aria-hidden="true">⌄</Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Positioner
                      alignItemWithTrigger={false}
                      sideOffset={6}
                    >
                      <Select.Popup className={styles.focusScope}>
                        <Select.List>
                          {options.map((item) => (
                            <Select.Item
                              key={item.value}
                              value={item.value}
                              label={item.label}
                            >
                              <Select.ItemText>{item.label}</Select.ItemText>
                              <Select.ItemIndicator aria-hidden="true">
                                ✓
                              </Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.List>
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
              </div>
              <Field name="notes">
                <Field.Label>Notes</Field.Label>
                <Field.Description>
                  What should the team know next?
                </Field.Description>
                <Textarea rows={5} defaultValue={project.notes} />
              </Field>
              <div className={styles.actions}>
                <Button type="reset" variant="tertiary">
                  Discard changes
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </form>
            <p role="status" className={styles.status}>
              {message}
            </p>
          </section>
        </main>
        <footer className={styles.footer}>
          A local example built with Bend UI. No data is sent or stored after
          this page closes.
        </footer>
      </div>
    </SurfaceProvider>
  );
}
