let sec_1_div =document.querySelectorAll(".sec_1_div")
let qindex=0
// console.log(a.length);
const sec_1=document.querySelector(".sec_1_sly")
let btn_div_1 = document.createElement("div")
btn_div_1.className='s_1_div'
let s_1_btn_name ="s_1_btn"
let s_1_btn_name_active="s_1_btn_active"
function Slider(x,sec,btn_div,btn_name,btn_name_active) {
    let qindex=0
    setInterval(()=>{
        if(qindex<x.length-1){
            x.forEach(element => {
                element.classList.remove("active")
            });
            x[qindex+1].classList.add("active")
            // btn_div_children.forEach(element => {
            //     element.classList.remove(`${btn_name_active}`)
            //     console.log(element);
            // });
            for (let i = 0; i < btn_div_children.length; i++) {
                btn_div_children[i].classList.remove(`${btn_name_active}`)                
            }
            btn_div_children[qindex+1].classList.add(`${btn_name_active}`)
            console.log(btn_div_children);
            qindex=qindex+1
        }
        else{
            x.forEach(element => {
                element.classList.remove("active")
            });
            // ! foreabtn_div_childreneri for elemek lazimdi 
            x[0].classList.add("active")
            // btn_div_children.forEach(element => {
            //     element.classList.remove(`${btn_name_active}`)
            //     console.log(element);
            // });
            for (let i = 0; i < btn_div_children.length; i++) {
                btn_div_children[i].classList.remove(`${btn_name_active}`)                
            }
            btn_div_children[0].classList.add(`${btn_name_active}`)
            qindex=0
        }
    },4055)
    sec.appendChild(btn_div)
    for(let i=1;i<x.length+1;i++){
        let btn=document.createElement("button")
        btn_div.appendChild(btn)
        btn.addEventListener("click",()=>{
            console.log(i)
            x.forEach(element => {
                element.classList.remove("active")
            });
            for (let i = 0; i < btn_div_children.length; i++) {
                btn_div_children[i].classList.remove(`${btn_name_active}`)                
            }
            btn_div_children[i-1].classList.add(`${btn_name_active}`)
            x[i-1].classList.add("active")
            qindex=i-1
        })
    }
    let btn_div_children = btn_div.children
    console.log(btn_div_children);
    for (let j = 0; j < btn_div_children.length; j++) {  
        btn_div_children[j].className=`${btn_name}`   
    }
    // return
}
Slider(sec_1_div,sec_1,btn_div_1,s_1_btn_name,s_1_btn_name_active)