import marked from 'marked';
import React, { useEffect, useState } from 'react'

function Main() {


    const predefinido = `# Welcome to my React Markdown Previewer!

    \n## This is a sub-heading...
    \n### And here's some other cool stuff:
    
    \nHeres some code, \`<div></div>\`, between 2 backticks.
    \n
    \`\`\`
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`
    
    \nYou can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.
    
    \nThere's also [links](https://www.freecodecamp.com), and
    \n> Block Quotes!
    
    \nAnd if you want to get really crazy, even tables:
    
    \nWild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
\n
- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.
    
    
    \n1. And there are numbererd lists too.
    \n1. Use just 1s if you want!
    \n1. And last but not least, let's not forget embedded images:
    
    \n![GitHub Logo w/ Text](https://github.githubassets.com/images/modules/logos_page/Octocat.png)
    `;

    const [escribir, setEscribir] = useState(predefinido);


    useEffect(() => {
        document.getElementById("preview").innerHTML=marked(escribir)
    });


    const texto = (b) => setEscribir(b.target.value);


    return (
        <main>
            <section>
                <div>
                    <h1>Editor</h1>
                </div>
                <div>
                    <textarea id="editor" value={escribir} onChange={texto}></textarea>
                </div>
            </section>

            <section>
                <div>
                    <h1>Previsualizador</h1>
                </div>
                <div id="preview">

                </div>
            </section>
        </main>
    )
}

export default Main
