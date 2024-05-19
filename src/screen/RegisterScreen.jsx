import React from "react";
import MobileLayout from "../layout/MobileLayout";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/interface/Button";
import { AiOutlineEye } from "react-icons/ai";
import { Form, Formik } from "formik";
import { userRegisterSchema } from "../utils/schemas";
import { registerValues } from "../utils/initialValues";
import { useDispatch } from "react-redux";
import { userRegister } from "../features/user/userSlice";
import { addCountryCode } from "../utils/static";
import ErrorInput from "../components/interface/ErrorInput";

const LoginScreen = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <>
      <MobileLayout>
        <div className="w-full h-full justify-start items-center flex flex-col gap-y-4 pt-[30%]">
          <div className="flex flex-col h-fit gap-y-1 text-center items-center justify-center mb-8">
            <h1 className="text-[18px] font-bold">Buat Akun</h1>
            <p className="text-[12px] text-gray-500">
              Selamat datang di Apotek Amanah, website ini digunakan untuk
              mempermudah pemesanan obat Anda
            </p>
          </div>
          <Formik
            initialValues={registerValues}
            validationSchema={userRegisterSchema}
            autoComplete={"off"}
            onSubmit={(values, actions) => {
              let phone = addCountryCode(values.phoneNumber);
              values.phoneNumber = phone;
              dispatch(userRegister(values, navigate));
            }}
          >
            {(props) => {
              const { values, handleChange, errors, handleSubmit } = props;
              return (
                <>
                  <Form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col justify-center items-center gap-y-5"
                  >
                    <div className="flex flex-col w-full gap-y-4">
                      <div className="flex flex-col gap-y-1 w-full h-[70px] relative">
                        <h1 className="text-[13px]">Nama Lengkap</h1>
                        <input
                          onChange={handleChange}
                          name="fullname"
                          type="text"
                          placeholder="Ketik nama lengkap kamu .."
                          className="input border-gray-400 w-full text-[13px]"
                        />
                      </div>
                      <ErrorInput text={errors.fullname} />
                      <div className="flex flex-col gap-y-1 w-full h-[70px] relative">
                        <h1 className="text-[13px]">Nomor Telefon</h1>
                        <input
                          onChange={handleChange}
                          name="phoneNumber"
                          type="text"
                          placeholder="Ketik nomor telefon kamu .."
                          className="input border-gray-400 w-full text-[13px] pl-14"
                        />
                        <div className="bg-gray-500 text-[13px] text-white absolute px-2.5 left-0 bottom-0 h-[66%] rounded-l-lg flex justify-center items-center">
                          +62
                        </div>
                      </div>
                      {/* Error */}
                      <ErrorInput text={errors.phoneNumber} />
                      <div className="flex flex-col gap-y-1 w-full h-[70px] relative">
                        <h1 className="text-[13px]">Password</h1>
                        <input
                          onChange={handleChange}
                          name="password"
                          type="password"
                          placeholder="Ketik password kamu .."
                          className="input border-gray-400 w-full text-[13px]"
                        />
                        <div className=" text-gray-700 absolute right-4 bottom-3.5">
                          <AiOutlineEye className="size-5" />
                        </div>
                      </div>
                      <ErrorInput text={errors.password} />
                    </div>

                    <div className="text-[12px] text-gray-600 mt-5">
                      Sudah Punya Akun?{" "}
                      <Link to={"/login"}>
                        <u>Masuk di sini</u>
                      </Link>
                    </div>

                    <Button
                      label={"Buat Akun Saya"}
                      className={"text-[14px] w-full mt-4"}
                    />
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </MobileLayout>
    </>
  );
};

export default LoginScreen;
