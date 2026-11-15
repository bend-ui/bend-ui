import data from './data.json';
import styles from './reference.module.css';

type Row = (string | number | boolean | null | undefined)[];
function Table({
  headings,
  rows,
  label,
}: {
  headings: string[];
  rows: Row[];
  label: string;
}) {
  return (
    <div
      className={styles.tableWrap}
      tabIndex={0}
      role="region"
      aria-label={label}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell == null ? '—' : String(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function GeneratedTokens() {
  const t = data.tokens;
  return (
    <div className={styles.reference}>
      <p>
        Generated from the {t.theme} personality’s <code>{t.paletteName}</code>{' '}
        palette. Values are source values; semantic aliases can resolve
        differently in other themes.
      </p>
      <ul className={styles.swatches}>
        {t.palette.map((token) => (
          <li key={token.shade}>
            <div
              className={styles.swatch}
              style={{ backgroundColor: token.value }}
              aria-hidden="true"
            />
            <code>{token.shade}</code>
            <br />
            <code>{token.value}</code>
          </li>
        ))}
      </ul>
      <Table
        label="Stratus primary aliases"
        headings={['Semantic token', 'Source alias', 'Stratus value']}
        rows={t.aliases.map((a) => [a.name, a.value, a.resolved])}
      />
    </div>
  );
}
export function GeneratedComponent({ name }: { name: 'button' | 'select' }) {
  const item = data.components.find((c) => c.id === name);
  if (!item) return <p>Component metadata unavailable.</p>;
  return (
    <div className={styles.reference}>
      <p>
        {item.contract.description} This prototype contract describes Base UI
        v0; recipe and type sources remain authoritative.
      </p>
      {item.anatomyIssues.length > 0 && (
        <p className={styles.warning}>
          Anatomy mismatch: {item.anatomyIssues.join('; ')}
        </p>
      )}
      <h3>Anatomy</h3>
      <Table
        label={`${item.contract.name} anatomy`}
        headings={['Part', 'Kind', 'Recipe slot', 'Purpose']}
        rows={item.contract.anatomy.map((part) => [
          part.name,
          part.kind,
          'slot' in part
            ? `${part.recipe}.${part.slot}`
            : 'recipe' in part
              ? part.recipe
              : null,
          part.description,
        ])}
      />
      {item.recipes.map((recipe) => (
        <section key={recipe.name}>
          <h3>{recipe.name} recipe</h3>
          <p>Source recipe slots: {recipe.slots.join(', ')}.</p>
          <Table
            label={`${recipe.name} variants`}
            headings={[
              'Axis',
              'Source values',
              'Default',
              'Contract agreement',
            ]}
            rows={recipe.variants.map((v) => [
              v.axis,
              v.values.join(', '),
              v.defaultValue,
              v.mismatch ? 'Mismatch: review recipe and contract' : 'Matches',
            ])}
          />
          <Table
            label={`${recipe.name} states`}
            headings={['State', 'Selector', 'Slots', 'Contract agreement']}
            rows={recipe.states.map((state) => [
              state.name,
              state.selector,
              state.slots.join(', '),
              state.missingSlots.length
                ? `Missing recipe slots: ${state.missingSlots.join(', ')}`
                : 'Slots match',
            ])}
          />
        </section>
      ))}
      <h3>Selected public props</h3>
      <p>
        Types are resolved at generation from ButtonProps and
        SelectProps&lt;string&gt;, including inherited members. This is a
        selected reference, not the full upstream API. Missing entries require
        investigation.
      </p>
      <Table
        label={`${item.contract.name} selected props`}
        headings={['Prop', 'Type', 'Required', 'Description', 'Declared in']}
        rows={item.props.map((prop) => [
          prop.name,
          'type' in prop ? prop.type : 'Unresolved',
          'optional' in prop ? (!prop.optional ? 'Yes' : 'No') : 'Unknown',
          'description' in prop ? prop.description : '',
          'source' in prop ? prop.source : 'Unavailable',
        ])}
      />
    </div>
  );
}
