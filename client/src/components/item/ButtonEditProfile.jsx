import { Link } from 'react-router-dom';

export const ButtonEditProfile = () => {
    return (
        <>
            <div className="flex items-center">
                <Link
                    to={'/editProfile'}
                    className="rounded-3xl mt-8 px-6 py-3 font-bodyFont bg-greyButton text-white text-sm font-medium hover:bg-greyButtonHover focus:bg-greyButton">
                    Edit Profile
                </Link>
            </div>
        </>
    );
};