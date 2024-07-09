import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail';
import Movie from './Movie';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/movie/:id",
      element: <Detail/>
    },
    {
      path: "/hello",
      element: <h1>Hello</h1>
    }
  ]);
return (
    <RouterProvider router={router}/>
  );
}

export default App;
