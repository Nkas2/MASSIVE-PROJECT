import { ButtonSaveProfile } from '../../components/item/ButtonSaveProfile';
import { Footer } from '../../components/Footer';
import { SideBarProfile } from '../../components/item/SideBarProfile';
import { Link, Form } from 'react-router-dom';

export const EditPassword = () => {
    return (
        <>
            <div className="flex px-28 py-4 mb-10 gap-40">
                {/* SideBar */}
                <SideBarProfile/>

                <div className="w-3/6">
                    <Form method="post" className="mb-10">
                        <div>
                            <div className="mb-5 font-medium">
                                <h1>Password Lama</h1>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full mt-2 outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="mb-5 font-medium">
                                <h1>Password Baru</h1>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="mb-5 font-medium">
                                <h1>Konfirmasi Password</h1>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full mt-2 appearance-none outline-none h-11 rounded-[15px] border-2 pl-4 border-slate-300"
                                    autoComplete="off"
                                />
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