function terimainput() {
       var data = confirm ('Apakah Anda yakin?');
if (data===true) {
       alert ('Terimakasih');
       var x=document.forms['biodata']['Nama'].value;
       var y=document.forms['biodata']['Email'].value;
       var a=document.forms['biodata']['Kritik'].value;
       var b=document.forms['biodata']['Saran'].value;
               

       cell1.innerHTML = x;
       cell2.innerHTML = y;
       cell3.innerHTML = a;
       cell4.innerHTML = b;
}else{
       alert('Silahkan Di Cek Kembali');
}
}