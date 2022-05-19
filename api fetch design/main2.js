var spgUrl= window.location.search.substring(1);
console.log(spgUrl);
fetch('https://jsonplaceholder.typicode.com/users/'+ spgUrl +'/albums').then((data)=>{
// console.log(data);
return data.json();
}).then((completedata)=>{
    // console.log(completedata); 
    let data1='';
    completedata.map((values)=>{
        data1 += `<div class="cardo">
        <h2 class="useridname" id="id">id-${values.id}</h2>
        <p class="name">userid-${values.userId}</p>
        <p class="complete">title-${values.title}</p>
        <button type="button" onclick="vivo(${values.userId})">Go to Posts</button>
        </div>`
    });
    document.getElementById("cardso").innerHTML=data1;
}
)
function vivo(userId){
    document.location=`index3.html?${userId}`
    // let ide = id;
    console.log(userId);
} 