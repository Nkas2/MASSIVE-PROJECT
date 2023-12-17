export function formatKordinat(angka) {
  // Konversi angka ke string
  const angkaString = angka.toString();

  // Pisahkan bagian desimal dengan menggunakan dot sebagai pemisah
  const [bagianDepan, bagianBelakang] = angkaString.split(".");

  // Jika tidak ada bagian belakang, return angka asli
  if (!bagianBelakang) {
    return angkaString;
  }

  // Ambil lima angka di belakang koma dan padRight dengan 0 jika perlu
  const limaAngkaBelakangKoma = bagianBelakang.padEnd(5, "0").slice(0, 5);

  // Gabungkan kembali dengan bagian depan dan tanda koma
  const hasil = `${bagianDepan}.${limaAngkaBelakangKoma}`;

  return Number(hasil);
}
