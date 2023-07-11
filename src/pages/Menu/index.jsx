import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                      <Line className="bg-red-400 h-px w-[58%]" />
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
          </div>
          <div className="bg-black-900 flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Our Popular Menu
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem41084.png"
                        alt="PngItem41084"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Spaghetti
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            Rs. 600
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem1447549.png"
                        alt="PngItem1447549"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Gnocchi
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            Rs. 550
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngegg.png"
                        alt="pngegg"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Ravioli
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            Rs. 750
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[95%]"
                        src="images/img_pngwing.png"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[15px] w-full">
                        <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Penne Alla Vodka
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            Rs. 500
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem5290903.png"
                        alt="PngItem5290903"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Pepperoni Pizza
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            Rs. 600
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngwing_270X270.png"
                        alt="pngwing One"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-4 w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Veg Loaded Pizza
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            Rs. 550
                          </Text>
                        </div>
                      </div>
                    </div>
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

export default MenuPage;
