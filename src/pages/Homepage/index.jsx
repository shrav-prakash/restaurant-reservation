import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";

const HomepagePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className=" bg-black  flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
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
                      <Line className="bg-red-400 h-px w-[58%]" />
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

            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start rounded-[16px]">
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="md:text-5xl text-[70px] text-gray-902 text-center"
                      size="txtOpenSansRomanBold70Gray902"
                    >
                      <span className="text-gray-902 font-opensans text-left font-bold">
                        <>
                          Best Restaurant
                          <br />
                          In{" "}
                        </>
                      </span>
                      <span className="text-red-400 font-opensans text-left font-bold">
                        Town.
                      </span>
                    </Text>
                    <Text
                      className="leading-[200.00%] text-gray-802 text-xl w-[91%] sm:w-full text-center"
                      size="txtPoppinsRegular20Gray802"
                    >
                      We provide the best food in town. Enjoy our home delivery
                      and dine-in services.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-[85%] md:w-full">
                    <Button
                      className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[232px] py-[27px] rounded-[16px] text-center text-white text-xl hover:bg-blue-400 transition-colors duration-300"
                      onClick={() => navigate("/reservation")}
                    >
                      Place a Reservation
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="h-[502px] md:h-auto object-cover"
                src="images/img_illustration.png"
                alt="illustration"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start max-w-[1112px] mt-[156px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 text-center"
            size="txtOpenSansRomanBold52"
          >
            Our Locations
          </Text>
          <List
            className="sm:flex-col flex-row font-poppins gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[60px] pb-3 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-center w-full">
              <div className="bg-gradient1 md:h-[541px] h-[549px] pt-2 relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[541px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/ph.avif"
                  alt="imageThree"
                />
              </div>
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 text-center"
                size="txtPoppinsSemiBold25"
              >
                Boat Club
              </Text>
              <Text
                className="mt-[51px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-501 text-center"
                size="txtPoppinsRegular25Gray501"
              >
                Chennai
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center w-full">
              <div className="bg-lime-900_6c h-[549px] relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[549px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/p.jpeg"
                  alt="imageTwo"
                />
              </div>
              <Text
                className="mt-[52px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 text-center"
                size="txtPoppinsSemiBold25"
              >
                Church Street
              </Text>
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-501 text-center"
                size="txtPoppinsRegular25Gray501"
              >
                Bangalore
              </Text>
            </div>
          </List>
        </div>

        <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
