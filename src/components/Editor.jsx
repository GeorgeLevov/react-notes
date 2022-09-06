import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

import "./Editor.css";
import "react-mde/lib/styles/css/react-mde-all.css";

export function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write");

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    return (
        <section className="editor">
            <ReactMde
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
