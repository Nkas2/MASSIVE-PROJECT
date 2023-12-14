import AlertSignUpSuccess from "./AlertSignUpSuccess";
import CloseIcon from "@mui/icons-material/Close";
import ButtonLink from "./ButtonLInk";

const AlertSignUpSuccessComp = ({ close }) => {
  return (
    <AlertSignUpSuccess>
      <div className="relative">
        <div className="absolute -top-5 -right-10">
          <button onClick={close}>
            <CloseIcon fontSize="large" className="text-[#404040]" />
          </button>
        </div>
        <div className="w-72">
          <img src="./assets/ceklis.svg" className="w-full" alt="" />
        </div>
        <h1 className="mt-5 text-3xl font-bold text-center">Berhasil !</h1>
        <p className="text-[#969696] text-center text-xs mb-5">
          Akun Berhasil Dibuat
        </p>
        <ButtonLink text={"Selanjutnya"} />
      </div>
    </AlertSignUpSuccess>
  );
};

export default AlertSignUpSuccessComp;
