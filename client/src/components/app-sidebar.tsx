"use client"

import {
  GalleryVerticalEnd,
  Plus
} from "lucide-react"
import * as React from "react"

import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Zero to hero LMS",
      logo: GalleryVerticalEnd,
      plan: "",
    },
  ],

  projects: [
    {
      name: "Add Course",
      url: "/dashboard/add-course",
      icon: Plus,
    },
    {
      name: "Add module",
      url: "/dashboard/add-module",
      icon: Plus,
    },
    {
      name: "Add lecture",
      url: "/dashboard/add-lecture",
      icon: Plus,
    },

  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
