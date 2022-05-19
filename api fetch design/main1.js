fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
.then((json)=>{
  let data = json;
  localStorage.setItem("use", JSON.stringify(data));
});
let userData = JSON.parse(localStorage.getItem("use"));
// console.log(userData);
// let data1='';
userData.map((values)=>{
  document.getElementById("card").innerHTML+= `<div class="card-body">
          <h2 class="useridname" id="id">id-${values.id}</h2>
          <img src="images.png" alt=""  class="card-img-top" srcset="" width=""100px>           
         <p class="card-title">name-${values.name}</p>
          <p class="email">email${values.email}</p>
          <p class="complete">ph-${values.phone}</p>
          <button type="button" class="btn btn-primary" onclick="viv(${values.id})">albums</button>
          <button type="button" class="btn btn-primary" onclick="del(${values.id})">delete</button>
          </div>`
      });
    // }
    // let addtaskinput= document.getElementById("addtaskinput");
    // let addtaskinputp= document.getElementById("addtaskinputp");
    // let addtaskbtn = document.getElementById("addtaskbtn");
    // addtaskbtn.addEventListener("click", function(){
  //  let addtaskinputval = addtaskinput.value;
  //  let addtaskinputvalp = addtaskinputp.value;
      // let userData  = JSON.parse(localStorage.getItem("use"));
    //  userData.push(addtaskinputval);
      // localStorage.setItem("use", JSON.stringify(userData));
      // window.location.reload();
    // })
    let add_btn2= document.getElementById("add_btn2");
    add_btn2.addEventListener("click",function(e) {
      e.preventDefault()
      // var id = document.getElementById("newId1").value;
        var userid = document.getElementById("new_Id").value;
        var new_name = document.getElementById("new_name").value;
        var new_email = document.getElementById("new_email").value;

        console.log("Input Data: " + userid + " " + new_name + " " + new_email);
          let newid;
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',

            body: JSON.stringify({
              id: newid,
              name: new_name,
              email: new_email,
              phone: userid
            }),

            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
            // console.log('response: ' + JSON.stringify(json));
            let data = json;
            // data = new Array();
            // data = [];
            localStorage.setItem("user", JSON.stringify(data));
          });
          // let userData= new Array();
          //  userData = [];
          userData= JSON.parse(localStorage.getItem("users"));
          // document.getElementById("cards").innerHTML= userData;
          document.getElementById("cards").innerHTML+= `<div class="card-body">
           <h2 class="exo">id-${newid}</h2> 
          <p class="email">name-${new_name}</p>
          <p class="complete">email-${new_email}</p>
          <p class="name">phone-${userid}</p>
          <button type="button" class="btn btn-primary" onclick="viv(${newid})">albums</button>
          <button type="button" class="btn btn-primary" onclick="del(${newid})">delete</button>
          </div>`

          // <h2 class="email">id-11</h2> -
console.log(userData);
// document.getElementById("new_Id1").value="";
document.getElementById("new_Id").value="";
document.getElementById("new_name").value="";
document.getElementById("new_email").value="";
      }

    )


    function viv(id){
      document.location=`index2.html?${id}`
      // let ide = id;
      console.log(id);

}
function del(id){
  let dim= id-1;
  let userData = JSON.parse(localStorage.getItem("use"));
  userData.splice(dim,1);
  localStorage.setItem("use", JSON.stringify(userData));
   window.location.reload();
}
