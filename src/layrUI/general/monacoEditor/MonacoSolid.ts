import * as monaco from 'monaco-editor';

export default function MonacoSolid(options: monaco.editor.IStandaloneEditorConstructionOptions) {

    let monacoElem = document.createElement("div")
    monacoElem.style.backgroundColor = "blue"
    monaco.editor.create(monacoElem, {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: 'javascript', automaticLayout: true
    });

    return monacoElem
}
