import {
  LayoutDashboard,
  Folder,
  BookOpen,
  Tags,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Collections",
    href: "/collections",
    icon: Folder,
  },
  {
    label: "Resources",
    href: "/resources",
    icon: BookOpen,
  },
  {
    label: "Tags",
    href: "/tags",
    icon: Tags,
  },
];