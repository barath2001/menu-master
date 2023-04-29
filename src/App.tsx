import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout, Menu, Queue, Error } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Menu /> },
        { path: "queue", element: <Queue /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
