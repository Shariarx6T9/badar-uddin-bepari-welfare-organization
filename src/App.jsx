// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllMembers from "./pages/AllMembers";
import MemberDetails from "./pages/MemberDetails";
import Contact from "./pages/ContactForm";
import Revenue from "./pages/Revenue";
import NewsFeed from "./pages/NewsFeed";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/members",
    element: (
      <>
        <Header />
        <AllMembers />
        <Footer />
      </>
    ),
  },
  {
    path: "/member/:id",
    element: (
      <>
        <Header />
        <MemberDetails />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/revenue",
    element: (
      <>
        <Header />
        <Revenue />
        <Footer />
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <Header />
        <NewsFeed />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin-dashboard", // updated route for login redirect
    element: (
      <>
        <Header />
        <AdminDashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <PageNotFound />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
