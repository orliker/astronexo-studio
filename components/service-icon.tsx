import {
  AppWindow,
  Bot,
  Gamepad2,
  LayoutTemplate,
  Search,
  Smartphone,
  Users,
  Workflow,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const ICONS = {
  web: LayoutTemplate,
  app: AppWindow,
  mobile: Smartphone,
  flow: Workflow,
  bot: Bot,
  crm: Users,
  seo: Search,
  game: Gamepad2,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = ICONS[name];
  return <Icon aria-hidden="true" {...props} />;
}
