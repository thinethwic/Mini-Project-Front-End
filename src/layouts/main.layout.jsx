import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
export default MainLayout;
