const d=s=>{const i=s.trim().replace(/(.)<(?!\/)/g,`$1
<`).replace(/<\/[^>]+>/g,`$&
`).replace(/([^>])(<\/)/g,`$1
$2`).replace(/([^\s])\s*\/>/g,`$1
/>`).replace(/\n\s*\n/g,`
`).split(`
`).filter(n=>n.trim());let e=0;return`<details>
<summary>Hoe dit component is opgebouwd 🧩</summary>

\`\`\`tsx
${i.map(n=>{const t=n.trim();(t.startsWith("</")||t.startsWith("}"))&&(e=Math.max(0,e-1)),t==="/>"&&(e=Math.max(0,e-1));const a="	".repeat(e)+t,r=t.startsWith("<")&&t.endsWith("/>");return(t.startsWith("<")&&!t.startsWith("</")&&!r||t.endsWith("{")||t.endsWith("("))&&e++,(t.endsWith(")")||t.endsWith("})")||t.endsWith("};"))&&(e=Math.max(0,e-1)),a}).join(`
`)}
\`\`\`
</details>`};export{d as g};
