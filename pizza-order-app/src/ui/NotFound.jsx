import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";
function NotFound() {
  const navigate = useNavigate();
  let error = useRouteError();

  return (
    <div className="flex h-screen items-center justify-center bg-yellow-100">
      <div className="container w-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl">Something went wrong 😢. Go back enter order no again.</h1>
        <p className="text-center" >(Order error status: {error.statusText}. Error Code: {error.status})</p>
        <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
      </div>
    </div>
  );
}

export default NotFound;
