import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import AddCourse from "../pages/AddCourse";
import ManageCourses from "../pages/ManageCourses";
import EnrolledCourses from "../pages/EnrolledCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: 'login',
          Component: Login
        },
        {
          path: 'register',
          Component: Register
        },
        {
          path: 'courses',
          Component: Courses
        },
        {
          path: 'add-course',
          Component: AddCourse
        },
        {
          path: 'manage-courses',
          Component: ManageCourses
        },
        {
          path: 'my-enrolled-courses',
          Component: EnrolledCourses
        },
    ]
  },
]);