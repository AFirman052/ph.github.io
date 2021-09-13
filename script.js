function kohjinping(){
  const Hutang = document.querySelector("#hutang").value;
  const Bunga = document.querySelector("#bunga").value;
  const Jangka_waktu = document.querySelector("#tempo").value;
  const lay_total = document.getElementById("total");
  const jinping = (Hutang * (Bunga * 0.01)) / Jangka_waktu;
  const total = ((Hutang / Jangka_waktu) + jinping);
  const totalAkhir = total.toFixed(2);
  
  // jika jumlah angka nya panjang, maka kecilkan font
   if(totalAkhir.toString().length > 11){
       lay_total.style.fontSize = "13px"; 
   } else {
       lay_total.style.fontSize = "21px";
   }

  lay_total.innerHTML = 'Total Hutang : Rp. ' + totalAkhir;
} 
