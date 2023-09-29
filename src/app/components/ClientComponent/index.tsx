'use client';

import { useCallback, useState } from 'react';

function ClientComponent() {
  const [state, setState] = useState(0);

  const minus = useCallback(() => {
    setState((previousState) => previousState - 1);
  }, []);

  const plus = useCallback(() => {
    setState((previousState) => previousState - 1);
  }, []);

  return (
    <div className="flex">
      <button
        onClick={minus}
        type="button"
      >
        -
      </button>
      <h3>{state}</h3>
      <button
        onClick={plus}
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default ClientComponent;
