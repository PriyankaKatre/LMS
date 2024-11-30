import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HeroSection from "./pages/student/herosection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/courses";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;
