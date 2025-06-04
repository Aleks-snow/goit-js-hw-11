import{a as p,S as m,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50678638-8abf3cfccb9b2132419321a6d",g="https://pixabay.com/api/";async function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a");function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a href="${s}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async i=>{i.preventDefault();const r=v.value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight",timeout:4e3,color:"yellow"});return}S(),w();try{const o=await h(r);if(o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,color:"red"});return}L(o.hits)}catch(o){a.error({message:"Something went wrong! Please try again later.",position:"topRight",timeout:4e3}),console.error(o)}finally{q()}});
//# sourceMappingURL=index.js.map
