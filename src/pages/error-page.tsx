import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="grid place-items-center px-5">
      <div className="space-y-5 max-w-7xl mx-auto text-center">
        <h1 className="font-bold ~text-xl/4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500 italic">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
