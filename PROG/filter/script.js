let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

//survival filter
let survivalFilter = document.getElementById("checkbox-Survival")
survivalFilter.onchange = function(){
    if(survivalFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "survival"){
                allGames[i].style.display = "block";
            }
        }  
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "survival"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//rpg filter
let rpgFilter = document.getElementById("checkbox-rpg")
rpgFilter.onchange = function(){
    if(rpgFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "rpg"){
                allGames[i].style.display = "block";
            }
        }  
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "rpg"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//open-world filter
let openworldFilter = document.getElementById("checkbox-openworld")
openworldFilter.onchange = function(){
    if(openworldFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "open-world"){
                allGames[i].style.display = "block";
            }
        }  
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "open-world"){
                allGames[i].style.display = "none";
            }
        }
    }
}