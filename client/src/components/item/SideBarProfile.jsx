import { Link, NavLink } from 'react-router-dom';

export const SideBarProfile = () => {
    return (
        <>
            <div className="w-auto">
                <h2 className="font-bold text-primary text-xl mb-3">Edit Akun</h2>
                <ul>
                    <NavLink
                        to={'/editProfile'}
                        className={({ isActive }) =>
                            isActive
                                ? 'font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary '
                                : 'text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold'
                        }>
                        <div class="group relative">
                            <li>Ubah Profile</li>
                            <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-[80%]"></div>
                        </div>
                    </NavLink>
                    <NavLink
                        to={'/editPassword'}
                        className={({ isActive }) =>
                            isActive
                                ? 'font-bold text-lg underline underline-offset-8 decoration-[4px] decoration-primary '
                                : 'text-black text-lg font-medium cursor-pointer hover:text-primary hover:font-bold'
                        }>
                        <div class="group relative mt-3">
                            <li>Ubah Password</li>
                            <div class="bg-primary h-[3px] w-[0%] left-0 -bottom-[4px] absolute duration-300 group-hover:w-full"></div>
                        </div>
                    </NavLink>
                </ul>
            </div>
        </>
    );
};