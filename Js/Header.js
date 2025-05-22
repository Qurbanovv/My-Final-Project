const slide_out_menu=document.querySelector(".slide_out_menu")
const slide_out_menu_button=document.getElementById("slide_out_menu_button")
slide_out_menu_button.addEventListener("click",()=>{
    slide_out_menu.style.transform="translateX(0)"
})
const slide_out_1_X=document.querySelector(".slide_out_1_X")
slide_out_1_X.addEventListener("click",()=>{
    slide_out_menu.style.transform="translateX(-100%)"
})



const slide_out_click_ul=document.querySelectorAll(".slide_out_click_ul")
const slide_out_click_open=document.querySelectorAll(".slide_out_click_open")
const slide_out_click_close=document.querySelectorAll(".slide_out_click_close")

for (let i = 0; i < slide_out_click_open.length; i++) {
    slide_out_click_open[i].addEventListener("click",()=>{
        setTimeout(()=>{    
           slide_out_click_close[i].classList.add("slide_out_click_close_style")
           slide_out_click_open[i].style.display="none"
           slide_out_click_ul[i].style.transform="translateX(0)"
        },7)
        setTimeout(()=>{
            slide_out_click_ul[i].style.display="flex"        
        },1)
    })    
}
for (let i = 0; i < slide_out_click_close.length; i++) {
    slide_out_click_close[i].addEventListener("click",()=>{
        setTimeout(()=>{    
               slide_out_click_close[i].classList.remove("slide_out_click_close_style")
               slide_out_click_open[i].style.display="block"
               slide_out_click_ul[i].style.transform="translateX(-100%)"
            },7)
            setTimeout(()=>{
                slide_out_click_ul[i].style.display="none"        
            },1)
    })    
}