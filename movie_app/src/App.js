import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/movie/:id",
      element: <Detail />
    },
    {
      path: "/hello",
      element: <h1>Hello</h1>
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
