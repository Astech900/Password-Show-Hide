let passInput = document.getElementById('pass');
let icon = document.getElementById('eye-icon');
let submitBtn = document.getElementById('btn');


passInput.addEventListener('focus',()=>{
    icon.classList.add('icon-visible');
})


icon.addEventListener('click',()=>{
    if(passInput.type === "password"){

        passInput.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');  
        
    }else{  
        
        passInput.type = "password";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      
    }
})
submitBtn.addEventListener('click',()=>{
    passInput.value = "";
})






























// passInput.addEventListener('focus',()=>{
//     if(passInput.contains){
//         icon.classList.add('icon-visible')
//     }




   
  
// })
 
// icon.addEventListener('click',()=>{
//     getSh()
// })

// function getSh(){
//     if(passInput.type === "password"){
//         passInput.type = "text";
//         icon.classList.remove('fa-eye')
//         icon.classList.add('fa-eye-slash')


//         console.log('teuuuu');
        
//     }else{

//       

//     }
// }
