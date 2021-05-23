import marked from 'marked';
import React, { useEffect, useState } from 'react'
import { predefinido } from '../data/Dato';


function Main() {

    const [escribir, setEscribir] = useState(predefinido);

    useEffect(() => {
        document.getElementById("preview").innerHTML = marked(escribir)
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
