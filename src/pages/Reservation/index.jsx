import React from "react";
import TextField from "@material-ui/core/TextField";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const timeOptionsList = [
  { label: "12:00PM", value: "12:00PM" },
  { label: "2:00PM", value: "2:00PM" },
  { label: "4:00PM", value: "4:00PM" },
  { label: "6:00PM", value: "6:00PM" },
  { label: "8:00PM", value: "8:00PM" },
];

const locationlist = [
  { label: "Chennai", value: "Chennai" },
  { label: "Bangalore", value: "Bangalore" },
];

const cuisinelist = [
  { label: "Chinese", value: "Chinese" },
  { label: "Continental", value: "Continental" },
  { label: "Italian", value: "Italian" },
];

const partysizeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReservationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
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

                    <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px] ">
                      <Text
                        className="common-pointer text-base text-blue-400"
                        size="txtOpenSansRomanRegular16Gray900cc"
                        onClick={() => navigate("/reservation")}
                      >
                        Reservation
                      </Text>
                      <Line className="bg-red-400 h-px w-[58%]" />
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[657px] md:h-auto object-cover rounded-[20px]"
              src="images/img_rectangle150.png"
              alt="Rectangle150"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-5xl text-[70px] text-gray-900"
                size="txtOpenSansRomanBold70"
              >
                Book a table
              </Text>
              <div className="flex flex-col font-poppins gap-10 items-center justify-start mt-[60px] w-full">
                <div>
                  <input
                    className="bg-white-A700 border border-gray-400 border-solid sm:pl-5 pl-[35px] py-[35px] rounded-[20px] text-gray-500 text-left text-xl w-full"
                    type="date"
                    name="date"
                    placeholder="date"
                    min={new Date().toISOString().split("T")[0]}
                    id="date"
                    required
                  />
                  <br />
                </div>

                <SelectBox
                  className="bg-white-A700 border border-gray-400 border-solid sm:pl-5 pl-[35px] py-[35px] rounded-[20px] text-gray-500 text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="time"
                  options={timeOptionsList}
                  isSearchable={false}
                  placeholder="Time"
                  id="timeslot"
                  required
                />
                <SelectBox
                  className="bg-white-A700 border border-gray-400 border-solid sm:pl-5 pl-[35px] py-[35px] rounded-[20px] text-gray-500 text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="location"
                  options={locationlist}
                  isSearchable={false}
                  placeholder="Location"
                  id="location"
                  required
                />
                <SelectBox
                  className="bg-white-A700 border border-gray-400 border-solid sm:pl-5 pl-[35px] py-[35px] rounded-[20px] text-gray-500 text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="cuisine"
                  options={cuisinelist}
                  isSearchable={false}
                  placeholder="Cuisine"
                  id="cuisine"
                  required
                />
                <input
                  className="bg-white-A700 border border-gray-400 border-solid sm:pl-5 pl-[35px] py-[35px] rounded-[20px] text-gray-500 text-left text-xl w-full"
                  type="text"
                  name="details"
                  placeholder="details"
                  id="details"
                />
                <input
                  className="bg-white-A700 border border-gray-400 border-solid sm:pl-5 pl-[35px] py-[35px] rounded-[20px] text-gray-500 text-left text-xl w-full"
                  type="num"
                  name="numi"
                  placeholder="Party Size"
                  id="partySize"
                  required
                />
              </div>
              <Button
                className="common-pointer bg-red-400 cursor-pointer font-poppins font-semibold min-w-[475px] sm:min-w-full mt-10 py-[35px] rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
                onClick={() => {
                  const partySize = document.getElementById("partySize").value;
                  const date = document.getElementById("date").value;
                  const details = document.getElementById("details").value;
                  const time =
                    document.getElementById("timeslot").childNodes[3].value;
                  const cuisine =
                    document.getElementById("cuisine").childNodes[3].value;
                  const location =
                    document.getElementById("location").childNodes[3].value;
                  console.log(location);
                  axios({
                    method: "post",
                    withCredentials: true,
                    url: "https://restaurant-reservation-app-api.onrender.com/add-reservation",
                    headers: {
                      "content-type": "application/x-www-form-urlencoded",
                    },
                    data: {
                      date,
                      time,
                      partySize,
                      details,
                      cuisine,
                      location,
                    },
                  }).then(
                    (response) => {
                      if (response.status == 200) {
                        alert(response.data.msg);
                        window.location.href = "/bookings";
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
                Book now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ReservationPage;
