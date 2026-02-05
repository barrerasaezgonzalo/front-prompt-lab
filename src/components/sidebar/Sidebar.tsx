"use client";

import { NewPromptButton } from "@/components/sidebar/NewPromptButton";
import { PromptFilters } from "@/components/sidebar/PromptFilters";
import { PromptList } from "@/components/sidebar/PromptList";
import { ResourcesMenu } from "@/components/sidebar/ResourcesMenu";
import { SidebarFooter } from "@/components/sidebar/SidebarFooter";
import { SidebarHeader } from "@/components/sidebar/SidebarHeader";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-zinc-900 border-r border-zinc-800 p-6">
      <SidebarHeader />
      <NewPromptButton />

      <nav className="flex flex-col space-y-4">
        <PromptFilters />
        <PromptList />
        <ResourcesMenu />
      </nav>

      <SidebarFooter />
    </aside>
  );
}
