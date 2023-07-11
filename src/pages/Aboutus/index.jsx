import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <header className="bg-black-900 flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-blue-400 hover:underline-red"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                      <Text
                        className="common-pointer text-base text-blue-400 hover:underline-red"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/menu")}
                      >
                        Menu
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                      <Text
                        className="common-pointer text-base text-blue-400 hover:underline-red"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/aboutus")}
                      >
                        About us
                      </Text>
                      <Line className="bg-red-400 h-px w-[58%]" />
                    </div>

                    <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                      <Text
                        className="common-pointer text-base text-blue-400 hover:underline-red"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/reservation")}
                      >
                        Reservation
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[31px] w-[14%] sm:w-full">
                      <Text
                        className="common-pointer text-base text-blue-400 hover:underline-red"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/review")}
                      >
                        Review
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[31px] w-[14%] sm:w-full">
                      <Text
                        className="common-pointer text-base text-blue-400 hover:underline-red"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Text
              className="leading-[200.00%] text-gray-801 text-xl text-center"
              size="txtPoppinsRegular20"
            >
              Welcome to Garrisons, where we blend the flavors of the Wild West
              with the vibrant spices of India. We take pride in being the
              ultimate destination for those seeking a unique and unforgettable
              dining experience. With our tagline, "Authentic Western Food with
              Indian Tadka," we offer a tantalizing fusion of two rich culinary
              traditions that will leave your taste buds craving for more. At
              Garrisons, we believe that food is an art form, and our dedicated
              team of talented chefs is committed to crafting dishes that are
              both visually stunning and bursting with incredible flavors. Every
              plate that leaves our kitchen tells a story of our passion for
              culinary excellence.
            </Text>
            <div className="md:h-[559px] h-[560px] relative w-[560px] sm:w-full">
              <div className="bg-bluegray-100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[57px] md:px-10 sm:px-5 rounded-[50%] w-[560px]">
                <div className="bg-bluegray-100_63 h-[445px] rounded-[50%] w-[445px]"></div>
              </div>
              <Img
                className="absolute h-[354px] inset-[0] justify-center m-auto rounded-[50%] w-[354px]"
                src="images/img_unsplash5dsznc.png"
                alt="unsplash5dsZnC"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Img
              className="h-[629px] md:h-auto object-cover"
              src="images/img_unsplashlrawct.png"
              alt="unsplashlRAWcT"
            />
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start pl-10">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 w-full text-center"
                  size="txtTinosBold52Gray900"
                >
                  <span className="text-red-400 font-opensans text-left font-bold">
                    Owner
                  </span>
                  <span className="text-orange-600 font-opensans text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-red-600 font-opensans text-left font-bold">
                    & Executive Chef
                  </span>
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-801 text-center"
                  size="txtPoppinsRegular40"
                >
                  Aditya Kumar
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="md:text-5xl text-[80px] text-amber-800_6c"
                  size="txtTinosBold80"
                >
                  “
                </Text>
                <Text
                  className="italic leading-[200.00%] text-3xl sm:text-[26px] md:text-[28px] text-gray-801 w-full text-center"
                  size="txtPoppinsLightItalic30"
                >
                  Where the Wild West Meets Spicy Delights - A Taste Sensation
                  Like No Other!
                </Text>
                <Text
                  className="md:ml-[0] ml-[455px] rotate-[180deg] md:text-5xl text-[80px] text-amber-800_6c"
                  size="txtTinosBold80"
                >
                  “
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutusPage;
