import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export function AdminPannel() {
  return (
    <SidebarProvider>
      <Sidebar>
      
        <SidebarHeader className="p-4">
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent className="p-4 space-y-4">
          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Main Menu
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Dashboard
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Car Rent
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Insights
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Reimburse
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Inbox
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Calendar
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Preferences
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Help & Center
            </Button>
          </SidebarGroup>

          <SidebarGroup>
            <Button variant="ghost" className="w-full justify-start">
              Dark Mode
            </Button>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 text-sm text-gray-500">
          © 2024 Your Company
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
