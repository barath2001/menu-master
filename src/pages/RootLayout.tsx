import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <h1>Root layout</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
