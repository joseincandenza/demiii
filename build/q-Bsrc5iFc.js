import{F as w,G as E,H as b}from"./q-C5ZLmo6y.js";import{u as x,j,y as q,z as T}from"./q-CN9plBnq.js";import"./q-uemlvruI.js";const z=async function(...s){const[d,p,i,y,a]=x(),n=s.length>0&&s[0]instanceof AbortSignal?s.shift():void 0;{const r=j(),h=s.map(t=>t instanceof SubmitEvent&&t.target instanceof HTMLFormElement?new FormData(t.target):t instanceof Event||t instanceof Node?null:t),c=a.getHash();let l="";const f={...d,method:i,headers:{...p,"Content-Type":"application/qwik-json","X-QRL":c},signal:n},u=await q([a,...h]);i==="GET"?l+=`&${b}=${encodeURIComponent(u)}`:f.body=u;const e=await fetch(`${y}?${w}=${c}${l}`,f),o=e.headers.get("Content-Type");if(e.ok&&o==="text/qwik-json-stream"&&e.body)return async function*(){try{for await(const t of E(e.body,r??document.documentElement,n))yield t}finally{n!=null&&n.aborted||await e.body.cancel()}}();if(o==="application/qwik-json"){const t=await e.text(),m=await T(t,r??document.documentElement);if(e.status===500)throw m;return m}else if(o==="application/json"){const t=await e.json();if(e.status===500)throw t;return t}else if(o==="text/plain"||o==="text/html"){const t=await e.text();if(e.status===500)throw t;return t}}};export{z as s_SGytLJ8uq8I};
