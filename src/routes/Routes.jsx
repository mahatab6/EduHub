import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Courses from "../pages/Courses";
import AddCourse from "../pages/AddCourse";
import ManageCourses from "../pages/ManageCourses";
import EnrolledCourses from "../pages/EnrolledCourses";
import CourseDetails from "../pages/CourseDetails";
import EditCourse from "../pages/EditCourse";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";

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
          element: <PrivateRouter><AddCourse/></PrivateRouter>,
        },
        {
          path: 'manage-courses',
          element: <PrivateRouter><ManageCourses/></PrivateRouter>,
        },
        {
          path: 'my-enrolled-courses',
          element: <PrivateRouter><EnrolledCourses/></PrivateRouter>,
        },
        {
          path: 'course-details/:id',
          element:<CourseDetails/>,
        },
        {
          path: 'edit-course/:id',
          element: <PrivateRouter><EditCourse/></PrivateRouter>,
        },
        {
          path: '*',
          element: <NotFound/>,
        }
    ]
  },
]);