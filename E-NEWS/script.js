const apikey='3d2ef1fa3bf343158b237df352d34f5a'

const blogContainer=document.getElementById("blog-container");

async function fetchrandomnews(){
    try{
const apiUrl=`https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apikey=${apikey}`;
const response= await fetch(apiUrl)
const data= await response.json()
return data.articles;
    }
    catch(error){
        console.error("error fetching random news",error);
        return[];
    }

}


function displayblogs(articles){
    blogContainer.innerHTML="";
articles.forEach((article)=>{
    const card=document.createElement("div");
    card.classList.add("card");
const img=document.createElement("img");
img.src=article.urlToImage;
img.alt=article.title;
const title=document.createElement("h3");
title.textContent=article.title;
const description=document.createElement("p");
description.textContent=article.description;

card.appendChild(img);
card.appendChild(title);
card.appendChild(description);
blogContainer.appendChild(card);
});
}

(async()=>{
    try{
        const articles=await fetchrandomnews();
        displayblogs(articles)

    }
    catch(error){
        console.error("Error fetch random news",error);
    }
})();
