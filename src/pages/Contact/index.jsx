import React from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();
  const reviews = [
    {
      date: "2023-07-01",
      time: "18:00",
      location: "Restaurant A",
      cuisine: "Italian",
      partySize: 2,
      details: "Great food and service!",
    },
    {
      date: "2023-07-02",
      time: "19:30",
      location: "Restaurant B",
      cuisine: "Mexican",
      partySize: 4,
      details: "Amazing atmosphere and tasty dishes.",
    },
    // Add more reviews here...
  ];

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
                      <Line className="bg-red-400 h-px w-[58%]" />
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
            <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
              <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full"></div>
                <div className="flex flex-col gap-[19px] items-center justify-start mt-[117px]">
                  <Text
                    className="md:text-5xl text-[80px] text-gray-900"
                    size="txtOpenSansRomanBold80"
                  >
                    Review
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-801 w-full"
                    size="txtPoppinsRegular25"
                  >
                    We love hearing from our customers. Feel free to share your
                    experience .
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-center mt-8 md:mt-[50px] w-full">
                  <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[49%] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start rounded-lg w-full">
                      <Input
                        name="food"
                        placeholder="How was the food?"
                        className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-[17px] rounded-lg w-full"
                        type="text"
                        id="food"
                      ></Input>
                      <Input
                        name="exp"
                        placeholder="Was the Reservation booking done perfectly?"
                        className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-[17px] rounded-lg w-full"
                        type="text"
                        id="booking"
                      ></Input>
                      <Input
                        name="hospi"
                        placeholder="How was the Hospitality?"
                        className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-[17px] rounded-lg w-full"
                        type="email"
                        id="hospitability"
                      ></Input>
                      <Input
                        name="rating"
                        type="num"
                        placeholder="Rating"
                        className="p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                        wrapClassName="bg-white-A700 border border-gray-400 border-solid pl-6 pr-[35px] py-4 rounded-lg w-full"
                        id="rating"
                      ></Input>
                      <TextArea
                        className="bg-white-A700 border border-gray-400 border-solid leading-[normal] pb-[35px] pl-6 pr-[35px] pt-[30px] sm:px-5 rounded-lg text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                        name="suggest"
                        placeholder="Any Other Suggestions"
                        id="suggestions"
                      ></TextArea>
                    </div>
                    <Button
                      className="bg-red-400 cursor-pointer min-w-[540px] sm:min-w-full py-[26px] rounded-[12px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                      onClick={() => {
                        const food = document.getElementById("food").value;
                        const booking =
                          document.getElementById("booking").value;
                        const hospitability =
                          document.getElementById("hospitability").value;
                        const rating = document.getElementById("rating").value;
                        const suggestions =
                          document.getElementById("suggestions").value;
                        axios({
                          method: "post",
                          url: "https://restaurant-reservation-app-api.onrender.com/review",
                          headers: {
                            "content-type": "application/x-www-form-urlencoded",
                          },
                          withCredentials: true,
                          data: {
                            food,
                            booking,
                            hospitability,
                            rating,
                          },
                        }).then(
                          (response) => {
                            if (response.status == 200) {
                              alert(response.data.msg);
                              window.location.href = "/";
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
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
