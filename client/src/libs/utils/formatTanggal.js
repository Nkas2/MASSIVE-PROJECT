export function ubahFormatTanggal(tanggalISO) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const tanggal = new Date(tanggalISO).toLocaleDateString("id-ID", options);
  return tanggal;
}

export function dapatkanHari(tanggalString) {
  let tanggalObjek = new Date(tanggalString);
  let hari = tanggalObjek.getDay();
  let namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ][hari];

  // Mengembalikan nama hari
  return namaHari;
}
