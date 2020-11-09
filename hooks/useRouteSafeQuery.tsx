import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';

/*
  Ensures that the previous query value will be available while the component
  performs the unmount animation. There was previously an issue
  with dynamic routing where the query would change before the component
  unmounted, causing problems when trying to use that query information
  in the component body.
*/

export default function useRouteSafeQuery(queryName: string) {
  const router = useRouter();

  const routerQuery = router.query[queryName];

  const prevQuery = useRef(routerQuery);

  const [query, setQuery] = useState(routerQuery);

  useEffect(() => {
    if (!prevQuery.current && routerQuery) {
      setQuery(routerQuery);
    }
    prevQuery.current = routerQuery;
  }, [routerQuery]);

  return query;
}
