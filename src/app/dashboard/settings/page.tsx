import type { Metadata } from "next";
import { Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { account } from "@/lib/dashboard-data";

export const metadata: Metadata = {
  title: "Settings · Nexus",
  description: "Manage your Nexus profile, workspace, and billing.",
};

const notifications = [
  {
    title: "Weekly digest",
    desc: "A Monday summary of what your team asked and learned.",
    on: true,
  },
  {
    title: "Answer mentions",
    desc: "Get notified when someone references your docs in an answer.",
    on: true,
  },
  {
    title: "Source sync failures",
    desc: "Alert me when a connected tool needs to be reconnected.",
    on: true,
  },
  {
    title: "Product updates",
    desc: "Occasional emails about new features and improvements.",
    on: false,
  },
];

function Card({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card/50">
      <div className="border-b border-border px-6 py-5">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="px-6 py-5">{children}</div>
      {footer ? (
        <div className="flex justify-end border-t border-border px-6 py-4">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

function SaveButton() {
  return (
    <button className="inline-flex h-9 items-center rounded-lg bg-brand px-4 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5">
      Save changes
    </button>
  );
}

export default function SettingsPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your profile, workspace, and billing.
        </p>
      </div>

      <Tabs defaultValue="profile" className="gap-6">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="workspace">Workspace</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {/* Profile */}
        <TabsContent value="profile">
          <Card
            title="Profile"
            description="This is how you appear to the rest of your workspace."
            footer={<SaveButton />}
          >
            <div className="flex items-center gap-4 pb-6">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-brand/70 to-violet-300/40 text-lg font-semibold text-background">
                {account.initials}
              </span>
              <div>
                <button className="inline-flex h-9 items-center rounded-lg border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                  Upload photo
                </button>
                <p className="mt-2 text-xs text-muted-foreground">
                  PNG or JPG, up to 2MB.
                </p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" defaultValue={account.name} className="h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={account.email}
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Head of People" className="h-10" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="tz">Timezone</Label>
                <Input
                  id="tz"
                  defaultValue="Pacific Time (GMT-7)"
                  className="h-10"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Workspace */}
        <TabsContent value="workspace">
          <Card
            title="Workspace"
            description="Settings that apply to everyone in the workspace."
            footer={<SaveButton />}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="ws-name">Workspace name</Label>
                <Input
                  id="ws-name"
                  defaultValue={account.workspace}
                  className="h-10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="ws-domain">Workspace URL</Label>
                <Input
                  id="ws-domain"
                  defaultValue="driftwave.nexus.app"
                  className="h-10"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col divide-y divide-border rounded-lg border border-border">
              <ToggleRow
                title="Allow members to invite teammates"
                desc="Anyone can invite. Turn off to restrict to admins."
                on
              />
              <ToggleRow
                title="Cite sources by default"
                desc="Always show the documents behind every answer."
                on
              />
              <ToggleRow
                title="Index private channels"
                desc="Include private Slack channels members already belong to."
              />
            </div>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card
            title="Notifications"
            description="Choose what Nexus emails you about."
            footer={<SaveButton />}
          >
            <div className="flex flex-col divide-y divide-border rounded-lg border border-border">
              {notifications.map((n) => (
                <ToggleRow
                  key={n.title}
                  title={n.title}
                  desc={n.desc}
                  on={n.on}
                />
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing">
          <div className="flex flex-col gap-6">
            <Card
              title="Plan"
              description="You are on the Team plan, billed annually."
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-foreground">
                    $10
                  </span>
                  <span className="text-sm text-muted-foreground">
                    / user / month
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex h-9 items-center rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                    Manage seats
                  </button>
                  <button className="inline-flex h-9 items-center rounded-lg bg-brand px-4 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5">
                    Upgrade plan
                  </button>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Seats used", value: "24 / 50" },
                  { label: "Questions this month", value: "9,420" },
                  { label: "Next invoice", value: "Jul 1, 2026" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border bg-background/40 p-4"
                  >
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-1 text-lg font-semibold text-foreground tabular-nums">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              title="Payment method"
              description="Used for your monthly subscription."
              footer={
                <button className="inline-flex h-9 items-center rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                  Update card
                </button>
              }
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-12 items-center justify-center rounded-md bg-white/10 font-mono text-xs font-semibold text-foreground">
                  VISA
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Visa ending in 4242
                  </p>
                  <p className="text-xs text-muted-foreground">Expires 08/27</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                  <Check className="size-3" />
                  Active
                </span>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  on,
}: {
  title: string;
  desc: string;
  on?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch defaultChecked={on} />
    </div>
  );
}
