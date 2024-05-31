const postitList=document.getElementsByClassName("postit");
const colors=["#FFFFCD","#CBFDCD","#C9C9F7"];
console.log(postitList);


for(let i=0;i<postitList.length;i++){
    postitList[i].style.backgroundColor=colors[Math.floor(Math.random() * 3)]; 
    const rotationAngle=Math.floor(Math.random() * 31)-15;
    console.log(rotationAngle)
    postitList[i].style.transform=`rotate(${rotationAngle}deg)`;
}

for(let i=0;i<postitList.length;i++){
    postitList[i].addEventListener("mouseover", function() {
        // Codice da eseguire quando il mouse esce dall'elemento
        // Ad esempio, puoi ripristinare lo stile originale dell'elemento
        postitList[i].style.backgroundColor = "white";
    });
}

/*element.style.backgroundColor=colors(Math.floor(Math.random() * 3))*/