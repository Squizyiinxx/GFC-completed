import { lazy } from "react"

const modules = import.meta.glob("../pages/**/*.tsx")

export const pageRoutes = Object.entries(modules).map(([path, loader]) => {
    let filePath = path.replace("../pages", "").replace(".tsx", "")
    filePath = filePath.replace(/\[([^\]]+)\]/g, ":$1")
    const segments = filePath.split("/")
    segments[segments.length - 1] = segments[segments.length - 1].replace(/^page/i, "")
    filePath = segments.join("/").toLowerCase()

    return {
        path: filePath || "/",
        component: lazy(loader as any),
    }
})
