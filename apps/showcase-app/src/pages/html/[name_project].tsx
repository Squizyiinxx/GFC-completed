import { html } from "@/constant/project";
import { useParams } from "react-router-dom";
import { useProjectCodeLoader } from "@/hooks/useProjectCodeLoader";
import LayoutApp from "@/layout/LayoutApp";
import Icon from "@/assets/Icon";
import type { iconMap } from "@/types/interfaceSub";
import { lazy, memo, useMemo } from "react";

const CodeViewer = lazy(() => import("@/components/CodeViewer"));
const ButtonBack = lazy(() => import("@/components/ButtonBack"));

const PageProject = memo(() => {
    const { name_project } = useParams<{ name_project: string }>();
    const data = useMemo(() => html.find(item => item.slug === name_project), [name_project]);
    const {
        htmlCode,
        cssCode,
        loading,
        error,
    } = useProjectCodeLoader(data);

    if (!data) {
        return (
            <LayoutApp>
                <ButtonBack />
                <p className="text-red-500 text-center mt-8">Project tidak ditemukan</p>
            </LayoutApp>
        );
    }
    const codeBlocks = useMemo(() => [
            { type: "html" as const, code: htmlCode },
            { type: "css" as const, code: cssCode },
        ], [htmlCode, cssCode]);

    return (
        <LayoutApp>
            <ButtonBack />
            <div className="flex flex-col md:flex-row justify-between mt-6 gap-6">
                <div className="flex flex-col gap-2">
                    <h4 className="capitalize text-center md:text-start">{data.title}</h4>
                    <p className="text-sm text-slate-300 text-pretty text-center md:text-start">{data.description}</p>
                    <div className="flex justify-center md:justify-start gap-2">
                        <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 text-pretty flex items-center gap-1 group hover:underline">
                            See Live/Demo
                        </a>
                        <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 text-pretty flex items-center gap-1 group hover:text-[var(--accent-primary)]">
                            <Icon name="github" className="w-4 h-4" />
                            See in Github
                            <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                        </a>
                    </div>
                    <div className="flex justify-center md:justify-start gap-2 my-4">
                        {data.stacks?.map((stack, index) => (
                            <Icon key={index} name={stack as keyof typeof iconMap} className="w-8 h-8 text-[var(--accent-primary)]" />
                        ))}
                    </div>
                </div>
                <div className="flex items-center flex-col justify-center">
                    <img src={data.image} alt={data.title} decoding="async" loading="lazy" className="w-full h-full md:h-[300px] rounded-lg shadow-md object-cover" />
                </div>
            </div>
            <div className="mb-6">
                {codeBlocks.map(({ type, code }) => {
                    const isLoading = loading[type];
                    const err = error[type];
                    const language = type;

                    return (
                        <div key={type} className="pb-6">
                            <h5 className="font-semibold mb-2 uppercase">{type}</h5>
                            {isLoading ? (
                                <p>Memuat kode {type.toUpperCase()}...</p>
                            ) : err ? (
                                <p className="text-red-500">{err}</p>
                            ) : (
                                <CodeViewer code={code} language={language} />
                            )}
                        </div>
                    );
                })}
            </div>
        </LayoutApp>
    );
});

export default PageProject;