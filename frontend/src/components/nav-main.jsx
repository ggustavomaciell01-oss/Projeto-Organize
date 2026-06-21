"use client";

import { CirclePlus } from "lucide-react";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">

        {/* Criar Tarefa */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Criar Tarefa">
              <Link
                href="/tarefas"
                className="flex items-center gap-2 min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90"
              >
                <CirclePlus className="size-4" />
                <span>Criar Tarefa</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Menu principal */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link
                  href={item.url}
                  className="flex items-center gap-2"
                >
                  {item.icon && <item.icon className="size-4" />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

      </SidebarGroupContent>
    </SidebarGroup>
  );
}