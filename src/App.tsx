import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    return (
        <>
            <div>
                <h1>Szwagro.net</h1>
                <div>
                    <iframe
                        src="https://cdn.battlemetrics.com/b/horizontal500x80px/33671670.html?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700"
                        frameBorder={0}
                        style={{border: 0}}
                        name="mdxep"
                    />
                </div>
                <div>
                    <h2>Dołącz do Diskorda, wołamy na wspólne granie</h2>
                    <iframe
                        src="https://discord.com/widget?id=1375828439583428649&theme=dark"
                        width={350}
                        height={500}
                        allowTransparency="true"
                        frameBorder={0}
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    />
                </div>
                <div>
                    <blockquote
                        className="tiktok-embed"
                        cite="https://www.tiktok.com/@szwagro_net"
                        data-unique-id="szwagro_net"
                        data-embed-type="creator"
                        style={{maxWidth: 780, minWidth: 288}}
                    >
                        {" "}
                        <section>
                            {" "}
                            <a
                                target="_blank"
                                href="https://www.tiktok.com/@szwagro_net?refer=creator_embed"
                            >
                                @szwagro_net
                            </a>{" "}
                        </section>
                        {" "}
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default App
