import type { ProjectType } from "@/types/global";

export const htmlCodeModules = import.meta.glob(
    '#challenges/html/**/*.html',
    { query: '?raw', import: 'default' }
);

export const cssCodeModules = import.meta.glob(
    '#challenges/html/**/css/*.css',
    { query: '?raw', import: 'default' }
);

export function getAsyncCodeLoader(
    path: string,
    modules: Record<string, () => Promise<unknown>>
): () => Promise<string> {
    const foundKey = Object.keys(modules).find((key) => key.endsWith(path));
    if (!foundKey) {
        console.warn(`Path "${path}" not found in module keys:`, Object.keys(modules));
        return () => Promise.resolve(`// Code not found for path: ${path}`);
    }

    return modules[foundKey] as () => Promise<string>;
}
  

export const html: ProjectType[] = [
    {
        id: 1,
        title: "Testimonial Card",
        type: "html",
        slug: 'testimonial-card',
        image: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/render/image/public/projects-images/testimonial-card/cover.jpg",
        description: "Build a simple user testimonial card with key testimonial elements",
        url: "https://squizyiinxx.github.io/GFC-completed/challenges/html/testimonial-card/",
        github: "https://github.com/squizyiinxx/GFC-completed/tree/main/challenges/html/testimonial-card",
        stacks: ["html", "css", 'tailwinds'],
        loadHTML: {
            code: getAsyncCodeLoader("testimonial-card/index.html", htmlCodeModules),
            language: "html",
        },
        loadCSS: {
            code: getAsyncCodeLoader("testimonial-card/css/style.css", cssCodeModules),
            language: "css",
        }
    }
]