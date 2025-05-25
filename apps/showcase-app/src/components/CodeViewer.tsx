import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';
import { memo, useCallback, useState } from 'react';


interface SupportedLanguages {
    language: "javascript" | "css" | "html" | "jsx";
}

const CodeViewer = ({ code, language = "jsx" }: { code: string, language?: SupportedLanguages["language"]}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Gagal menyalin:', err);
        }
    }, [code]);
    const extensions = {
        javascript: [javascript()],
        css: [css()],
        html: [html()],
        jsx: [javascript({ jsx: true })], 
    };

    return (
        <figure className="relative group my-2">
            <figcaption className="sr-only">Contoh kode dalam {language}</figcaption>
            <button
                type="button"
                aria-label="Salin kode"
                title="Salin kode"
                onClick={handleCopy}
                className="absolute z-10 right-4 top-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
            >
                {copied ? 'Tersalin!' : 'Salin kode'}
            </button>
            <div className="overflow-hidden group-hover:overflow-y-auto transition-all duration-300 max-h-80 rounded-xl">
                <CodeMirror
                    value={code}
                    height="200px"
                    extensions={extensions[language] || []} 
                    theme={oneDark}
                    readOnly={true} 
                    basicSetup={{
                        lineNumbers: true, 
                        highlightActiveLine: false, 
                        tabSize: 2, 
                    }}
                />
            </div>
        </figure>
    );
};

export default memo(CodeViewer);