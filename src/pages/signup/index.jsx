import React from "react";

import axios from "axios";

import TextField from "@material-ui/core/TextField";

import { useNavigate } from "react-router-dom";

import Footer from "components/Footer";

import { Button, Img, Input, Line, Text } from "components";

const TwitterloginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className=" bg-black-900  flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1240px] mb-5 mx-auto w-full">
            <header className="bg-black-900 flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                      <Text
                        className="common-pointer text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/menu")}
                      >
                        Menu
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                      <Text
                        className="common-pointer text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/aboutus")}
                      >
                        About us
                      </Text>
                    </div>

                    <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                      <Text
                        className="common-pointer text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/reservation")}
                      >
                        Reservation
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[31px] w-[14%] sm:w-full">
                      <Text
                        className="text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/review")}
                      >
                        Review
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[31px] w-[14%] sm:w-full">
                      <Text
                        className="text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/bookings")}
                      >
                        {" "}
                        Bookings
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="bg-red-400 cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] py-3.5 rounded-[16px] text-center text-sm text-white-A700"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </Button>
                            
                </div>
              </div>
            </header>
            <div className="bg-black-900 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
              <div className="flex flex-col gap-[29px] items-center justify-start mb-[267px] md:px-5 w-[39%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                  size="txtGilroySemiBold32"
                >
                  Sign Up to GS
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                    <Text
                      className="text-gray-50 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Email
                    </Text>
                    <Input
                      name="email"
                      placeholder="jane@gmail.com"
                      className="font-medium p-0 placeholder:text-blue_gray-300 sm:pr-5 text-base text-blue_gray-200 text-left w-full"
                      wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pb-[13px] pl-[11px] pr-[35px] pt-[18px] rounded-lg w-full"
                      type="email"
                      id="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                    <Text
                      className="text-gray-50 text-lg"
                      size="txtGilroyMedium18"
                      required
                    >
                      Password
                    </Text>
                    <Input
                      name="Group10198"
                      placeholder="Enter Password"
                      className="font-medium p-0 placeholder:text-blue_gray-200 sm:pr-5 text-base text-blue_gray-200 text-left w-full"
                      wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pl-3 pr-[35px] py-[17px] rounded-lg w-full"
                      type="password"
                      id="password"
                      required
                    ></Input>
                  </div>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[381px] mt-[15px] text-gray-50 text-lg"
                  ></a>
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                    <Text
                      className="text-gray-50 text-lg"
                      size="txtGilroyMedium18"
                      required
                    >
                      Re Enter Password
                    </Text>
                    <Input
                      name="Group10198"
                      placeholder="Re Enter Password"
                      className="font-medium p-0 placeholder:text-blue_gray-200 sm:pr-5 text-base text-blue_gray-200 text-left w-full"
                      wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid pl-3 pr-[35px] py-[17px] rounded-lg w-full"
                      type="password"
                      id="repassword"
                      required
                    ></Input>
                  </div>
                  <br></br>

                  <div className="flex justify-center w-full">
                    <Button
                      className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[200px] py-[17px] rounded-[16px] text-center text-white text-xl hover:bg-blue-400 transition-colors duration-300 mr-5"
                      onClick={() => {
                        const email = document.getElementById("email").value;
                        const password =
                          document.getElementById("password").value;
                        const repassword =
                          document.getElementById("repassword").value;
                        axios({
                          method: "post",
                          url: "https://restaurant-reservation-app-api.onrender.com/sign-up",
                          withCredentials: true,
                          headers: {
                            "content-type": "application/x-www-form-urlencoded",
                          },
                          data: {
                            email,
                            password,
                            repassword,
                          },
                        }).then(
                          (response) => {
                            if (response.status == 200) {
                              window.location.href = "./login";
                            }
                          },
                          (error) => {
                            alert(
                              error.response.data.errors
                                ? error.response.data.errors[0].msg
                                : error.response.data.msg
                            );
                          }
                        );
                      }}
                    >
                      Sign Up
                    </Button>

                    <Button
                      className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[200px] py-[17px] rounded-[16px] text-center text-white text-xl hover:bg-yellow-400 transition-colors duration-300"
                      onClick={() => navigate("/login")}
                    >
                      Already Signed Up?{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default TwitterloginPage;
