export interface IconProps {
    className?: string,
    size?: React.HTMLProps<SVGSVGElement>['width'],
    color?: string,
    fill?: string,
    stroke?: string,
}


export interface NavigationItem {
  name: string;
  url: string;
  icon: IconMap;
}

export interface CodeSnippetLoader {
    code: () => Promise<string>;
    language: string;
}

export interface ProjectType {
    id?: number,
    title: string
    type?: string
    slug: string
    image: string
    description: string
    url?: string
    stacks?: string[]
    github?: string
    loadHTML?: CodeSnippetLoader
    loadCSS?: CodeSnippetLoader
    loadJS?: CodeSnippetLoader
    loadJSX?: CodeSnippetLoader
}

interface PageProps {
    title?:string,
    icon: IconMap,
    description?:string
    children?: React.ReactNode
}