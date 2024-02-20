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


let traveller={
    adults:0,
    children:0,
    infants:0
};


function updatetravellers(type,num){
    if(type==='adults'){
        traveller.adults=num;
    }
    else if(type==='children'){
        traveller.children=num;
    }
    else{
        traveller.infants=num;
    }
    let tot=Number(traveller.adults)+Number(traveller.children)+Number(traveller.infants);
    let showele=document.querySelector('.preferences .travellers');
    showele.innerHTML=`${tot} Traveller,Economy`
};

document.querySelector('.from-and-to .reverse-dest').addEventListener('click',()=>{
    let to=document.querySelector('.from-and-to .to #destination');
    let from=document.querySelector('.from-and-to .from #departure');
    let temp=to.value;
    to.value=from.value;
    from.value=temp;

});




function add(n1,n2,type){
    let html=``;
    for(let i=n1;i<=n2;i+=1){
        if(i===n1){
            html+=`
            <button onclick="updatetravellers('${type}',${i});"
            style="background-color: #0077b6;"
            >${i}</button>
            `
        }
        else{
            html+=`
            <button onclick="updatetravellers('${type}',${i});
            "
            style="background-color: #FFF;
            color:black;">${i}</button>
            `
        }
    }
    console.log(html);
    return html;
};


document.querySelector('.travellers').addEventListener('click',()=>{
    let anyele=document.querySelector('.preferences .options');
    
    if(anyele.innerHTML===''){
        anyele.innerHTML=`
        <h3 >Travellers</h3>
        <div class="adults opt">
            <div class="age">
                <label>Adults</label><br>
                <span class="sub">
                12 years or above
                </span>
            </div>
            <div class="number">
                
            </div>
        </div>
        <div class="children opt ">
            <div class="age">
                <label>Children</label><br>
                <span class="sub">
                    2-12 years
                </span>
            </div>
            <div class="number">
                
            </div>
        </div>
        <div class="infants opt">
            <div class="age">
                <label>Infants</label><br>
                <span class="sub">
                    0-2 years
                </span>
            </div>
            <div class="number">
                
            </div>
        </div>
        `
        let adultele=document.querySelectorAll('.preferences  .options .adults .number');
        adultele.forEach((element1)=>{
            element1.innerHTML=add(1,8,'adults');
        });
        
        
        
        let childele=document.querySelectorAll('.preferences  .options .children .number');
        
        childele.forEach((element2)=>{
            element2.innerHTML=add(0,6,'children');
        });
        let infantele=document.querySelectorAll('.preferences  .options .infants .number');
        
        infantele.forEach((element3)=>{
            element3.innerHTML=add(0,4,'infants');
        });
        ;
    }
    else{
        anyele.innerHTML='';
    }
})



window.updatetravellers = updatetravellers;