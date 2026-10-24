export default function DeveloperArtwork() {
  return (
    <>
      <div className="editor-window">
        <div className="editor-titlebar">
          <span className="editor-controls"><i /><i /><i /></span>
          <span>portfolio / juan.tsx</span>
          <span className="editor-language">TSX</span>
        </div>
        <div className="editor-tabs"><span>✳ juan.tsx <small>×</small></span><span>app.css</span></div>
        <div className="editor-code">
          <div><b>01</b><code><span className="syntax-purple">const</span> developer = &#123;</code></div>
          <div><b>02</b><code>  name: <span className="syntax-green">&apos;Juan Romero&apos;</span>,</code></div>
          <div><b>03</b><code>  stack: [</code></div>
          <div><b>04</b><code>    <span className="syntax-green">&apos;React&apos;</span>, <span className="syntax-green">&apos;Next.js&apos;</span>,</code></div>
          <div><b>05</b><code>    <span className="syntax-green">&apos;TypeScript&apos;</span>, <span className="syntax-green">&apos;Java&apos;</span></code></div>
          <div><b>06</b><code>  ],</code></div>
          <div><b>07</b><code>  mindset: <span className="syntax-green">&apos;Sempre aprender&apos;</span></code></div>
          <div><b>08</b><code>&#125;;</code></div>
          <div><b>09</b><code> </code></div>
          <div><b>10</b><code><span className="syntax-purple">export default</span> <span className="syntax-accent">function</span> <span className="syntax-yellow">Build</span>() &#123;</code></div>
          <div><b>11</b><code>  <span className="syntax-purple">return</span> &lt;<span className="syntax-accent">NextIdea</span> /&gt;;<span className="editor-cursor" /></code></div>
          <div><b>12</b><code>&#125;</code></div>
        </div>
        <div className="editor-status"><span>⑂ main</span><span>UTF-8 · TypeScript React</span></div>
      </div>
      <div className="developer-badge"><span>&lt;/&gt;</span><div>IDEIAS EM CONSTRUÇÃO<small>Uma linha de cada vez.</small></div><i /></div>
    </>
  );
}
