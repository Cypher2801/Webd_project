import {destinations} from "../data/destinations.js";


document.querySelector('.from-and-to .from #departure').onkeyup=function (){
    let from=document.querySelector('.from-and-to .from #departure');
    let l=from.value;
    console.log(l);
    let possible=[];
    
    if(l.length){
        destinations.forEach((item)=>{
            let a=item.name;
            if(a.toLowerCase().includes(l.toLowerCase())){
                possible.push(item);
            }   
        })
    };
    console.log(possible);
    
    let outcomes=document.querySelector('.from-and-to .from .places');
    console.log(possible);
    let html='';
    possible.forEach((loc)=>{
        html+=`
        <div class="loc" onclick="let from=document.querySelector('.from-and-to .from #departure');
        from.value='${loc.name}';
        let outcomes=document.querySelector('.from-and-to .from .places');
        outcomes.innerHTML=''">
                            <div class="code"
                            >${loc.code}</div>
                            <div class="name">${loc.name}</div>
                        </div>
        `
    })
    outcomes.innerHTML=html;
};



document.querySelector('.from-and-to .to #destination').onkeyup=function (){
    let to=document.querySelector('.from-and-to .to #destination');
    let l=to.value;
    console.log(l);
    let possible=[];
    
    if(l.length){
        destinations.forEach((item)=>{
            let a=item.name;
            if(a.toLowerCase().includes(l.toLowerCase())){
                possible.push(item);
            }   
        })
    };
    console.log(possible);
    
    let outcomes=document.querySelector('.from-and-to .to .places');
    console.log(possible);
    let html='';
    possible.forEach((loc)=>{
        html+=`
        <div class="loc" onclick="let to=document.querySelector('.from-and-to .to #destination');
        to.value='${loc.name}';
        let outcomes=document.querySelector('.from-and-to .to .places');
        outcomes.innerHTML='';
        ">
                            <div class="code"
                            >${loc.code}</div>
                            <div class="name">${loc.name}</div>
                        </div>
        `
    })
    outcomes.innerHTML=html;
}
;




document.querySelector('.from-and-to .reverse-dest').addEventListener('click',()=>{
    let to=document.querySelector('.from-and-to .to #destination');
    let from=document.querySelector('.from-and-to .from #departure');
    let temp=to.value;
    to.value=from.value;
    from.value=temp;

});