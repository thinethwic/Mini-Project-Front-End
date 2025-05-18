import Dashboard from "@/components/shared/DashboardBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Dashboard />
      <main>
        <SidebarTrigger />
        {children}
      </main>
      <Outlet />
    </SidebarProvider>
  );
}
export default DashboardLayout;
