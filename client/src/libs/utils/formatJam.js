export function formatJam(inputJam) {
  // Ubah string waktu menjadi objek Date
  const waktu = new Date(`2000-01-01T${inputJam}`);

  // Ambil bagian jam dan menit dari objek Date
  const jam = waktu.getHours().toString().padStart(2, "0");
  const menit = waktu.getMinutes().toString().padStart(2, "0");

  // Gabungkan bagian jam dan menit menjadi format yang diinginkan
  const hasilFormat = `${jam}:${menit}`;

  return hasilFormat;
}
