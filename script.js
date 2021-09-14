function kohjinping(){
  const Hutang = document.querySelector("#hutang").value;
  const Bunga = document.querySelector("#bunga").value;
  const Jangka_waktu = document.querySelector("#tempo").value;
  const lay_total = document.getElementById("total");
  const jinping = (Hutang * (Bunga * 0.01)) / Jangka_waktu;
  const total = ((Hutang / Jangka_waktu) + jinping);
  const totalAkhir = total.toFixed(2);
  
   if(totalAkhir.toString().length > 9){
       lay_total.style.fontSize = "14px"; 
   } else {
       lay_total.style.fontSize = "18px";
   }

  lay_total.innerHTML = 'Cicilan : Rp. ' + totalAkhir + ' ' + 'Perbulan';
  

} 
  
