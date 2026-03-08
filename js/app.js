
let posts=[
{title:"Weekend in Paris",text:"A guide to exploring Paris cafes, museums and streets."},
{title:"Hiking the Alps",text:"Experience breathtaking mountain views and fresh air."}
]

let postsDiv=document.getElementById("posts")

function renderPosts(){
postsDiv.innerHTML=""
posts.forEach(p=>{
let div=document.createElement("div")
div.className="post"
div.innerHTML=`<h3>${p.title}</h3><p>${p.text}</p>`
postsDiv.appendChild(div)
})
}

renderPosts()
