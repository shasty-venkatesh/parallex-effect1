const text=document.getElementById('text');
const leaf=document.getElementById('leaf');
const hill5=document.getElementById('hill5');
const hill4=document.getElementById('hill4');
const hill1=document.getElementById('hill1');
let value1=160;
window.addEventListener('scroll',()=>{
    let value2=window.scrollY;
    if(value2 >=837.5999755859375)
    {
        text.style.marginTop=0+ value1+"px";
        hill1.style.marginTop=0+"px";
        leaf.style.marginLeft=0+'px';
        hill5.style.marginLeft=0+'px';
        hill4.style.marginLeft=0+'px';
    }
    text.style.marginTop=value2*2.5+ value1+"px";
    hill1.style.marginTop=value2*2.5+"px";
    leaf.style.marginLeft=value2*2.5+'px';
    hill5.style.marginLeft=value2*2.5+'px';
    hill4.style.marginLeft=value2* -1.5+'px';
})