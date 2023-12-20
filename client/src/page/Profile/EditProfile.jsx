import { Link } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ButtonSaveProfile } from "../../components/item/ButtonSaveProfile";
import { Footer } from "../../components/Footer";
import { SideBarProfile } from "../../components/item/SideBarProfile";
import {
  useDetailsUser,
  useEditUser,
  useUploadImage,
} from "../../libs/tanstack/pub";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../store/tokenSlice/tokenSlice";
import {
  getUser,
  setImage,
  setNameAndPhoneNumber,
} from "../../store/userSlice/userSlice";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cleanAndTrimValues } from "../../libs/utils/cleanAndTrimValues";

export const EditProfile = () => {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const maxNumber = 69;
  const token = useSelector(getToken);
  const image = useSelector(getUser).image;
  const { data, isLoading } = useDetailsUser(token);
  const { register, handleSubmit } = useForm();
  const { mutate, data: dataRes } = useEditUser({
    onSuccess: (res) => {
      const { data: ress } = res;
      const { name, phone_number } = ress.data;
      dispatch(
        setNameAndPhoneNumber({
          name: name,
          phone_number: phone_number,
        })
      );
    },
  });
  // const { mutate: imageUpload, data: imageres } = useUploadImage();

  const onSubmit = (data) => {
    const body = cleanAndTrimValues(data);
    mutate({ token, body });
  };

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <>
      <div className="flex px-28 py-4 mb-10">
        {/* SideBar */}
        <SideBarProfile />

        <div className="w-1/6 h-1/6 relative ml-20">
          <img
            className="rounded-full shadow-lg w-[190px] h-[190px] "
            src={`${
              images.length !== 0
                ? images[images.length - 1].data_url
                : image === null
                ? "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740"
                : `https://massive-project-production.up.railway.app/images/${image}`
            }`}
            alt=""
          />
          {/* Icon Edit Picture */}
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <button
                onClick={onImageUpload}
                className="absolute bottom-2 right-1 rounded-full bg-white shadow-lg  px-1 py-1 "
              >
                <EditOutlinedIcon fontSize="large" style={{ color: "gray" }} />
              </button>
            )}
          </ImageUploading>
        </div>
        <div className=" w-3/6 ml-20">
          {isLoading ? (
            ""
          ) : (
            <form
              method="post"
              className="mb-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className="mb-5 font-medium">
                  <h1>Nama</h1>
                  <input
                    type="name"
                    name="name"
                    className="w-full mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                    defaultValue={data.name}
                    readOnly={false}
                    {...register("name")}
                  />
                </div>

                <div className="mb-5 font-medium">
                  <h1>Nomor Registrasi</h1>
                  <input
                    type="number"
                    name="nomorRegistrasi"
                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                    defaultValue={data.no_reg_pmi}
                    {...register("no_reg_pmi")}
                  />
                </div>

                <div className="mb-5 font-medium">
                  <h1>Nomor Telephone</h1>
                  <input
                    type="number"
                    name="nomorRegistrasi"
                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                    defaultValue={data.phone_number}
                    {...register("phone_number")}
                  />
                </div>

                <div className="relative mb-5 font-medium">
                  <h1>Jenis Kelamin</h1>
                  <select
                    id="dropdown"
                    name="dropdown"
                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    defaultValue={data.gender}
                    {...register("gender")}
                  >
                    <option value="" defaultValue>
                      --
                    </option>
                    <option value="pria">Pria</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                  <div className="absolute bottom-2 right-0 flex items-center pr-2 pointer-events-none">
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                </div>

                <div className="mb-5 font-medium">
                  <h1>Domisili</h1>
                  <input
                    type="text"
                    name="domisili"
                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                    autoComplete="off"
                    defaultValue={data.city}
                    {...register("city")}
                  />
                </div>

                <div className="flex items-center gap-5">
                  <div className="mb-5 relative font-medium w-3/6">
                    <h1>Golongan Darah</h1>
                    <select
                      id="dropdown"
                      name="dropdown"
                      className="w-full appearance-none outline-none h-11 rounded-[15px] border-2 mt-2 pl-4 border-slate-300"
                      defaultValue={data.blood_type}
                      {...register("blood_type")}
                    >
                      <option value="" defaultValue="Pilih Jenis Kelamin">
                        --
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                    <div className="absolute bottom-2 right-0 flex items-center pr-2 pointer-events-none">
                      <KeyboardArrowDownOutlinedIcon />
                    </div>
                  </div>
                  <div className="mb-5 relative font-medium w-3/6">
                    <h1>Rhesus</h1>
                    <select
                      id="dropdown"
                      name="dropdown"
                      className="w-full appearance-none outline-none h-11 rounded-[15px] border-2 mt-2 pl-4 border-slate-300"
                      defaultValue={data.rhesus}
                      {...register("rhesus")}
                    >
                      <option value="" defaultValue="Pilih Jenis Kelamin">
                        --
                      </option>
                      <option value="+">+</option>
                      <option value="-">-</option>
                    </select>
                    <div className="absolute bottom-2 right-0 flex items-center pr-2 pointer-events-none">
                      <KeyboardArrowDownOutlinedIcon />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <ButtonSaveProfile text={"Simpan Perubahan"} />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};
