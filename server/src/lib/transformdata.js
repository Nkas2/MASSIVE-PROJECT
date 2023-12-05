export function organizedData(data) {
  const results = data.reduce((acc, item) => {
    const existingType = acc.find((typeObj) => typeObj.type === item.type);

    if (existingType) {
      existingType.total += item.total_stok;
      existingType.detail.push({
        goldar: item.golongan_darah,
        jumlah: item.total_stok,
      });
    } else {
      acc.push({
        type: item.type,
        alias: item.alias,
        total: item.total_stok,
        detail: [
          {
            goldar: item.golongan_darah,
            jumlah: item.total_stok,
          },
        ],
      });
    }

    return acc;
  }, []);

  results.sort((a, b) => a.type.localeCompare(b.type));

  results.forEach((e) => {
    e.detail.sort((a, b) => a.goldar.localeCompare(b.goldar));
  });

  // console.log(results);
  return results;
}
