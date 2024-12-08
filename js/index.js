var bookNameInput= document.getElementById("bookName");
var bookUrlInput= document.getElementById("bookUrl") ;
//create Data
var AccList=[];

if(localStorage.getItem("ACC") !==null){
    AccList= JSON.parse(localStorage.getItem("ACC"))
    showData();
}


function addAcc(){
    if(validationName() && validationUrl()){

    var Acc ={
    
        name :bookNameInput.value,
        Url :bookUrlInput.value,
    
    }
    AccList.push(Acc)

    localStorage.setItem("ACC",JSON.stringify(AccList))
       console.log(AccList);
    
       clear();
       showData()
 }
  
}
//Clear Data
function clear(){
    bookNameInput.value=null;
    bookUrlInput.value=null
}
//Read Data
function showData(){
    var cartona ="";
    console.log("text")
    for(var i=0 ; i < AccList.length;i++){
       
        cartona+=`  <tr> 
                     
                    <td> ${i+1}</td>
                    <td> ${AccList[i].name}</td>
                    
                    <td>
                        
                        <button " class=" pe-2 edit-btn-itme1"> 
                        <a href="${AccList[i].Url}" target="_blank">
                        <i class="fa-solid fa-eye pe-2"></i>
                        visit</a>
                        
                        </button>
                    </td>
                    <td>
                        <button onclick="deleteItme(${i})" class="pe-2 edit-btn-itme2"><i class="fa-solid fa-trash-can"></i>
                        Delete
                        </button>
                    </td>
                    </tr>
                   `
                  
                }
                console.log("test")    
document.getElementById("rowData").innerHTML = cartona;
              
};

//Delete itme
function deleteItme(index){
 AccList.splice(index ,1);

 localStorage.setItem("ACC",JSON.stringify(AccList))


 showData();
}

function validationName() {
    var regex = /^[a-zA-Z][a-zA-Z]{5,8}$/; 
    var text = bookNameInput.value;
  
    if (regex.test(text)) {
       //Valid input
      bookNameInput.classList.add("is-valid");
      bookNameInput.classList.remove("is-invalid");
     return true;
    } else {
       //Invalid input
      bookNameInput.classList.add("is-invalid");
      bookNameInput.classList.remove("is-valid");
      return false;
    }
    
};
function validationUrl() {
    var regex =  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%\+.~#?&\/\/=]*)/; 
    var text = bookUrlInput.value;
    var msgUrl = document.getElementById("msgUrl");
  
    if (regex.test(text)) {
      // Valid input
      bookUrlInput.classList.add("is-valid");
      bookUrlInput.classList.remove("is-invalid");
      msgUrl.classList.add("d-none");
      return true;
    } else {
      // Invalid input
      bookUrlInput.classList.add("is-invalid");
      bookUrlInput.classList.remove("is-valid");
      msgUrl.classList.remove("d-none");
      return false;
    }
    
};