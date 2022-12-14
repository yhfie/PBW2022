var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

function showBarang(){
    var listBarang = document.getElementById("list-barang");
        //clear list barang
    listBarang.innerHTML = "";

        //cetak nama barang
    for(let i=0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='delBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang [i] + "["+btnEdit + " | " + btnHapus + "]</li>";
    }
}

function addBarang(){
    var tambah = document.querySelector("input[name=barang]");
    dataBarang.push(tambah.value);
    showBarang();
}

function editBarang(id){
    var edit = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = edit;
    showBarang();
}

function delBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}