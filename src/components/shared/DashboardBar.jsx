import { Hospital, Home, Book, School, Settings, Menu } from "lucide-react";
import { Navigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserButton, useUser } from "@clerk/clerk-react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard/",
    icon: Menu,
  },
  {
    title: "Question",
    url: "/dashboard/question",
    icon: Book,
  },
  {
    title: "Medication and Treatment",
    url: "/dashboard/medication",
    icon: Hospital,
  },
  {
    title: "Status of Students",
    url: "/dashboard/status",
    icon: School,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="space-y-3 p-0">
        <Skeleton className="p-0 h-full w-[20rem] rounded-xl" />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <Sidebar
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "20rem",
      }}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>UniMind AI</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between p-1">
              <div className="flex items-center space-x-2">
                <UserButton />
                <div>
                  <p className="text-sm font-medium">{user.fullName}</p>
                </div>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
export default Dashboard;
