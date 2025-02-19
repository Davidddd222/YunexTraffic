import { Calendar, Home, Inbox, Search, Settings, FlaskConical, CalendarClock } from "lucide-react";
import { TbCarCrane } from 'react-icons/tb';
import { LiaStoreAltSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  { title: "Inicio", url: "/lab", icon: Home },
  { title: "Reparaciones", url: "/lab/reparaciones", icon: CalendarClock },
  { title: "Balance", url: "/lab/balance", icon: FlaskConical },
  { title: "General", url: "/lab/general", icon: IoDocumentsOutline },
  { title: "Ensamble", url: "/lab/ensamble", icon: LiaStoreAltSolid },
];

export function AppSidebar() {
  return (
    <Sidebar className="fixed left-0 top-[100px] w-[200px] h-[calc(100vh-64px)] bg-gray-100 shadow-lg">
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel>Laboratorio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
