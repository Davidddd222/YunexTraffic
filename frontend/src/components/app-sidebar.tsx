import { Calendar, Home, Inbox, Search, Settings, FlaskConical, CalendarClock } from "lucide-react";
import { TbCarCrane } from 'react-icons/tb';
import { LiaStoreAltSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";


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
  {
    title: "Inicio",
    url: "#",
    icon: Home,
  },
  {
    title: "Reporte de hora",
    url: "#",
    icon: CalendarClock,
  },
  {
    title: "Laboratorio",
    url: "#",
    icon: FlaskConical,
  },
  {
    title: "EHS",
    url: "#",
    icon: IoDocumentsOutline,
  },
  {
    title: "Almacen",
    url: "#",
    icon: LiaStoreAltSolid,
  },
  {
    title: "Vehiculos",
    url: "#",
    icon: TbCarCrane,
  },
  {
    title: "Administrador",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
    </Sidebar>
  )
}