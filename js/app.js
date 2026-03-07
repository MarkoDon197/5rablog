
const posts=[
{
title:'Weekend in Paris',
text:'Best cafes, museums and the Eiffel Tower.',
image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
},
{
title:'Lake Bled Guide',
text:'How to visit the famous Slovenian lake.',
image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
},
{
title:'Exploring Rome',
text:'Pizza, history and ancient architecture.',
image:'https://images.unsplash.com/photo-1529260830199-42c24126f198'
}
];

const container=document.getElementById("posts");

posts.forEach(p=>{

const el=document.createElement("div");
el.className="post";

el.innerHTML=`
<img src="${p.image}" style="width:100%;border-radius:8px">
<h3>${p.title}</h3>
<p>${p.text}</p>
<button class="btn">Read more</button>
`;

container.appendChild(el);

});

document.getElementById("contactForm").addEventListener("submit",e=>{
e.preventDefault();
alert("Message sent!");
});
