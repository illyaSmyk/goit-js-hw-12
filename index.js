import{a as S,S as q,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const R="14561738-ab29105e8f3333960184e35c7",B="https://pixabay.com/api/";async function f(r,e=1){const o=new URLSearchParams({key:R,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});try{return(await S.get(`${B}?${o}`)).data}catch(n){throw console.error("Error fetching images:",n),n}}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new q(".gallery a");function g(r){const e=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" width="360" height="200">
        </a>
        <div class="info">
          <div class="labels">
            <span>Likes</span>
            <span>Views</span>
            <span>Comments</span>
            <span>Downloads</span>
          </div>
          <div class="values">
            <span>${o.likes}</span>
            <span>${o.views}</span>
            <span>${o.comments}</span>
            <span>${o.downloads}</span>
          </div>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",e),M.refresh()}function P(){p.innerHTML=""}function y(){h.classList.add("is-visible")}function L(){h.classList.remove("is-visible")}function v(){m.classList.add("is-visible")}function d(){m.classList.remove("is-visible")}function $(){const r=document.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}const w={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more")};let c="",a=1,u=0;const b=15;w.form.addEventListener("submit",A);w.loadMoreBtn.addEventListener("click",E);async function A(r){if(r.preventDefault(),c=r.target.elements["search-text"].value.trim(),!c){i.warning({message:"Please enter a search query!",position:"topRight"});return}a=1,P(),d(),y();try{const e=await f(c,a);if(u=e.totalHits,e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),a*b<u&&v()}catch{i.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{L()}}async function E(){a+=1,d(),y();try{const r=await f(c,a);g(r.hits),$(),a*b>=u?(d(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{i.error({message:"An error occurred while fetching images.",position:"topRight"})}finally{L()}}
//# sourceMappingURL=index.js.map
