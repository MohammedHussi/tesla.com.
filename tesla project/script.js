let veh =  document.querySelector(".veh")
let boy = document.querySelector(".photos")
boy.style.visisbility="hidden"

veh.addEventListener("mouseover",()=>{
  let some=2
   if(some=2){
      boy.style.visibility="visible"
      boy.style.animation="zero 2s ease 1 alternate"
      endiv.style.visibility="hidden"
      charge.style.visibility="hidden"
      discover.style.visibility="hidden"

      some=3
       boy.addEventListener("mouseover",()=>{
       boy.style.visibility="visible"

       boy.addEventListener("mouseleave",()=>{
        boy.style.visibility="hidden"
        boy.style.animation="cero 2s ease 1 alternate"

       })
      })
     
  }else{
    boy.style.visibility="hidden"
  }
})

let en = document.querySelector(".en")
let endiv= document.querySelector(".eng-div")
endiv.style.visibility="hidden"
en.addEventListener("mouseover",()=>{
let dome =2
if(dome = 2){
  endiv.style.visibility="visible"
  boy.style.visibility="hidden"
  charge.style.visibility="hidden"
  discover.style.visibility="hidden"
  endiv.style.animation="xero 2s ease 1 alternate"
  dome=3
  endiv.addEventListener("mouseover",()=>{
    endiv.style.visibility="visible"
  })
  endiv.addEventListener("mouseleave",()=>{
    endiv.style.visibility="hidden"
    endiv.style.animation="kero 2s ease 1 alternate"
  })
}
else{
  endiv.style.visibility="hidden"
}


})


let charge =document.querySelector(".charge")
let ch = document.querySelector(".ch")
charge.style.visibility="hidden"
ch.addEventListener("mouseover",()=>{
   let dos =2
  if(dos = 2){
    charge.style.visibility="visible"
    charge.style.animation="wero 2s ease 1 alternate"
    boy.style.visibility="hidden"
    endiv.style.visibility="hidden"
    discover.style.visibility="hidden"
   
    dos=3
    charge.addEventListener("mouseover",()=>{
      charge.style.visibility="visible"
    })
    charge.addEventListener("mouseleave",()=>{
      charge.style.visibility="hidden"
      charge.style.animation="hero 2s ease 1 "
      
    })
  }
  else{
    charge.style.visibility="hidden"

  }

})
  let discover = document.querySelector(".discover")
  let dis = document.querySelector(".dis")
  discover.style.visibility="hidden"

   dis.addEventListener("mouseover",()=>{

    let kos =2
    if(kos = 2){
      charge.style.visibility="hidden"
     
      boy.style.visibility="hidden"
      charge.style.visibility="hidden"
      endiv.style.visibility="hidden"
      discover.style.visibility="visible"
      discover.style.animation="shafi 2s ease 1 "
     
      kos=3
      discover.addEventListener("mouseover",()=>{
        discover.style.visibility="visible"
      })
      discover.addEventListener("mouseleave",()=>{
        discover.style.visibility="hidden"
        discover.style.animation="shafin 2s ease 1"
       
        
      })
    }
    else{
       discover.style.visibility="hidden"
    }
 })



 let sh = document.querySelector(".sh")
 let shop = document.querySelector(".shop")
 shop.style.visibility="hidden"
 sh.addEventListener("mouseover",()=>{
  boy.style.visibility="hidden"
  endiv.style.visibility="hidden"
  charge.style.visibility="hidden"
  discover.style.visibility="hidden"
  shop.style.visibility="visible"
  
  shop.style.animation="shop 2s ease 1 alternate"

  sh.addEventListener("mouseleave",()=>{
    shop.style.visibility="hidden"
   
    shop.style.animation="shops 2s ease 1 alternate"
  })
 })



















