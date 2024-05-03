import React from 'react' 

import { entityTable } from '../lib/ENTITIES'
import EntityTable from '../ui/EntityTable';
import Link from 'next/link';

export default function Display() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <EntityTable entity={entityTable}/>
    </main>
    
  );
}
