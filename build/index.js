(()=>{"use strict";var e,t={464:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.blockEditor,r=window.wp.components,n=JSON.parse('{"UU":"buytiti-banner-envios/buytiti-banner"}');(0,e.registerBlockType)(n.UU,{edit:function({attributes:e,setAttributes:n}){return(0,t.createElement)("div",{className:"container block-class"},[0,1,2].map((i=>(0,t.createElement)("div",{className:"image-container"},(0,t.createElement)(a.MediaUpload,{key:i,onSelect:t=>{const a=[...e.images];a[i]={url:t.url,link:"http://localhost/wordpress/wp-admin/post.php?post=353&action=edit"},n({images:a})},type:"image",value:e.images[i],render:({open:a})=>((a,n)=>e.images[n]?(0,t.createElement)("img",{src:e.images[n].url,onClick:a,alt:"Imágen para el bloque",className:`image-${n}`}):(0,t.createElement)("div",{className:"button-container"},(0,t.createElement)(r.Button,{onClick:a,className:"button button-large"},"Escoge una imágen")))(a,i)})))))},save:function({attributes:e}){return(0,t.createElement)("div",{...a.useBlockProps.save(),className:"block-class"},e.images.map(((e,a)=>(0,t.createElement)("div",{className:"image-container"},(0,t.createElement)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("img",{src:e.url,alt:`Imagen para el bloque ${a+1}`,className:`image-${a}`}))))))}})}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,a,n,i)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,n,i]=e[m],l=!0,s=0;s<a.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(l=!1,i<o&&(o=i));if(l){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[a,n,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[o,l,s]=a,c=0;if(o.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var m=s(r)}for(t&&t(a);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(m)},a=globalThis.webpackChunkbuytiti_banner=globalThis.webpackChunkbuytiti_banner||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=r.O(void 0,[350],(()=>r(464)));n=r.O(n)})();