import React from 'react' 

import { entityForm } from '../lib/ENTITIES'
import EntityForm from '../ui/EntityForm';

export default function Form() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <EntityForm entity={entityForm} />
    </main>
  );
}
