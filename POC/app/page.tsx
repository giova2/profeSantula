import React from 'react' 

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={`/display`} >
        Go to Table
      </Link>
      
      <Link href={`/form`} >
        Go to Form
      </Link>
    </main>
  );
}
