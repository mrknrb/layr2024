import * as monaco from 'monaco-editor';

export default function MonacoSolid(options: monaco.editorObject.IStandaloneEditorConstructionOptions) {

    let monacoElem = document.createElement("div")
    monacoElem.style.backgroundColor = "blue"
    monaco.editorObject.create(monacoElem, {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: 'javascript', automaticLayout: true
    });

    return monacoElem
}
