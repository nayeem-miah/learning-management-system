/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import {
  AlignLeftIcon,
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
import { GetUser } from "./utils/getMe"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<any>(null);
  // console.log(user);

  React.useEffect(() => {
    const fetchUser = async () => {
      const data = await GetUser()
      setUser(data)
    }
    fetchUser()
  }, [])

  const data = {
    user: {
      name: user?.name,
      email: user?.email,
      avatar: user?.imageUrl || "/avatars/shadcn.jpg",
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
      {
        name: "All course",
        url: "/dashboard/get-course",
        icon: AlignLeftIcon,
      },
      {
        name: "all module",
        url: "/dashboard/get-module",
        icon: AlignLeftIcon,
      },
      {
        name: "all lecture",
        url: "/dashboard/get-lecture",
        icon: AlignLeftIcon,
      },

    ],

  }

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
