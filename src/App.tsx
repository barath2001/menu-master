import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, Error } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
