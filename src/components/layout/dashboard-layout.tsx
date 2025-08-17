import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { Topbar } from "./topbar";
import { AppSidebar } from "../app-sidebar";

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Topbar />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
