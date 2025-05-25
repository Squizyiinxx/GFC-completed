import type { PageProps } from "@/types/global";

function memoize<T>(fn: () => T): () => T {
    let cache: T | undefined;
    return () => {
        if (cache === undefined) {
            cache = fn();
        }
        return cache;
    };
}

export const pageHTMLContent = memoize<PageProps>(() => ({
    title: 'HTML',
    icon: 'html',
    description: "A complete HTML challenge from GreatFrontend, with clean code and a design that adapts to any screen size. It's great for learning, building skills, or finding front-end project ideas."
}));

export const pageCSSContent = memoize<PageProps>(() => ({
    title: 'CSS',
    icon: 'css',
    description: "A complete CSS challenge from GreatFrontend, with clean, maintainable code and responsive design. Ideal for mastering styles, boosting skills, or finding inspiration for your next front-end project."
}));

export const pageJSContent = memoize<PageProps>(() => ({
    title: 'JS',
    icon: 'js',
    description: "A complete CSS challenge from GreatFrontend, with clean, maintainable code and responsive design. Ideal for mastering styles, boosting skills, or finding inspiration for your next front-end project."
}));

export const pageReactContent = memoize<PageProps>(() => ({
    title: 'React',
    icon: 'react',
    description: "A complete CSS challenge from GreatFrontend, with clean, maintainable code and responsive design. Ideal for mastering styles, boosting skills, or finding inspiration for your next front-end project."
}));
