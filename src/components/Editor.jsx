import { useState } from "react";
import { Converter } from "showdown";
import ReactMde from "react-mde";

// workaround for Minified React error after Vite builds for production, thread:
// https://lightrun.com/answers/vitejs-vite-encountered-minified-react-error-in-the-production-environment
const RMDE = ReactMde.default ? ReactMde.default : ReactMde;
console.log(ReactMde);
console.log(typeof ReactMde);
console.log(RMDE);
console.log(typeof RMDE);

import "./Editor.css";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write");
    const converter = new Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    return (
        <section className="editor">
            <RMDE
                value={currentNote.content}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={95}
                heightUnits="vh"
            />
        </section>
    );
}
