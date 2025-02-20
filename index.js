import{a as c,S as l,i}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d="48924645-79e9b00d1f962ef58b63a0249";async function u(s,t=1){const n=`https://pixabay.com/api/?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=24&page=${t}`;try{const r=await c.get(n);if(r.data.hits.length===0)throw new Error("No images found");return r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}function f(s){const t=document.querySelector(".gallery");t.innerHTML="",s.forEach(r=>{const e=`
      <div class="photo-card">
        <a href="${r.largeImageURL}" class="gallery__item">
          <img src="${r.webformatURL}" alt="${r.tags}" class="gallery__image" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </div>
    `;t.insertAdjacentHTML("beforeend",e)}),new l(".gallery a").refresh()}function g(s){i.error({title:"Error",message:s})}function m(){document.querySelector(".loading").classList.remove("hidden")}function h(){document.querySelector(".loading").classList.add("hidden")}function p(){i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"})}const y=document.querySelector("#search-form"),b=document.querySelector(".search-input");y.addEventListener("submit",async s=>{s.preventDefault();const t=b.value.trim();if(!t){alert("Please enter a search term.");return}try{m();const n=await u(t);f(n)}catch(n){n.message==="No images found"?p():g("Something went wrong! Please try again later.")}finally{h()}});
//# sourceMappingURL=index.js.map
