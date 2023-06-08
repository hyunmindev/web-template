'use client';

import { useState } from 'react';

function ClientComponent() {
  const [state, setState] = useState(0);

  return (
    <div className="flex">
      <button
        onClick={() => setState(state - 1)}
        type="button"
      >
        -
      </button>
      <h3>{state}</h3>
      <button
        onClick={() => setState(state + 1)}
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default ClientComponent;
