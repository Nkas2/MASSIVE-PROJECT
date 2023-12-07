

export const Profile = () => {
    return (
        <>
            <section class="container mt-10 mx-auto px-6">
                <div class="h-80 w-7/12 mx-auto overflow-hidden bg-cover bg-center">
                    <div class="bg-customGray flex items-center rounded-2xl h-64">
                        <div class="ps-14 w-2/6">
                            <h2 class="text-4xl text-white font-bold">Alam</h2>
                            <p class="mt-1 text-white">Tangerang</p>
                            <button class="flex items-center rounded-3xl mt-8 px-6 py-3 bg-greyButton text-white text-sm font-medium hover:bg-greyButtonHover focus:outline-none focus:bg-greyButton">
                                <span>Edit Profile</span>
                            </button>
                        </div>
                        {/* Profile Picture */}
                        <img class="w-2/6" style="border-radius: 50%;" src="./assets/mentor1.jpg" alt=""/>
                            {/* Blood Vector */}
                            <div class="relative w-20 mt-56 ms-20">
                                <img class="w-full h-full" src="./assets/blood-vector.svg" alt=""/>
                                    <div class="absolute left-1/2 bottom-5 transform -translate-x-1/2 text-white text-center">
                                        <p class="text-4xl">AB</p>
                                    </div>
                            </div>

                    </div>

                </div>
            </section>

            {/* Aktivitas */}
            <section class="container mx-auto mb-10">
                <h2 class="text-center font-bold text-3xl text-primary">Aktivitas</h2>

                {/* List Aktivitas */}
                <div class="w-7/12 flex flex-col items-center mt-5 mx-auto border border-customGray rounded-xl">
                    {/* Warning Vector */}
                    <div class="mx-auto w-64 mt-10">
                        <img src="./assets/warningActivity.png" alt=""/>
                    </div>
                    {/* Text */}
                    <div class="mx-auto mt-5 w-60">
                        <h3 class="text-center text-2xl">Tidak Ada Aktivitas</h3>
                        <p class="text-center mt-5 text-xs text-customGray">Cari aktivitas melalui fitur jadwal donor darah</p>
                    </div>
                    {/* Button Jadwal Donor */}
                    <div class=" flex flex-col items-center mx-auto mb-10">
                        <button class="flex items-center rounded-3xl mt-8 px-6 py-3 bg-greyButton text-white text-sm font-medium hover:bg-greyButtonHover focus:outline-none focus:bg-greyButton">
                            <span>Jadwal Donor</span>
                        </button>
                    </div>
                </div>

            </section>

        </>

    )
}