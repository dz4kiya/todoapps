document.addEventListener("DOMContentLoaded", function () { //berfungsi sebagai listener yang akan menjalankan kode di dalamnya jika DOM sudah diload dengan baik
 
    const submitForm = document.getElementById("form"); //mengambil elemen id form dan dimasukkan ke variabel submitForm
 
    submitForm.addEventListener("submit", function (event) {  //ketika tombol submit diklik, event.preventDefault dijalankan, biar ga kerefresh
        event.preventDefault();
        addTodo();                                             //menambahkan todo ke todo list
    });
});