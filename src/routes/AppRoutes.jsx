import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import Root from "../components/layouts/Root";
// import About from "../components/pages/About";
// import OurServices from "../components/pages/OurServices";
import Blog from "../components/pages/Blog";
// import Contact from "../components/pages/Contact";
import BlogDetails from "../components/layouts/blog/BlogDetails";
// import BecomeAPartner from "../components/pages/BecomeAPartner";
import universityDetails from "../components/layouts/university/UniversityDetails";
import University from "../components/pages/University";
// import Login from "../components/pages/Login";
// import Signup from "../components/pages/Signup";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <NotFound/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "blogs",
        Component: Blog,
      },
      {
        path: "blog/:slug",
        Component: BlogDetails,
      },
      {
        path: "university",
        Component: University,
      },
      {
        path: "university-details/:id",
        Component: universityDetails,
      },
    ],
  },
]);

export default AppRoutes;
