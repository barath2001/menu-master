import { useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError();
  return <p>{JSON.stringify(error)}</p>;
}
