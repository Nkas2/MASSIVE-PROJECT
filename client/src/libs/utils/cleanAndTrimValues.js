export function cleanAndTrimValues(obj) {
  // Loop melalui properti-properti objek
  for (const key in obj) {
    // Periksa apakah nilai adalah string kosong atau hanya berisi spasi
    if (typeof obj[key] === "string" && obj[key].trim() === "") {
      // Jika ya, set nilainya menjadi null
      obj[key] = null;
    } else if (typeof obj[key] === "string") {
      // Jika nilai adalah string, lakukan trim
      obj[key] = obj[key].trim();
    }
  }

  return obj;
}
