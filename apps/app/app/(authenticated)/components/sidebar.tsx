'use client';

import { UserButton } from '@repo/auth/client';
import { ModeToggle } from '@repo/design-system/components/mode-toggle';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@repo/design-system/components/ui/sidebar';
import { cn } from '@repo/design-system/lib/utils';
import { NotificationsTrigger } from '@repo/notifications/components/trigger';
import { HomeIcon, ServerIcon, ShieldIcon } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type GlobalSidebarProperties = {
  readonly children: ReactNode;
};

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: 'Residential Proxies',
      url: '/residential-proxies',
      icon: ServerIcon,
    },
    {
      title: 'Private Proxies',
      url: '/private-proxies',
      icon: ShieldIcon,
    },
  ],
};

export const GlobalSidebar = ({ children }: GlobalSidebarProperties) => {
  const sidebar = useSidebar();

  return (
    <>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center gap-2 px-1 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Ping Customer Logo"
                  >
                    <title>Ping Customer Logo</title>
                    <path
                      clipRule="evenodd"
                      d="m48 0h-48l48 48h-48l48 48h48l-48-48h48z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className={cn(
                    'font-semibold text-lg',
                    !sidebar.open && 'hidden'
                  )}
                >
                  Ping Customer
                </span>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <UserButton
                showName
                appearance={{
                  elements: {
                    rootBox: 'flex overflow-hidden w-full',
                    userButtonBox: 'flex-row-reverse',
                    userButtonOuterIdentifier: 'truncate pl-0',
                  },
                }}
              />
              <div className="flex shrink-0 items-center gap-px">
                <ModeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  asChild
                >
                  <div className="h-4 w-4">
                    <NotificationsTrigger />
                  </div>
                </Button>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </>
  );
};
