import React from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://restaurant-reservation-app-api.onrender.com/get-reservations",
      withCredentials: true,
    })
      .then(
        (res) => {
          if (!res.data.reservations) {
            alert(res.data.msg);
          } else {
            res.data.reservations.map(
              (reservation) =>
                (reservation.date = new Date(reservation.date).toDateString())
            );
            setBookings(res.data.reservations);
          }
        },
        (error) => {
          alert(
            error.response.data.errors
              ? error.response.data.errors[0].msg
              : error.response.data.msg
          );
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
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
                <Line className="bg-red-400 h-px w-[58%]" />
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
      {loading ? (
        <>Loading....</>
      ) : (
        <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center w-full">
              <div className="items-center">
                <h1
                  style={{
                    fontSize: "30px",
                    marginBottom: "10px",
                    color: "#333",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  View your Bookings
                </h1>
                <div
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    overflowX: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    padding: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th
                          style={{
                            backgroundColor: "#F2F2F2",
                            padding: "10px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            color: "red",
                          }}
                        >
                          Date
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F2F2F2",
                            padding: "10px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            color: "red",
                          }}
                        >
                          Time
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F2F2F2",
                            padding: "10px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            color: "red",
                          }}
                        >
                          Location
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F2F2F2",
                            padding: "10px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            color: "red",
                          }}
                        >
                          Cuisine
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F2F2F2",
                            padding: "10px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            color: "red",
                          }}
                        >
                          Party Size
                        </th>
                        <th
                          style={{
                            backgroundColor: "#F2F2F2",
                            padding: "10px",
                            textAlign: "left",
                            borderBottom: "1px solid #ddd",
                            color: "red",
                          }}
                        >
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings?.map((booking, index) => (
                        <tr key={index}>
                          <td
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              borderBottom: "1px solid #ddd",
                              color: "black",
                            }}
                          >
                            {booking.date}
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              borderBottom: "1px solid #ddd",
                              color: "black",
                            }}
                          >
                            {booking.timeslot}
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              borderBottom: "1px solid #ddd",
                              color: "black",
                            }}
                          >
                            {booking.location}
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              borderBottom: "1px solid #ddd",
                              color: "black",
                            }}
                          >
                            {booking.cuisine}
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              borderBottom: "1px solid #ddd",
                              color: "black",
                            }}
                          >
                            {booking.num_seats}
                          </td>
                          <td
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              borderBottom: "1px solid #ddd",
                              color: "black",
                            }}
                          >
                            {booking.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>{" "}
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      )}
    </>
  );
};

export default ContactPage;
