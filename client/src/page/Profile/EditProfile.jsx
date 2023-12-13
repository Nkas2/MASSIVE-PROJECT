import { Form, Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { ButtonSaveProfile } from '../../components/item/ButtonSaveProfile';
import { Footer } from '../../components/Footer';
import { SideBarProfile } from '../../components/item/SideBarProfile';

export const EditProfile = () => {
    return (
        <>
            <div className="flex px-28 py-4 mb-10">
                {/* SideBar */}
                <SideBarProfile/>

                <div className="w-1/6 h-1/6 relative ml-20">
                    <img className="rounded-full shadow-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    {/* Icon Edit Picture */}
                    <button className="absolute bottom-2 right-1 rounded-full bg-white shadow-lg  px-1 py-1 ">
                        <EditOutlinedIcon fontSize="large" style={{ color: 'gray' }} />
                    </button>
                </div>
                <div className=" w-3/6 ml-20">
                    <Form method="post" className="mb-10">
                        <div>
                            <div className="mb-5 font-medium">
                                <h1>Nama</h1>
                                <input
                                    type="name"
                                    name="name"
                                    className="w-full mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="mb-5 font-medium">
                                <h1>Nomor Registrasi</h1>
                                <input
                                    type="number"
                                    name="nomorRegistrasi"
                                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="relative mb-5 font-medium">
                                <h1>Jenis Kelamin</h1>
                                <select
                                    id="dropdown"
                                    name="dropdown"
                                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                >
                                    <option value="default" defaultValue="Pilih Jenis Kelamin">--</option>
                                    <option value="lakiLaki">Laki-Laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                                <div className="absolute bottom-2 right-0 flex items-center pr-2 pointer-events-none">
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                            </div>

                            <div className="mb-5 relative font-medium">
                                <h1>Kota Domisili</h1>
                                <select
                                    id="dropdown"
                                    name="dropdown"
                                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                >
                                    <option value="default" defaultValue="Pilih Jenis Kelamin">--</option>
                                    <option value="semarang">Semarang</option>
                                    <option value="jakarta">Jakarta</option>
                                </select>
                                <div className="absolute bottom-2 right-0 flex items-center pr-2 pointer-events-none">
                                    <KeyboardArrowDownOutlinedIcon />
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="mb-5 relative font-medium w-3/6">
                                    <h1>Golongan Darah</h1>
                                    <select
                                        id="dropdown"
                                        name="dropdown"
                                        className="w-full appearance-none outline-none h-11 rounded-[15px] border-2 mt-2 pl-4 border-slate-300"
                                    >
                                        <option value="default" defaultValue="Pilih Jenis Kelamin">--</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
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
                                    >
                                        <option value="default" defaultValue="Pilih Jenis Kelamin">--</option>
                                        <option value="+">+</option>
                                        <option value="-">-</option>
                                    </select>
                                    <div className="absolute bottom-2 right-0 flex items-center pr-2 pointer-events-none">
                                        <KeyboardArrowDownOutlinedIcon />
                                    </div>
                                </div>
                            </div>

                            <Link to={'/'}>
                                <div className="flex items-center">
                                    <ButtonSaveProfile text={'Simpan Perubahan'}/>
                                </div>
                            </Link>
                        </div>
                    </Form>
                </div>

            </div>
            {/* footer */}
            <div className="">
                <Footer />
                <img src="./assets/waves-footer.svg" alt="" className="w-full" />
            </div>

        </>

    )
}