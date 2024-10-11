import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="grid min-h-screen place-items-center px-5">
      <div className="mx-auto max-w-7xl text-center ~space-y-5/10">
        <h1 className="font-bold ~text-xl/4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="italic text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
