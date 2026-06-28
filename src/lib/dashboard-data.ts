import {
  FileText,
  MessagesSquare,
  GitPullRequest,
  Plug,
  UserPlus,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const account = {
  name: "Ada Lovelace",
  email: "ada@driftwave.com",
  initials: "AL",
  workspace: "Driftwave",
  plan: "Team",
};

export type Stat = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  hint: string;
};

export const stats: Stat[] = [
  { label: "Questions asked", value: "2,418", delta: "+18%", trend: "up", hint: "vs last week" },
  { label: "Avg. answer time", value: "0.9s", delta: "-12%", trend: "up", hint: "faster than last week" },
  { label: "Documents indexed", value: "48,902", delta: "+1,204", trend: "up", hint: "new this week" },
  { label: "Source coverage", value: "94%", delta: "+3%", trend: "up", hint: "of connected tools" },
];

export type Activity = {
  icon: LucideIcon;
  who: string;
  action: string;
  target: string;
  time: string;
  tint: string;
};

export const activity: Activity[] = [
  {
    icon: Sparkles,
    who: "Daniel Owusu",
    action: "asked",
    target: "What is our SLA for enterprise customers?",
    time: "2m ago",
    tint: "text-violet-300 bg-violet-300/10",
  },
  {
    icon: FileText,
    who: "Nexus",
    action: "indexed",
    target: "Q3 Board Deck.pdf from Google Drive",
    time: "11m ago",
    tint: "text-sky-300 bg-sky-300/10",
  },
  {
    icon: MessagesSquare,
    who: "Priya Nair",
    action: "asked",
    target: "Which service owns the billing webhook?",
    time: "34m ago",
    tint: "text-violet-300 bg-violet-300/10",
  },
  {
    icon: GitPullRequest,
    who: "Nexus",
    action: "synced",
    target: "142 pull requests from GitHub",
    time: "1h ago",
    tint: "text-emerald-300 bg-emerald-300/10",
  },
  {
    icon: UserPlus,
    who: "Maya Chen",
    action: "invited",
    target: "3 teammates to the workspace",
    time: "2h ago",
    tint: "text-amber-300 bg-amber-300/10",
  },
  {
    icon: Plug,
    who: "Maya Chen",
    action: "connected",
    target: "Zendesk as a new source",
    time: "Yesterday",
    tint: "text-rose-300 bg-rose-300/10",
  },
];

export type Document = {
  title: string;
  source: string;
  updated: string;
  chunks: number;
};

export const documents: Document[] = [
  { title: "Enterprise SLA & Support Policy", source: "Notion", updated: "2m ago", chunks: 34 },
  { title: "Q3 Board Deck", source: "Google Drive", updated: "11m ago", chunks: 58 },
  { title: "Billing Webhook Runbook", source: "GitHub", updated: "1h ago", chunks: 22 },
  { title: "Onboarding Checklist", source: "Confluence", updated: "3h ago", chunks: 16 },
  { title: "Refund & Cancellation Policy", source: "Notion", updated: "Yesterday", chunks: 19 },
];

export type Source = {
  name: string;
  src: string;
  status: "Synced" | "Syncing" | "Action needed";
  docs: string;
};

export const sources: Source[] = [
  { name: "Slack", src: "/logos/slack.svg", status: "Synced", docs: "12.4k messages" },
  { name: "Notion", src: "/logos/notion.svg", status: "Synced", docs: "3,210 pages" },
  { name: "Google Drive", src: "/logos/googledrive.svg", status: "Syncing", docs: "8,902 files" },
  { name: "GitHub", src: "/logos/github.svg", status: "Synced", docs: "142 repos" },
  { name: "Zendesk", src: "/logos/zendesk.svg", status: "Action needed", docs: "Reconnect" },
];
