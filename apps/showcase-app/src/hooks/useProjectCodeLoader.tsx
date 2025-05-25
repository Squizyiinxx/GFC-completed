import { useEffect, useState } from "react";

type CodeType = "html" | "css" | "js" | "jsx";

type CodeLoader = {
    code: () => Promise<string>;
    language?: string;
};

type LoadableProject = {
    loadHTML?: CodeLoader;
    loadCSS?: CodeLoader;
    loadJS?: CodeLoader;
    loadJSX?: CodeLoader;
};

export function useProjectCodeLoader(data?: LoadableProject) {
    const [htmlCode, setHtmlCode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [jsCode, setJsCode] = useState("");
    const [jsxCode, setJsxCode] = useState("");

    const [loading, setLoading] = useState<Record<CodeType, boolean>>({
        html: false,
        css: false,
        js: false,
        jsx: false,
    });

    const [error, setError] = useState<Record<CodeType, string | null>>({
        html: null,
        css: null,
        js: null,
        jsx: null,
    });

    useEffect(() => {
        if (!data) return;

        const config: Record<
            CodeType,
            {
                loader?: () => Promise<string>;
                fallback: string;
                setter: (code: string) => void;
            }
        > = {
            html: {
                loader: data.loadHTML?.code,
                fallback: "<!-- Failed to load HTML code -->",
                setter: setHtmlCode,
            },
            css: {
                loader: data.loadCSS?.code,
                fallback: "/* Failed to load CSS code */",
                setter: setCssCode,
            },
            js: {
                loader: data.loadJS?.code,
                fallback: "// Failed to load JavaScript code",
                setter: setJsCode,
            },
            jsx: {
                loader: data.loadJSX?.code,
                fallback: "// Failed to load React code",
                setter: setJsxCode,
            },
        };

        (Object.entries(config) as [CodeType, typeof config["html"]][]).forEach(
            ([type, { loader, fallback, setter }]) => {
                if (!loader) return;

                setLoading((prev) => ({ ...prev, [type]: true }));
                setError((prev) => ({ ...prev, [type]: null }));

                loader()
                    .then((code) => setter(code))
                    .catch(() => {
                        setter(fallback);
                        setError((prev) => ({
                            ...prev,
                            [type]: `Failed to load ${type.toUpperCase()} code`,
                        }));
                    })
                    .finally(() => {
                        setLoading((prev) => ({ ...prev, [type]: false }));
                    });
            }
        );
    }, [data]);

    return {
        htmlCode,
        cssCode,
        jsCode,
        jsxCode,
        loading,
        error,
    };
}
