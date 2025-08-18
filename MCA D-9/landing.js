const con = document.getElementById('container');
const arr=["bg.jpeg",
    "img.jpg",
    "img1.webp",
    "img2.jpg",
    "img3.jpg",
    "img4.webp"]


let prev=()=>{
    i--;
    if(i==-1)
    {
        i=5;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
}
let change=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
}
let i=0;
let next=()=>{
    // img[i].classList.remove('active');
    i++;
    
    if(i==6)
{
    i=0;
}
//  img[i].classlist.add('active');


    con.style.backgroundImage=`url('${arr[i]}')`;
}