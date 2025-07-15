import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/sign-in.page";
import SignUpPgae from "./pages/sign-up.page";
import RootLayout from "./layouts/root.layout";
import MainLayout from "./layouts/main.layout";
import AdminLayout from "./layouts/admin.layout";
import HomePage from "./pages/home/home.page";
import { ClerkProvider } from "@clerk/clerk-react";
import DashboardLayout from "./layouts/dashboard.layout";
import QuestionDashboardPage from "./pages/dashboard/dashboard.question.page";
import HomeDashboardPage from "./pages/dashboard/dashboard.page";
import MedicationPage from "./pages/dashboard/dashboard.medication.page";
import StudentStatusPage from "./pages/dashboard/dashboard.status.page";
import AdminQuestionCreatePage from "./admin/createQuestion/question-create.page";
import AdminQuestionPostsSection from "./admin/questionsPosts/admin-question-posts.page";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const route = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <HomeDashboardPage />,
          },
          {
            path: "question",
            element: <QuestionDashboardPage />,
          },
          {
            path: "?medication/:id",
            element: <MedicationPage />,
          },
          {
            path: "status",
            element: <StudentStatusPage />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          {
            path: "question",
            element: <AdminQuestionPostsSection />,
          },
          {
            path: "question/create",
            element: <AdminQuestionCreatePage />,
          },
        ],
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPgae />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <RouterProvider router={route} />
    </ClerkProvider>
  </React.StrictMode>
);
