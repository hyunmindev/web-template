import ClientComponent from '~/_components/ClientComponent';

function Index() {
  return (
    <>
      <header className="flex h-24 items-center justify-center">
        <h1 className="text-4xl">Next.js boilerplate</h1>
      </header>
      <main className="h-full w-full grow p-4">
        <ClientComponent />
        <ul>
          <li>Next.js</li>
          <li>Typescript</li>
        </ul>
      </main>
    </>
  );
}

export default Index;

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};
