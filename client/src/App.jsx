import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HeroSection from "./pages/student/herosection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/courses";
import MyLearning from "./pages/student/myLearning";
import Profile from "./pages/student/profile";
import Sidebar from "./pages/admin/Sidebar";

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
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
        },

        // Admin Routes
        {
            path: "admin",
            element: <Sidebar />
        }
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
