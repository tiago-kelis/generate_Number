function sortear(){
    const mim = document.getElementById("minimo").value;
    const max = document.getElementById("maximo").value;
    const sort = Math.floor((Math.random()* max) + mim);

   
    document.getElementById("result").innerHTML = sort;


}