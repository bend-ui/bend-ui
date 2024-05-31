import { matchSorter } from 'match-sorter';
import { useMemo, useState } from 'react';
import { HighlightMatches } from './highlight-matches';
import { Search } from './search';
import type { Item as NormalItem } from 'nextra/normalize-pages';
import type { ReactElement } from 'react';
import type { SearchResult } from '../types';

export function MatchSorterSearch({
  className,
  directories,
}: {
  className?: string;
  directories: NormalItem[];
}): ReactElement {
  const [search, setSearch] = useState('');
  const results = useMemo<SearchResult[]>(
    () =>
      // Will need to scrape all the headers from each page and search through them here
      // (similar to what we already do to render the hash links in sidebar)
      // We could also try to search the entire string text from each page
      search
        ? matchSorter(directories, search, { keys: ['title'] }).map(
            ({ route, title }) => ({
              id: route + title,
              route,
              children: <HighlightMatches match={search} value={title} />,
            }),
          )
        : [],
    [search, directories],
  );

  return (
    <Search
      className={className}
      onChange={setSearch}
      overlayClassName="nx-w-full"
      results={results}
      value={search}
    />
  );
}
