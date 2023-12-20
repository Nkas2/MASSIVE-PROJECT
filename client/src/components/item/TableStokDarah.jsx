export const TableStokDarah = ({ data, total }) => {
  console.log(total);
  return (
    <>
      <div className="w-full rounded-lg border border-tableprimary shadow-lg">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b border-tableprimary">
              <th className="pe-40 ps-5 py-2">Jenis Golongan Darah</th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-1.svg"
                  alt=""
                />
              </th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type.svg"
                  alt=""
                />
              </th>

              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-5.svg"
                  alt=""
                />
              </th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-4.svg"
                  alt=""
                />
              </th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-3.svg "
                  alt=""
                />
              </th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-2.svg"
                  alt=""
                />
              </th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-7.svg"
                  alt=""
                />
              </th>
              <th className="px-5 py-2">
                <img
                  className="mx-auto block"
                  src="/assets/blood type-6.svg"
                  alt=""
                />
              </th>
              <th className="px-5 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-bold bg-tablesecondary border-y border-tableprimary">
              <td className="py-3 ps-5">
                {data[0]?.type} ({data[0]?.alias})
              </td>
              {data[0].detail?.map((darah, index) => (
                <td key={index} className="py-3 text-center">
                  {darah.jumlah}
                </td>
              ))}
              <td className="py-3 text-center">{data[0]?.total}</td>
            </tr>
            <tr className="font-bold ">
              <td className="py-3 ps-5">
                {data[1]?.type} ({data[1]?.alias})
              </td>
              {data[1].detail?.map((darah, index) => (
                <td key={index} className="py-3 text-center">
                  {darah.jumlah}
                </td>
              ))}
              <td className="py-3 text-center">{data[1]?.total}</td>
            </tr>
            <tr className="font-bold bg-tablesecondary border-y border-tableprimary">
              <td className="py-3 ps-5">
                {data[2]?.type} ({data[2]?.alias})
              </td>
              {data[2].detail?.map((darah, index) => (
                <td key={index} className="py-3 text-center">
                  {darah.jumlah}
                </td>
              ))}
              <td className="py-3 text-center">{data[2]?.total}</td>
            </tr>
            <tr className="font-bold ">
              <td className="py-3 ps-5">
                {data[3]?.type} ({data[3]?.alias})
              </td>
              {data[3].detail?.map((darah, index) => (
                <td key={index} className="py-3 text-center">
                  {darah.jumlah}
                </td>
              ))}
              <td className="py-3 text-center">{data[3]?.total}</td>
            </tr>
            <tr className="font-bold bg-tablesecondary">
              <td className="py-3 ps-5">Total</td>
              {total?.map((tot, index) => (
                <td key={index} className="py-3 text-center">
                  {tot.total_stok}
                </td>
              ))}
              <td className=" text-center">
                {total?.reduce((tot, cur) => tot + cur.total_stok, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="font-bold text-sm text-end my-3">
        <p>Di update pada tanggal 20 Oktober 2023</p>
      </div>
    </>
  );
};
