import type { NavigationItem } from "../types/global";

export const sidebarNavigation: Readonly<NavigationItem[]> = [
    {
        name: "HTML",
        url: "/html",
        icon: 'html'
    },
    {
        name: "CSS",
        url: "/css",
        icon: "css"
    },
    {
        name: "JavaScript",
        url: "/js",
        icon: "js"
    },
    {
        name: "React",
        url: "/react",
        icon: "react"
    },
] as const;
