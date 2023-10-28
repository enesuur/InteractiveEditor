
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import './CodeEditor.css';

export default function CodeEditor(props) {
    const {
        editorTitle,
        editorName,
        codeType,
        onChange,
        value
    } = props;

    function handleCodeChange(value) {
        onChange(value);
    };

    return (
        <div className='editor-wrapper'>
            <h2 style={{color:'white',padding:'12px 0'}}>{editorTitle}</h2>
            <AceEditor
                mode={codeType}
                theme='monokai'
                onChange={handleCodeChange}
                name={editorName}
                value={value}
                editorProps={{ $blockScrolling: true }}
            >
            </AceEditor>
        </div>
    )
};