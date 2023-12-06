const n=20;
const arr=[];
reset();
function reset(){
    for(let i=0;i<n;i++){
        arr[i]=Math.random();
    }
    showBar();
}

function play(){
    const button=document.querySelector('.btn');
    const copy=[...arr];
    const moves=bubbleSort(copy);
    animate(moves);
}

function animate(moves){
    if(moves.length==0){
        showBar();
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;
    if(move.type=="swap"){
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    showBar(move);
    setTimeout(function(){
        animate(moves);
    },40);
}

function bubbleSort(arr,check){
    const moves=[];
    do{
        var swaped=false;
        for(let i=1;i<arr.length;i++){
            moves.push({indices:[i-1,i],type:"compare"});
            if(arr[i-1]>arr[i]){
                swaped=true;
                moves.push({indices:[i-1,i],type:"swap"});
                [arr[i-1],arr[i]]=[arr[i],arr[i-1]];
            }
        }
    }while(swaped);
    return moves;
}

function showBar(move){
        container.innerHTML=" ";
        for(let i=0;i<arr.length;i++){
            const bar=document.createElement("div");
            bar.style.height=arr[i]*100+"%";
            bar.classList.add("bar");

            if(move && move.indices.includes(i)){
                bar.style.backgroundColor= move.type=="swap"?"red":"blue";
            }
            container.appendChild(bar);
        }
}

