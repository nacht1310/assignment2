import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog/Blog";
import Content from "./Content/Content";
import Edit from "./Edit/Edit";
import Upload from "./Upload/Upload";


export const route = createBrowserRouter([
    {
      path: "/",
      element: <Blog />
    },
    {
      path: "/new",
      element: <Upload />
    },
    {
      path: "/content/:contentId",
      element: <Content />
    },
    {
      path: "/edit/:contentId",
      element: <Edit />
    },
  ])