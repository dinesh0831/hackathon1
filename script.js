async function getUrl()
{
    const url= await fetch("https://api.github.com/users/octocat");
    const userurl=await url.json();
    getUserUrl(userurl);
    
}
function getUserUrl({avatar_url,login}){
    const header=document.createElement("div")
    header.setAttribute("class","header");
    header.innerHTML=`<div><img class= "logo" src="image\\github5.jpg"></div>
    <div> <img src="image\\github6.png" class="image"></div>`

    const info=document.createElement("div");
    info.setAttribute("class","container");
    info.innerHTML=`<div><h1>Repositaries</h1></div><div class="info"><img class="avatar" src="${avatar_url}" >
    <h2>${login}</h2>
    </div>
    `
    document.body.append(header,info)
} 
async function reposUrl()
{
    const repo=await fetch("https://api.github.com/users/octocat/repos")
    const detail=await repo.json();
    detail.forEach(element => getInfo(element));
  
 

}
function getInfo({html_url,name,stargazers_count,forks_count})
{
    const repos=document.createElement("div")
    repos.setAttribute("class","repos")
    repos.innerHTML=`<div class="title"><h3 class="topics"><a  href="${html_url}">${name}</a></h3>
    <h4><span class="iconify" data-icon="ion:star-half-sharp"></span>Stars:${stargazers_count}</h4>
    <h4><span class="iconify" data-icon="ion:git-branch"></span>Forks:${forks_count}</h4></div>`
    document.body.append(repos)
    
    
}
getUrl()
reposUrl()
