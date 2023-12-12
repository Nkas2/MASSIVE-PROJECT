import { Link } from 'react-router-dom';
import { ButtonEditProfile } from '../../components/item/ButtonEditProfile.jsx'
import { ButtonJadwalDonor } from '../../components/item/ButtonJadwalDonor.jsx'
import { Footer } from '../../components/Footer';


export const Profile = () => {
    return (
        <>
            <section className="container mt-10 mx-auto px-6">
                <div className="h-80 w-7/12 mx-auto overflow-hidden bg-cover bg-center">
                    <div className="bg-customGray  flex items-center rounded-2xl h-64">
                        <div className="ps-14 w-2/6">
                            <h2 className="text-4xl text-white font-bold font-bodyFont">Alam</h2>
                            <p className="mt-1 text-white">Tangerang</p>
                            <ButtonEditProfile />
                        </div>
                        {/* Profile Picture */}
                        <img className="w-2/6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        {/* Blood Vector */}
                        <div className="relative w-20 mt-56 ms-20">
                            <img className="w-full h-full" src="./assets/blood-vector.svg" alt="" />
                            <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 text-white text-center">
                                <p className='text-4xl font-bodyFont font-medium'>AB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aktivitas */}
            <section className="container mx-auto mb-10">
                <h2 className="text-center font-bold text-3xl text-primary">Aktivitas</h2>

                {/* List Aktivitas */}
                <div className="w-7/12 flex flex-col items-center mt-5 mx-auto border border-customGray rounded-xl">
                    {/* Warning Vector */}
                    <div className="mx-auto w-64 mt-10">
                        <img src="./assets/warningActivity.png" alt="" />
                    </div>
                    {/* Text */}
                    <div className="mx-auto mt-5 w-60">
                        <h3 className="text-center text-2xl font-bodyFont font-bold">Tidak Ada Aktivitas</h3>
                        <p className="text-center mt-4 text-xs text-customGray font-bodyFont">Cari aktivitas melalui fitur jadwal donor darah</p>
                    </div>
                    <ButtonJadwalDonor/>
                </div>
            </section>
            {/* footer */}
            <div className="">
                <Footer />
                <img src="./assets/waves-footer.svg" alt="" className="w-full" />
            </div>

        </>

    )
}