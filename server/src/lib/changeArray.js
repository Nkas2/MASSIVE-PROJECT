export function ubahIsiArray(stock) {
  // Cek apakah golongan darah A+ ada di array.

  const aPlus = stock.find((data) => data.golongan_darah === "A+");
  const aMin = stock.find((data) => data.golongan_darah === "A-");
  const bPlus = stock.find((data) => data.golongan_darah === "B+");
  const bMin = stock.find((data) => data.golongan_darah === "B-");
  const abPlus = stock.find((data) => data.golongan_darah === "AB+");
  const abMin = stock.find((data) => data.golongan_darah === "AB-");
  const oPlus = stock.find((data) => data.golongan_darah === "O+");
  const oMin = stock.find((data) => data.golongan_darah === "O-");
  // Jika golongan darah A+ tidak ada, maka tambahkan object baru.

  if (!aPlus) {
    stock.push({
      golongan_darah: "A+",
      total_stok: 0,
    });
  }
  if (!aMin) {
    stock.push({
      golongan_darah: "A-",
      total_stok: 0,
    });
  }
  if (!bPlus) {
    stock.push({
      golongan_darah: "B+",
      total_stok: 0,
    });
  }
  if (!bMin) {
    stock.push({
      golongan_darah: "B-",
      total_stok: 0,
    });
  }
  if (!abPlus) {
    stock.push({
      golongan_darah: "AB+",
      total_stok: 0,
    });
  }
  if (!abMin) {
    stock.push({
      golongan_darah: "AB-",
      total_stok: 0,
    });
  }
  if (!oPlus) {
    stock.push({
      golongan_darah: "O+",
      total_stok: 0,
    });
  }
  if (!oMin) {
    stock.push({
      golongan_darah: "O-",
      total_stok: 0,
    });
  }

  stock.sort((a, b) => a.golongan_darah.localeCompare(b.golongan_darah));

  // Mengembalikan list stock yang telah diubah.

  return stock;
}
