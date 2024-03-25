import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Home";
import Blog from "../Pagse/Blog";
import Blogs from "../Pagse/Blogs";
import Bookmark from "../Pagse/Bookmark";
import Content from "../Component/Content";
import Author from "../Component/Author";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>

            },
            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
            },
            {
                path: '/blog/:id',
                element: <Blogs></Blogs>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },

                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    }
                ]

            },
            {
                path: '/bookmarks',
                element: <Bookmark></Bookmark>
            }
        ]
    },


]
)