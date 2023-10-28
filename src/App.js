import { useEffect, useState } from 'react';
import CodeEditor from './components/CodeEditor';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {

  const [htmlCode, setHtmlCode] = useLocalStorage('html', '');
  const [cssCode, setCssCode] = useLocalStorage('css', '');
  const [jsCode, setJsCode] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `)

  }, [htmlCode, cssCode, jsCode])

  return (

    <main >
      <Navbar />
      <div className='editors-container'>
        <CodeEditor
          editorTitle='HTML'
          editorName='HTML'
          codeType='html'
          onChange={setHtmlCode}
          value={htmlCode}
          className='editor'>
        </CodeEditor>

        <CodeEditor
          editorTitle='CSS'
          editorName='CSS'
          codeType='css'
          onChange={setCssCode}
          value={cssCode}
          className='editor'>
        </CodeEditor>

        <CodeEditor
          editorTitle='Javascript'
          editorName='Javascript'
          codeType='javascript'
          onChange={setJsCode}
          value={jsCode}
          className='editor'
          >
        </CodeEditor>
      
      </div>

      <div className='preview'>
        <h2 style={{color:'#333',fontSize:'1.5rem',textAlign:'center'}}>Preview</h2>
        <iframe
          title='preview'
          srcDoc={srcDoc}
          width='100%'
          height='100%'
          frameBorder='0'
          sandbox='allow-scripts allow-same-origin'/>
      </div>
    </main>

  );
}

