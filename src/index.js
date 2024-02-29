import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Layout from "./components/Layout";
import "./index.css";

import Home from "./components/home/Home.js";
import Chats from "./components/chats/Chats.js";
import Chat from "./components/chat/Chat.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch(
            "https://app-fps7xsgziq-uc.a.run.app/api/users"
          );
          const users = await res.json();
          return defer({ users });
        },
        element: <Home />,
      },
      {
        path: "chats",
        loader: async () => {
          const res = await fetch(
            "https://app-fps7xsgziq-uc.a.run.app/api/chats"
          );
          const chats = await res.json();
          return defer({ chats });
        },
        element: <Chats />,
      },
      {
        path: "chat/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://app-fps7xsgziq-uc.a.run.app/api/chat/${params.id}`
          );
          const chat = await res.json();
          return defer({ chat });
        },
        element: <Chat />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
