const dataAtual = new date ();
let dataObjetivo = prompt ("Qual data você está esperando? 16/04");
dataObjetivo = new date(dataObjetivo+"t23:59:59");
let diasQuefaltam = math.floor((dataObjetivo-dataAtual)/8640000);
document.querySelector("#dias-restantes").textContent=diasQuefaltam;
