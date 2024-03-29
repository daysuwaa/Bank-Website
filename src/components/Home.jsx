import React from "react";
import Container from "../assets/Container.png";
import Apos from "../assets/Icon-14.png";
import Abstract from "../assets/Abstract Design.png";
import Check from "../assets/Icon-19.png";
import Down from "../assets/Icon-20.png";
import Cards from "../assets/Icon-21.png";
import Start from "../assets/Icon-29.png";
import Flow from "../assets/Icon-30.png";
import Business from "../assets/Icon-31.png";
import Payment from "../assets/Icon-32.png";
import DownA from "../assets/Icon-33.png";
import Education from "../assets/Icon-34.png";
import House from "../assets/Icon-25.png";
import ArrowUp from "../assets/Icon-26.png";
import Briefcase from "../assets/briefcase.fill.png";
import Frame from "../assets/Frame.png";
import Frame2 from "../assets/Frame-2.png";

const Home = () => {
  return (
    <div className="">
      {/* hero section */}
      <div className="flex items-center px-10 p-[3rem]">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1">
          <div>
            <div className="flex">
              <img src={Check} alt="check" className="w-[20px] h-[20px]" />
              <p className="text-white font-lexend text-[14px] font-light pl-2">
                No LLC Required, No Credit Check.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className=" font-bold text-white text-[38px] ">
                Welcome to YourBank Empowering Your{" "}
                <span className="text-[#CAFF33]">Financial Journey</span>
              </p>
            </div>
            <div>
              <p className="text-white font-lexend text-[14px] font-light text-left">
                At YourBank, our mission is to provide comprehensive banking
                solutions that empower individuals and businesses to achieve
                their financial goals. We are committed to delivering
                personalized and innovative services that prioritize our
                customers' needs.
              </p>
            </div>

            <button className="bg-[#CAFF33] mt-7  flex justify-center rounded-full py-3 px-6  lg:justify-start">
              Open Account
            </button>
          </div>
          <div className="p-3 flex justify-end s">
            <img
              src={Container}
              alt="img"
              className="w-[305.45] h-[368.19px} lg:w-[410.192px] lg:h-[501.274px] w-full"
            />
          </div>
        </div>
      </div>

      {/* our products */}
      {/* second section */}
      <p className="font-semibold block text-white text-[38px] text-center">
        Our{" "}
        <span
          style={{ color: "var(--green-60, #CAFF33)" }}
          className="font-semibold "
        >
          Products
        </span>
      </p>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1"
      >
        <div>
          <p
            style={{
              color: "var(--grey-70, #B3B3B3)",
              fontFamily: "Lexend",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "14px",
            }}
            className=" text-center lg:hidden"
          >
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your <br></br>unique financial needs
            and aspirations
          </p>
        </div>
        <div className=" lg:hidden">
          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "flex-start",
              borderRadius: "82px",
              border: "1px solid var(--grey-15, #262626)",
            }}
            className="justify-center items-center lg:hidden"
          >
            <button
              style={{
                borderRadius: "140px",
                padding: "10px 18px",
                background: "#CAFF33",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
              className=" w-[139px] h-[41px] lg:w-[404px] lg:h-[49px] lg:hidden"
            >
              <div
                to="/bank/signup"
                style={{
                  color: "#262626",
                  textAlign: "center",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
                className=""
              >
                For Individuals
              </div>
            </button>
            <button
              style={{
                borderRadius: "140px",
                padding: "10px 18px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                border: "1px solid var(--grey-15, #262626)",
              }}
              className="w-[139px] h-[41px] lg:w-[404px] lg:h-[49px lg:hidden]"
            >
              <div
                to="/bank/login"
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
                className=""
              >
                For Business
              </div>
            </button>
          </div>
        </div>

        {/* end of ss */}

        {/* large screens */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="hidden lg:block mx-[4rem]"
        >
          <p
            style={{
              color: "var(--absolute-white, #FFF)",
              fontSize: "38px",
              fontStyle: "normal",
              fontWeight: "500",
            }}
            className="font-semibold hidden lg:block "
          >
            Our{" "}
            <span
              style={{ color: "var(--green-60, #CAFF33)" }}
              className="font-semibold m"
            >
              Products
            </span>
          </p>
          <div className="hidden lg:block">
            <div className=" flex  ">
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "Lexend",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
                className="  "
              >
                Discover a range of comprehensive and customizable banking
                products at YourBank, designed to suit your unique financial
                needs and aspirations
              </p>
              <div
                style={{
                  display: "flex",
                  padding: "12px",
                  alignItems: "flex-start",
                  borderRadius: "82px",
                  border: "1px solid var(--grey-15, #262626)",
                }}
                className="justify-center items-center  "
              >
                <button
                  style={{
                    borderRadius: "140px",
                    padding: "10px 18px",
                    background: "#CAFF33",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className=" w-[136px] h-[41px]  "
                >
                  <div
                    style={{
                      color: "#262626",
                      textAlign: "center",
                      fontFamily: "lexend",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                  >
                    For Individuals
                  </div>
                </button>
                <button
                  style={{
                    borderRadius: "140px",
                    padding: "10px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid var(--grey-15, #262626)",
                  }}
                  className="w-[136px] h-[41px] "
                >
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "lexend",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                  >
                    For Business
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of ls */}

        <div className=" mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" flex flex-col p-4 my-4 ">
            <img
              src={Briefcase}
              alt="brief"
              className="w-[26px] h-[22px] mx-auto"
            />
            <h3
              style={{
                color: "var(--absolute-white, #FFF)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "24px",
                paddingLeft: "8px",
              }}
              className="mx-auto pt-5 font-bold text-md lg:text-lg"
            >
              Checking Accounts
            </h3>
            <p
              style={{
                color: "var(--grey-70,#B3B3B3)",
                textAlign: "center",
                padding: "5px",
              }}
            >
              Enjoy easy and convenient access to your funds with our range of
              checking account options. Benefit from features such as online and
              mobile banking, debit cards, and free ATM access.
            </p>
          </div>

          <div className=" flex flex-col p-4 my-4 ">
            <img src={Down} alt="brief" className="w-[26px] h-[22px] mx-auto" />
            <h3
              style={{
                color: "var(--absolute-white, #FFF)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "24px",
                paddingLeft: "8px",
              }}
              className="mx-auto pt-5 font-bold text-md lg:text-lg"
            >
              Savings Account
            </h3>
            <p
              style={{
                color: "var(--grey-70,#B3B3B3)",
                textAlign: "center",
                padding: "5px",
              }}
            >
              Build your savings with our competitive interest rates and
              flexible savings account options. Whether you're saving for a
              specific goal or want to grow your wealth over time, we have the
              right account for you.
            </p>
          </div>

          <div className=" flex flex-col p-4 my-4 ">
            <img
              src={Cards}
              alt="brief"
              className="w-[26px] h-[22px] mx-auto"
            />
            <h3
              style={{
                color: "var(--absolute-white, #FFF)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "24px",
                paddingLeft: "8px",
              }}
              className="mx-auto pt-5 font-bold text-md lg:text-lg"
            >
              Loans and Mortgages
            </h3>
            <p
              style={{
                color: "var(--grey-70,#B3B3B3)",
                textAlign: "center",
                padding: "5px",
              }}
            >
              Realize your dreams with our flexible loan and mortgage options.
              From personal loans to home mortgages, our experienced loan
              officers are here to guide you through the application process and
              help you secure the funds you need.
            </p>
          </div>
        </div>

        {/* Use case small screen*/}
        <div
          style={{ textAlign: "center" }}
          className="block sm:block lg:hidden md:block"
        >
          <p
            style={{
              color: "var(--green-60, #CAFF33)",
              fontSize: "28px",
              fontFamily: "lexend",
            }}
            className="font-semibold"
          >
            Use case
          </p>
          <p
            style={{
              color: "var(--grey-70, #B3B3B3)",
              fontFamily: "lexend",
              fontSize: "14px",
              paddingBottom: "3rem",
            }}
            className="mx-7"
          >
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>

          <div
            style={{
              border: "1px solid #262626",
              borderRadius: "12px",
              width: "358px",
              height: "370px",
              margin: "auto",
              position: "relative",
            }}
          >
            <img
              src={Abstract}
              alt="abs"
              style={{
                width: "118px",
                height: "112px",
                transform: "rotate(-90deg)",
                position: "absolute",
              }}
            />
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                padding: "1rem",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                gap: "14px",
                paddingTop: "2.5rem",
              }}
            >
              <div className="w-[154px] h-[160px]">
                <div
                  style={{
                    display: "flex",
                    padding: "20px 14px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    background: "var(--grey-10, #1A1A1A)",
                    borderRadius: "12px",
                    flex: "1 0 0",
                    border: "1px solid #262626",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, 1A1A1A)",
                    }}
                  >
                    <img
                      src={Frame}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                  >
                    Managing Personal Finances
                  </p>
                </div>
              </div>

              <div className="w-[154px] h-[160px] ">
                <div
                  style={{
                    display: "flex",
                    padding: "20px 14px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    background: "var(--grey-10, #1A1A1A)",
                    borderRadius: "12px",
                    flex: "1 0 0",
                    border: "1px solid #262626",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, #1A1A1A)",
                    }}
                  >
                    <img
                      src={Frame2}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                  >
                    Saving for the <br />
                    Future
                  </p>
                </div>
              </div>

              <div className="w-[154px] h-[160px]">
                <div
                  style={{
                    display: "flex",
                    padding: "20px 14px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    background: "var(--grey-10, #1A1A1A)",
                    borderRadius: "12px",
                    flex: "1 0 0",
                    border: "1px solid #262626",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, #1A1A1A)",
                    }}
                  >
                    <img
                      src={House}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                  >
                    House Ownership
                  </p>
                </div>
              </div>

              <div className="w-[154px] h-[160px]">
                <div
                  style={{
                    display: "flex",
                    padding: "20px 14px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    background: "var(--grey-10, #1A1A1A)",
                    borderRadius: "12px",
                    flex: "1 0 0",
                    border: "1px solid #262626",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, #1A1A1A)",
                    }}
                  >
                    <img
                      src={Education}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                    }}
                  >
                    Education Funding
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* for individuals */}
          <div>
            <p
              style={{
                color: "var(--absolute-white, #FFF)",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                paddingTop: "2rem",
                fontFamily: "lexend",
              }}
            >
              For Individuals
            </p>
            <p
              style={{
                color: "var(--grey-70, #B3B3B3)",
                fontFamily: "lexend",
                fontSize: "14px",
                paddingBottom: "2rem",
              }}
              className="px-10"
            >
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
          </div>
          <div
            style={{
              display: "flex",
              padding: "0px 50px",
              flexDirection: "column",
              gap: "30px",
              alignSelf: "stretch",
            }}
          >
            <div>
              <h1
                style={{
                  color: "var(--green-60, #CAFF33)",
                  textAlign: "center",
                  fontSize: "40px",
                }}
                className="font-bold"
              >
                78%
              </h1>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  textAlign: "center",
                  fontSize: "14px",
                  fontFamily: "lexend",
                }}
              >
                Secure Retirement Planning
              </p>
              <p
                className="pt-3 text-lg"
                style={{ color: "var(--grey-15, #262626)" }}
              >
                -----------------------
              </p>
            </div>
            <div>
              <h1
                style={{
                  color: "var(--green-60, #CAFF33)",
                  textAlign: "center",
                  fontSize: "40px",
                }}
                className="font-bold"
              >
                63%
              </h1>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  textAlign: "center",
                  fontSize: "14px",
                  fontFamily: "lexend",
                }}
              >
                Manageable Debts Consolidation
              </p>
              <p
                className="pt-3 text-lg"
                style={{ color: "var(--grey-15, #262626)" }}
              >
                ------------------------
              </p>
            </div>
            <div>
              <h1
                style={{
                  color: "var(--green-60, #CAFF33)",
                  textAlign: "center",
                  fontSize: "40px",
                }}
                className="font-bold"
              >
                91%
              </h1>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  textAlign: "center",
                  fontSize: "14px",
                  fontFamily: "lexend",
                }}
              >
                Reducing Financial burdens
              </p>
              <p
                className="pt-3 text-lg"
                style={{ color: "var(--grey-15, #262626)" }}
              >
                ------------------------
              </p>
            </div>
            <div
              style={{
                display: "flex",
                padding: "14px 20px",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  borderRadius: "82px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  width: "118px",
                  height: "48px",
                }}
              >
                <p className="text-white font-lexend">Learn More</p>
              </button>
            </div>
          </div>

          {/* for businesss */}

          <div
            style={{ textAlign: "center" }}
            className="block lg:hidden md:block"
          >
            <div
              style={{
                border: "1px solid #262626",
                borderRadius: "12px",
                width: "358px",
                height: "370px",
                margin: "auto",
                position: "relative",
              }}
            >
              <img
                src={Abstract}
                alt="abs"
                style={{
                  width: "118px",
                  height: "112px",
                  transform: "rotate(-90deg)",
                  position: "absolute",
                }}
              />
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  padding: "1rem",
                  justifyContent: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  gap: "14px",
                  paddingTop: "2.5rem",
                }}
              >
                <div className=" w-[154px] h-[160px]">
                  <div
                    style={{
                      display: "flex",
                      padding: "20px 14px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "14px",
                      background: "var(--grey-10, #1A1A1A)",
                      borderRadius: "12px",
                      flex: "1 0 0",
                      border: "1px solid #262626",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "12px",
                        border: "1px solid var(--grey-15, #262626)",
                        background: "var(--grey-19, 1A1A1A)",
                      }}
                    >
                      <img
                        src={Start}
                        alt="frame"
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #CAFF33",
                          background:
                            "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                          padding: "12px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      Startups and Entrepreneurs
                    </p>
                  </div>
                </div>
                <div className=" w-[154px] h-[160px] ">
                  <div
                    style={{
                      display: "flex",
                      padding: "20px 14px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "14px",
                      background: "var(--grey-10, #1A1A1A)",
                      borderRadius: "12px",
                      flex: "1 0 0",
                      border: "1px solid #262626",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "12px",
                        border: "1px solid var(--grey-15, #262626)",
                        background: "var(--grey-19, #1A1A1A)",
                      }}
                    >
                      <img
                        src={Flow}
                        alt="frame"
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #CAFF33",
                          background:
                            "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                          padding: "12px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      Cash Flow Management
                    </p>
                  </div>
                </div>
                <div className="  w-[154px] h-[160px]">
                  <div
                    style={{
                      display: "flex",
                      padding: "20px 14px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "14px",
                      background: "var(--grey-10, #1A1A1A)",
                      borderRadius: "12px",
                      flex: "1 0 0",
                      border: "1px solid #262626",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "12px",
                        border: "1px solid var(--grey-15, #262626)",
                        background: "var(--grey-19, #1A1A1A)",
                      }}
                    >
                      <img
                        src={Business}
                        alt="frame"
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #CAFF33",
                          background:
                            "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                          padding: "12px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      Business Expansion
                    </p>
                  </div>
                </div>
                <div className=" w-[154px] h-[160px]">
                  <div
                    style={{
                      display: "flex",
                      padding: "20px 14px",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "14px",
                      background: "var(--grey-10, #1A1A1A)",
                      borderRadius: "12px",
                      flex: "1 0 0",
                      border: "1px solid #262626",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "12px",
                        border: "1px solid var(--grey-15, #262626)",
                        background: "var(--grey-19, #1A1A1A)",
                      }}
                    >
                      <img
                        src={Payment}
                        alt="frame"
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #CAFF33",
                          background:
                            "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                          padding: "12px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      Business Expansion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p
                style={{
                  color: "var(--absolute-white, #FFF)",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  paddingTop: "2rem",
                  fontFamily: "lexend",
                }}
              >
                For Business
              </p>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  paddingBottom: "2rem",
                }}
                className="px-10"
              >
                {" "}
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                YourBank is committed to providing the right tools and support
                to achieve them
              </p>
            </div>
            <div
              style={{
                display: "flex",
                padding: "0px 50px",
                flexDirection: "column",
                gap: "30px",
                alignSelf: "stretch",
              }}
            >
              <div>
                <h1
                  style={{
                    color: "var(--green-60, #CAFF33)",
                    textAlign: "center",
                    fontSize: "40px",
                  }}
                  className="font-bold"
                >
                  65%
                </h1>
                <p
                  style={{
                    color: " var(--grey-70, #B3B3B3)",
                    textAlign: "center",
                    fontSize: "14px",
                    fontFamily: "lexend",
                  }}
                >
                  Cash Flow Management
                </p>
                <p
                  className="pt-3 text-lg"
                  style={{ color: " var(--grey-15, #262626)" }}
                >
                  -----------------------
                </p>
              </div>
              <div>
                <h1
                  style={{
                    color: "var(--green-60, #CAFF33)",
                    textAlign: "center",
                    fontSize: "40px",
                  }}
                  className="font-bold"
                >
                  70%
                </h1>
                <p
                  style={{
                    color: " var(--grey-70, #B3B3B3)",
                    textAlign: "center",
                    fontSize: "14px",
                    fontFamily: "lexend",
                  }}
                >
                  Drive Business Expansion
                </p>
                <p
                  className="pt-3 text-lg"
                  style={{ color: " var(--grey-15, #262626)" }}
                >
                  ------------------------
                </p>
              </div>
              <div>
                <h1
                  style={{
                    color: "var(--green-60, #CAFF33)",
                    textAlign: "center",
                    fontSize: "40px",
                  }}
                  className="font-bold"
                >
                  45%
                </h1>
                <p
                  style={{
                    color: " var(--grey-70, #B3B3B3)",
                    textAlign: "center",
                    fontSize: "14px",
                    fontFamily: "lexend",
                  }}
                >
                  Streamline payroll processing
                </p>
                <p
                  className="pt-3 text-lg"
                  style={{ color: " var(--grey-15, #262626)" }}
                >
                  ------------------------
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  padding: "14px 20px",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    border: "1px solid var(--grey-15, #262626)",
                    background: "var(--grey-11, #1C1C1C)",
                    width: "118px",
                    height: "48px",
                  }}
                >
                  <p className="text-white font-lexend">Learn More</p>
                </button>
              </div>
            </div>
          </div>

          {/* our features */}
          <p
            style={{
              color: "var(--absolute-white, #FFF)",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "500",
              textAlign: "center",
              paddingTop: "1rem",
            }}
            className="font-semibold block lg:hidden"
          >
            Our{" "}
            <span
              style={{ color: "var(--green-60, #CAFF33)" }}
              className="font-semibold "
            >
              Features
            </span>
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1"
          >
            <div>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "Lexend",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "14px",
                }}
                className=" text-center lg:hidden mx-7"
              >
                Experience a host of powerful features at YourBank, including
                seamless online banking, secure transactions, and personalized
                financial insights, all designed to enhance your banking
                experience
              </p>
            </div>
            <div className=" lg:hidden">
              <div
                style={{
                  display: "flex",
                  padding: "12px",
                  alignItems: "flex-start",
                  borderRadius: "82px",
                  border: "1px solid var(--grey-15, #262626)",
                }}
                className="justify-center items-center lg:hidden w-[366px] h-[89px] mx-auto"
              >
                <div className="mr-[3.5rem]">
                  <button
                    style={{
                      borderRadius: "140px",
                      padding: "10px 18px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid var(--grey-15, #262626)",
                    }}
                    className=" w-[144px] h-[59px] lg:w-[404px] lg:h-[49px] lg:hidden"
                  >
                    <div
                      to="/bank/signup"
                      style={{
                        color: "#CAFF33",
                        textAlign: "center",
                        fontFamily: "lexend",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "150%",
                      }}
                      className=""
                    >
                      Online Banking
                    </div>
                  </button>
                </div>
                <div className="ml-[-1rem]">
                  <button
                    style={{
                      borderRadius: "140px",
                      padding: "10px 18px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid var(--grey-15, #262626)",
                    }}
                    className="w-[164px] h-[59px] lg:w-[404px] lg:h-[49px lg:hidden]"
                  >
                    <div
                      to="/bank/login"
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontFamily: "lexend",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "150%",
                      }}
                      className=""
                    >
                      Financial Transactions
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "30px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <div className="grid grid-cols-1 grid-rows-4 text-start">
              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <div className="flex">
                  <h1
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontFamily: "lexend",
                      fontSize: "18px",
                      fontStyle: "normal",
                      lineHeight: "27px",
                      flex: "1 0 0",
                    }}
                  >
                    24/7 Account Access
                  </h1>
                  <img
                    src={ArrowUp}
                    alt="arrow"
                    className="w-[24px] h-[24px] "
                  />
                </div>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <div className="flex">
                  <h1
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontFamily: "lexend",
                      fontSize: "18px",
                      fontStyle: "normal",
                      lineHeight: "27px",
                      flex: "1 0 0",
                    }}
                  >
                    Mobile Banking App
                  </h1>
                  <img
                    src={ArrowUp}
                    alt="arrow"
                    className="w-[24px] h-[24px] "
                  />
                </div>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Stay connected to your finances on the go with our
                  user-friendly mobile banking app. Easily manage your accounts,
                  deposit checks, and make payments from your smartphone or
                  tablet.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <div className="flex">
                  <h1
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontFamily: "lexend",
                      fontSize: "18px",
                      fontStyle: "normal",
                      lineHeight: "27px",
                      flex: "1 0 0",
                    }}
                  >
                    Secure Transactions
                  </h1>
                  <img
                    src={ArrowUp}
                    alt="arrow"
                    className="w-[24px] h-[24px] "
                  />
                </div>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Rest assured knowing that your transactions are protected by
                  industry-leading security measures. We employ encryption and
                  multi-factor authentication to safeguard your financial
                  information.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <div className="flex">
                  <h1
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontFamily: "lexend",
                      fontSize: "18px",
                      fontStyle: "normal",
                      lineHeight: "27px",
                      flex: "1 0 0",
                    }}
                  >
                    Bill Pay and Transfers
                  </h1>
                  <img
                    src={ArrowUp}
                    alt="arrow"
                    className="w-[24px] h-[24px] "
                  />
                </div>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Save time and avoid late fees with our convenient bill pay
                  service. Set up recurring payments or make one-time transfers
                  between your accounts with just a few clicks.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="pt-5" style={{ textAlign: "center" }}>
            <p
              style={{
                color: "var(--green-60, #CAFF33)",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "57px",
                textAlign: "center",
              }}
              className="font-extrabold"
            >
              Frequently{" "}
              <span style={{ color: "var(--absolute-white, #FFF)" }}>
                Asked <br></br>Questions
              </span>
            </p>
            <p
              style={{
                color: "var(--grey-70, #B3B3B3)",
                fontFamily: "lexend",
                fontSize: "14px",
                letterSpacing: "-0.084px",
                lineHeight: "21px",
                paddingTop: "15px",
              }}
            >
              {" "}
              Still you have any questions? Contact our Team via
              support@yourbank.com
            </p>
          </div>

          <div
            style={{
              display: "flex",
              padding: "30px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <div className="grid grid-cols-1 grid-rows-4 text-start">
              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  How do I open an account with YourBank?
                </h1>
                <p className="w-[278px] text-gray-400">
                  -----------------------
                </p>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Opening an account with YourBank is easy. Simply visit our
                  website and click on the "Open an Account" button. Follow the
                  prompts, provide the required information, and complete the
                  application process. If you have any questions or need
                  assistance, our customer support team is available to help.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  What documents do I need to provide to apply for a loan?
                </h1>
                <p className="w-[278px] text-gray-400">
                  -----------------------
                </p>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  The documents required for a loan application may vary
                  depending on the type of loan you are applying for. Generally,
                  you will need to provide identification documents (such as a
                  passport or driver's license), proof of income (such as pay
                  stubs or tax returns), and information about the collateral
                  (if applicable). Our loan officers will guide you through the
                  specific requirements during the application process.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  How can I access my accounts online?
                </h1>
                <p className="w-[278px] text-gray-400">
                  -----------------------
                </p>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Accessing your accounts online is simple and secure. Visit our
                  website and click on the "Login" button. Enter your username
                  and password to access your accounts. If you haven't
                  registered for online banking, click on the "Enroll Now"
                  button and follow the registration process. If you need
                  assistance, our customer support team is available to guide
                  you.
                </p>
              </div>

              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "30px",
                }}
              >
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  Are my transactions and personal information secure?
                </h1>
                <p className="w-[278px] text-gray-400">
                  -----------------------
                </p>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  At YourBank, we prioritize the security of your transactions
                  and personal information. We employ industry-leading
                  encryption and multi-factor authentication to enusre that your
                  data is protected. Additionally, we regularly udate our
                  security measures to stay ahead of emerging threats You can
                  bank with confidence knowing that we have robust security
                  systems in place.
                </p>
              </div>

              <div className="flex justify-center pt-[18px]">
                <button
                  style={{
                    display: "flex",
                    borderRadius: "100px",
                    padding: "14px 20px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    border: "1px solid var(--grey-15, #262626)",
                  }}
                  className="w-[154px] h-[49px]"
                >
                  <p
                    style={{
                      color: "white",
                      fontFamily: "lexend",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                  >
                    Load All FAQ's
                  </p>
                  <img src={DownA} alt="down" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* start of large screen  */}
        {/* use case */}
        <div className="lg:block hidden ">
          <p
            style={{
              color: "var(--green-60, #CAFF33)",
              fontSize: "38px",
              fontFamily: "lexend",
            }}
            className="font-semibold mx-[4rem]"
          >
            Use case
          </p>
          <p
            style={{
              color: "var(--grey-70, #B3B3B3)",
              fontFamily: "lexend",
              fontSize: "16px",
              paddingBottom: "3rem",
              margin: "0 3rem",
            }}
          >
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>

          <div>
            <div className="grid grid-cols-2 ">
              {/* first cols */}
              <div>
                <div
                  style={{
                    border: "1px solid #262626",
                    borderRadius: "12px",
                    height: "414px",
                    position: "relative",
                    margin: "0 5rem",
                  }}
                >
                  <img
                    src={Abstract}
                    alt="abs"
                    style={{
                      width: "118px",
                      height: "112px",
                      transform: "rotate(-90deg)",
                      position: "absolute",
                    }}
                  />
                  <div>
                    <div className="grid grid-cols-2 grid-rows-2 px-5 mt-7">
                      <div
                        style={{
                          display: "flex",
                          padding: "24px",
                          flexDirection: "column",
                          gap: "14px",
                          flex: "1 0 0",
                          alignContent: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "174px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "12px",
                            border: "1px solid var(--grey-15, #262626)",
                            background: "var(--grey-19, 1A1A1A)",
                            height: "174px",
                            paddingTop: "15px",
                          }}
                        >
                          <img
                            src={Frame}
                            alt="frame"
                            style={{
                              borderRadius: "50px",
                              border: "1px solid #CAFF33",
                              background:
                                "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                              padding: "12px",
                            }}
                            className="mx-auto"
                          />
                          <p
                            style={{
                              color: "var(--absolute-white, #FFF)",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                            }}
                          >
                            Managing Personal Finances
                          </p>
                        </div>
                      </div>
                      {/* 1 */}
                      <div
                        style={{
                          display: "flex",
                          padding: "24px",
                          flexDirection: "column",
                          gap: "14px",
                          flex: "1 0 0",
                          alignContent: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "174px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "12px",
                            border: "1px solid var(--grey-15, #262626)",
                            background: "var(--grey-19, 1A1A1A)",
                            height: "174px",
                            paddingTop: "15px",
                          }}
                        >
                          <img
                            src={House}
                            alt="frame"
                            style={{
                              borderRadius: "50px",
                              border: "1px solid #CAFF33",
                              background:
                                "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                              padding: "12px",
                              height: "48px",
                              width: "50px",
                            }}
                            className="mx-auto"
                          />
                          <p
                            style={{
                              color: "var(--absolute-white, #FFF)",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              paddingTop: "2px",
                            }}
                          >
                            Saving for the Future
                          </p>
                        </div>
                      </div>
                      {/* 2 */}
                      <div
                        style={{
                          display: "flex",
                          padding: "24px",
                          flexDirection: "column",
                          gap: "14px",
                          flex: "1 0 0",
                          alignContent: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "174px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "12px",
                            border: "1px solid var(--grey-15, #262626)",
                            background: "var(--grey-19, 1A1A1A)",
                            height: "174px",
                            paddingTop: "15px",
                          }}
                        >
                          <img
                            src={House}
                            alt="frame"
                            style={{
                              borderRadius: "50px",
                              border: "1px solid #CAFF33",
                              background:
                                "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                              padding: "12px",
                            }}
                            className="mx-auto"
                          />
                          <p
                            style={{
                              color: "var(--absolute-white, #FFF)",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                            }}
                          >
                            HouseOwnership
                          </p>
                        </div>
                      </div>
                      {/* 3 */}
                      <div
                        style={{
                          display: "flex",
                          padding: "24px",
                          flexDirection: "column",
                          gap: "14px",
                          flex: "1 0 0",
                          alignContent: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "174px",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "12px",
                            border: "1px solid var(--grey-15, #262626)",
                            background: "var(--grey-19, 1A1A1A)",
                            height: "174px",
                            paddingTop: "15px",
                          }}
                        >
                          <img
                            src={Education}
                            alt="frame"
                            style={{
                              borderRadius: "50px",
                              border: "1px solid #CAFF33",
                              background:
                                "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                              padding: "12px",
                            }}
                            className="mx-auto"
                          />
                          <p
                            style={{
                              color: "var(--absolute-white, #FFF)",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                            }}
                          >
                            Education Funding
                          </p>
                        </div>
                      </div>
                      {/* 4 */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end of 1 */}

              {/* start of 2 */}
              <div className=" ">
                <p
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontSize: "26px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontFamily: "lexend",
                  }}
                >
                  For Individuals
                </p>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "16px",
                    paddingBottom: "2rem",
                  }}
                  className="pt-4"
                >
                  For individuals, our mortgage services pave the way to
                  homeownership, and our flexible personal loans provide vital
                  support during various life milestones. We also prioritize
                  retirement planning, ensuring a financially secure future for
                  our customers
                </p>
                <div className="grid grid-cols-3">
                  <div>
                    <h1
                      style={{
                        color: "var(--green-60, #CAFF33)",
                        fontSize: "40px",
                      }}
                      className="font-bold"
                    >
                      78%
                    </h1>
                    <p
                      style={{
                        color: "var(--grey-70, #B3B3B3)",
                        fontSize: "15px",
                        fontFamily: "lexend",
                        lineHeight: "22.5px",
                      }}
                    >
                      Secure Retirement <br></br> Planning
                    </p>
                  </div>
                  {/* 1 */}
                  <div>
                    <h1
                      style={{
                        color: "var(--green-60, #CAFF33)",
                        fontSize: "40px",
                      }}
                      className="font-bold"
                    >
                      63%
                    </h1>
                    <p
                      style={{
                        color: "var(--grey-70, #B3B3B3)",
                        fontSize: "15px",
                        fontFamily: "lexend",
                        lineHeight: "22.5px",
                      }}
                    >
                      Manageable Debt Consideration
                    </p>
                  </div>
                  {/* 2 */}
                  <div>
                    <h1
                      style={{
                        color: "var(--green-60, #CAFF33)",
                        fontSize: "40px",
                      }}
                      className="font-bold"
                    >
                      91%
                    </h1>
                    <p
                      style={{
                        color: "var(--grey-70, #B3B3B3)",
                        fontSize: "15px",
                        fontFamily: "lexend",
                        lineHeight: "22.5px",
                      }}
                    >
                      Reducing financial<br></br> burden
                    </p>
                  </div>
                  {/* 3 */}
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "20px 0px",
                    justifyContent: "start",
                    paddingTop: "2rem",
                  }}
                >
                  <button
                    style={{
                      borderRadius: "82px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-11, #1C1C1C)",
                      width: "118px",
                      height: "48px",
                    }}
                  >
                    <p className="text-white font-lexend">Learn More</p>
                  </button>
                </div>
              </div>
              {/* end of 2 */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      {/* business */}
      <div className="lg:block hidden">
        <div className="grid grid-cols-2 pl-[3rem] ">
          <div>
            <p
              style={{
                color: "var(--absolute-white, #FFF)",
                fontSize: "26px",
                fontStyle: "normal",
                fontWeight: "500",
                fontFamily: "lexend",
              }}
            >
              For Business
            </p>
            <p
              style={{
                color: "var(--grey-70, #B3B3B3)",
                fontFamily: "lexend",
                fontSize: "16px",
                paddingBottom: "2rem",
              }}
              className="pt-4"
            >
              {" "}
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>

            <div className="grid grid-cols-3">
              <div>
                <h1
                  style={{
                    color: "var(--green-60, #CAFF33)",
                    fontSize: "40px",
                  }}
                  className="font-bold"
                >
                  65%
                </h1>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontSize: "15px",
                    fontFamily: "lexend",
                    lineHeight: "22.5px",
                  }}
                >
                  Cash Flow <br></br>Management
                </p>
              </div>
              {/* 1 */}
              <div>
                <h1
                  style={{
                    color: "var(--green-60, #CAFF33)",
                    fontSize: "40px",
                  }}
                  className="font-bold"
                >
                  70%
                </h1>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontSize: "15px",
                    fontFamily: "lexend",
                    lineHeight: "22.5px",
                  }}
                >
                  Drive Business <br></br>Expiration
                </p>
              </div>
              {/* 2 */}
              <div>
                <h1
                  style={{
                    color: "var(--green-60, #CAFF33)",
                    fontSize: "40px",
                  }}
                  className="font-bold"
                >
                  45%
                </h1>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontSize: "15px",
                    fontFamily: "lexend",
                    lineHeight: "22.5px",
                  }}
                >
                  Streamline payroll<br></br> processing
                </p>
              </div>
              {/* 3 */}
            </div>
            <div
              style={{
                display: "flex",
                padding: "20px 0px",
                justifyContent: "start",
                paddingTop: "2rem",
              }}
            >
              <button
                style={{
                  borderRadius: "82px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  width: "118px",
                  height: "48px",
                }}
              >
                <p className="text-white font-lexend">Learn More</p>
              </button>
            </div>
          </div>
          {/* end of cols 1 */}
          <div
            style={{
              border: "1px solid #262626",
              borderRadius: "12px",
              height: "414px",
              position: "relative",
              margin: "0 5rem",
            }}
          >
            <img
              src={Abstract}
              alt="abs"
              style={{
                width: "118px",
                height: "112px",
                transform: "rotate(-90deg)",
                position: "absolute",
              }}
            />
            <div>
              <div className="grid grid-cols-2 grid-rows-2 px-5 mt-7">
                <div
                  style={{
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    gap: "14px",
                    flex: "1 0 0",
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "174px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, 1A1A1A)",
                      height: "174px",
                      paddingTop: "15px",
                    }}
                  >
                    <img
                      src={Start}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                      className="mx-auto"
                    />
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Startups and <br></br> Entrepreneurs
                    </p>
                  </div>
                </div>
                {/* 1 */}
                <div
                  style={{
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    gap: "14px",
                    flex: "1 0 0",
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "174px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, 1A1A1A)",
                      height: "174px",
                      paddingTop: "15px",
                    }}
                  >
                    <img
                      src={Flow}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                        height: "48px",
                        width: "50px",
                      }}
                      className="mx-auto"
                    />
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        paddingTop: "2px",
                      }}
                    >
                      Cash Flow Management
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div
                  style={{
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    gap: "14px",
                    flex: "1 0 0",
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "174px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, 1A1A1A)",
                      height: "174px",
                      paddingTop: "15px",
                    }}
                  >
                    <img
                      src={Business}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                      className="mx-auto"
                    />
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      Business Expansion
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    gap: "14px",
                    flex: "1 0 0",
                    alignContent: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "174px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--grey-15, #262626)",
                      background: "var(--grey-19, 1A1A1A)",
                      height: "174px",
                      paddingTop: "15px",
                    }}
                  >
                    <img
                      src={Payment}
                      alt="frame"
                      style={{
                        borderRadius: "50px",
                        border: "1px solid #CAFF33",
                        background:
                          "linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)",
                        padding: "12px",
                      }}
                      className="mx-auto"
                    />
                    <p
                      style={{
                        color: "var(--absolute-white, #FFF)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >
                      Payment Solutions
                    </p>
                  </div>
                </div>
                {/* 4 */}
              </div>
            </div>
          </div>
          {/* cols 2 */}
        </div>
      </div>

      {/* our features */}
      <div className="lg:block hidden">
        <p
          style={{
            color: "var(--absolute-white, #FFF)",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "500",
            paddingTop: "1rem",
          }}
          className="font-semibold mx-[4rem]"
        >
          Our{" "}
          <span
            style={{ color: "var(--green-60, #CAFF33)" }}
            className="font-semibold"
          >
            Features
          </span>
        </p>
        <div>
          <p
            style={{
              color: "var(--grey-70, #B3B3B3)",
              fontFamily: "Lexend",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "14px",
            }}
            className="  mx-[4rem]"
          >
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial <br></br>insights, all designed to enhance your banking
            experience
          </p>
        </div>
        <div className="grid grid-cols-3 mx-[5.4rem] my-[3rem]">
          <div className="w-[245px] h-[267px]">
            <div className="grid grid-rows-3">
              <div
                style={{
                  padding: "14px 20px",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  className="w-[165px] h-[49px]"
                  style={{
                    borderRadius: "100px",
                    border: "1px solid var(--grey-15, #262626)",
                    background: "var(--grey-10, #1A1A1A)",
                  }}
                >
                  <p style={{ color: "var(--green-60, #CAFF33" }}>
                    Online Banking
                  </p>
                </button>
              </div>

              <div
                style={{
                  padding: "14px 20px",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  className="w-[165px] h-[49px]"
                  style={{
                    borderRadius: "100px",
                    border: "1px solid var(--grey-15, #262626)",
                    background: "var(--grey-10, #1A1A1A)",
                  }}
                >
                  <p style={{ color: "white" }}>Financial Tools</p>
                </button>
              </div>

              <div
                style={{
                  padding: "14px 20px",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  className="w-[165px] h-[49px]"
                  style={{
                    borderRadius: "100px",
                    border: "1px solid var(--grey-15, #262626)",
                    background: "var(--grey-10, #1A1A1A)",
                  }}
                >
                  <p style={{ color: "white" }}>Customer Support</p>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 ">
            <div className="pb-9">
              <div
                style={{
                  borderRadius: "10px",
                  border: "1px solid var(--grey-15, #262626)",
                  background: "var(--grey-11, #1C1C1C)",
                  padding: "2rem 2rem",
                }}
                className="w-[407.5px] h-[227px] "
              >
                <div className="flex">
                  <h1
                    style={{
                      color: "var(--absolute-white, #FFF)",
                      fontFamily: "lexend",
                      fontSize: "18px",
                      fontStyle: "normal",
                      lineHeight: "27px",
                      flex: "1 0 0",
                    }}
                  >
                    24/7 Account Access
                  </h1>
                  <img
                    src={ArrowUp}
                    alt="arrow"
                    className="w-[24px] h-[24px] "
                  />
                </div>
                <p
                  style={{
                    color: "var(--grey-70, #B3B3B3)",
                    fontFamily: "lexend",
                    fontSize: "14px",
                    letterSpacing: "-0.084px",
                    lineHeight: "21px",
                    paddingTop: "15px",
                  }}
                >
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "2rem 2rem",
              }}
              className="w-[407.5px] h-[227px]"
            >
              <div className="flex">
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  Secure Transactions{" "}
                </h1>
                <img src={ArrowUp} alt="arrow" className="w-[24px] h-[24px] " />
              </div>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 ">
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "2rem 2rem",
              }}
              className="w-[407.5px] h-[227px]"
            >
              <div className="flex">
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  Mobile Banking App
                </h1>
                <img src={ArrowUp} alt="arrow" className="w-[24px] h-[24px] " />
              </div>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </p>
            </div>

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "2rem 2rem",
              }}
              className="w-[407.5px] h-[227px]"
            >
              <div className="flex">
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF)",
                    fontFamily: "lexend",
                    fontSize: "18px",
                    fontStyle: "normal",
                    lineHeight: "27px",
                    flex: "1 0 0",
                  }}
                >
                  Bill Pay and Transfer
                </h1>
                <img src={ArrowUp} alt="arrow" className="w-[24px] h-[24px] " />
              </div>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time transfers
                between your accounts with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* end of lg */}

      {/* FAQ */}
      <div className="px-[4rem] lg:block hidden ">
        <p
          style={{
            color: "var(--green-60, #CAFF33)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "57px",
          }}
          className="font-extrabold text-3xl text-center lg:text-4xl lg:text-start"
        >
          Frequently{" "}
          <span style={{ color: "var(--absolute-white, #FFF)" }}>
            Asked Questions
          </span>
        </p>
        <p
          style={{
            color: "var(--grey-70, #B3B3B3)",
            fontFamily: "lexend",
            letterSpacing: "-0.084px",
            lineHeight: "21px",
            paddingTop: "15px",
          }}
          className="text-center lg:text-start text-sm lg:text-sm"
        >
          {" "}
          Still have any questions? Contact our Team via support@yourbank.com
        </p>

        <div className="pt-5">
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 ">
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "30px",
              }}
            >
              <h1
                style={{
                  color: "var(--absolute-white, #FFF)",
                  fontFamily: "lexend",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "27px",
                  flex: "1 0 0",
                }}
              >
                How do I open an account with YourBank?
              </h1>
              <p className="w-[278px] text-gray-400">
                -------------------------------------
              </p>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                Opening an account with YourBank is easy. Simply visit our
                website and click on the "Open an Account" button. Follow the
                prompts, provide the required information, and complete the
                application process. If you have any questions or need
                assistance, our customer support team is available to help.
              </p>
            </div>

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "30px",
              }}
            >
              <h1
                style={{
                  color: "var(--absolute-white, #FFF)",
                  fontFamily: "lexend",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "27px",
                  flex: "1 0 0",
                }}
              >
                What documents do I need to provide to apply for a loan?
              </h1>
              <p className="w-[278px] text-gray-400">
                ------------------------------------
              </p>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                The documents required for a loan application may vary depending
                on the type of loan you are applying for. Generally, you will
                need to provide identification documents (such as a passport or
                driver's license), proof of income (such as pay stubs or tax
                returns), and information about the collateral (if applicable).
                Our loan officers will guide you through the specific
                requirements during the application process.
              </p>
            </div>

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "30px",
              }}
            >
              <h1
                style={{
                  color: "var(--absolute-white, #FFF)",
                  fontFamily: "lexend",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "27px",
                  flex: "1 0 0",
                }}
              >
                How can I access my accounts online?
              </h1>
              <p className="w-[278px] text-gray-400">
                -----------------------------------
              </p>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                Accessing your accounts online is simple and secure. Visit our
                website and click on the "Login" button. Enter your username and
                password to access your accounts. If you haven't registered for
                online banking, click on the "Enroll Now" button and follow the
                registration process. If you need assistance, our customer
                support team is available to guide you.
              </p>
            </div>

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid var(--grey-15, #262626)",
                background: "var(--grey-11, #1C1C1C)",
                padding: "30px",
              }}
            >
              <h1
                style={{
                  color: "var(--absolute-white, #FFF)",
                  fontFamily: "lexend",
                  fontSize: "18px",
                  fontStyle: "normal",
                  lineHeight: "27px",
                  flex: "1 0 0",
                }}
              >
                Are my transactions and personal information secure?
              </h1>
              <p className="w-[278px] text-gray-400">
                -----------------------------------
              </p>
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  letterSpacing: "-0.084px",
                  lineHeight: "21px",
                  paddingTop: "15px",
                }}
              >
                At YourBank, we prioritize the security of your transactions and
                personal information. We employ industry-leading encryption and
                multi-factor authentication to ensure that your data is
                protected. Additionally, we regularly update our security
                measures to stay ahead of emerging threats. You can bank with
                confidence knowing that we have robust security systems in
                place.
              </p>
            </div>
          </div>

          <div className="flex item-center justify-center pt-[18px]">
            <button
              style={{
                display: "flex",
                borderRadius: "100px",
                padding: "14px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                border: "1px solid var(--grey-15, #262626)",
              }}
              className="w-[154px] h-[49px]"
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
                className=""
              >
                Load All FAQ's
              </p>
              <img src={DownA} alt="down" />
            </button>
          </div>
        </div>
      </div>

      {/* testimonials */}
      {/* small screen */}
      <div className="py-[2rem]">
        <h1
          style={{
            color: " #FFF",
            fontFamily: "Lexend",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "57px,",
            textAlign: "center",
            fontSize: "28px",
          }}
          className=" lg:hidden"
        >
          Our{" "}
          <span
            style={{
              color: "var(--green-60, #CAFF33)",
              fontFamily: "Lexend",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "58px",
            }}
          >
            {" "}
            Testimonials{" "}
          </span>
        </h1>
        <div>
          <p
            style={{
              color: "var(--grey-70, #B3B3B3)",
              fontFamily: "Lexend",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "14px",
            }}
            className=" text-center lg:hidden px-2"
          >
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>

        <div className="p-5 lg:hidden">
          <div
            style={{
              display: "flex",
              padding: "12px",
              alignItems: "flex-start",
              borderRadius: "82px",
              border: "1px solid var(--grey-15, #262626)",
            }}
            className="justify-center items-center lg:hidden"
          >
            <button
              style={{
                borderRadius: "140px",
                padding: "10px 18px",
                background: "#CAFF33",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
              className=" w-[139px] h-[41px] lg:w-[404px] lg:h-[49px] lg:hidden"
            >
              <div
                to="/bank/signup"
                style={{
                  color: "#262626",
                  textAlign: "center",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
                className=""
              >
                For Individuals
              </div>
            </button>
            <button
              style={{
                borderRadius: "140px",
                padding: "10px 18px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                border: "1px solid var(--grey-15, #262626)",
              }}
              className="w-[139px] h-[41px] lg:w-[404px] lg:h-[49px lg:hidden]"
            >
              <div
                to="/bank/login"
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
                className=""
              >
                For Business
              </div>
            </button>
          </div>
        </div>
        {/* end of ss */}
        {/* large screens */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="hidden lg:block pt-[2rem]"
        >
          <h1
            style={{
              color: " #FFF",
              fontFamily: "Lexend",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "57px,",
              fontSize: "38px",
            }}
            className="hidden lg:block px-[4rem]"
          >
            Our{" "}
            <span
              style={{
                color: "var(--green-60, #CAFF33)",
                fontFamily: "Lexend",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "58px",
              }}
            >
              {" "}
              Testimonials{" "}
            </span>
          </h1>
          <div className="hidden lg:block">
            <div className=" flex  ">
              <p
                style={{
                  color: "var(--grey-70, #B3B3B3)",
                  fontFamily: "Lexend",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "14px",
                }}
                className=" px-[4rem] "
              >
                Discover how YourBank has transformed lives with innovative
                digital solutions and personalized customer service. See why our
                clients trust us for a secure and prosperous financial journey
              </p>
              <div
                style={{
                  display: "flex",
                  padding: "12px",
                  alignItems: "flex-start",
                  borderRadius: "82px",
                  border: "1px solid var(--grey-15, #262626)",
                }}
                className="justify-center items-center  "
              >
                <button
                  style={{
                    borderRadius: "140px",
                    padding: "10px 18px",
                    background: "#CAFF33",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className=" w-[136px] h-[41px]  "
                >
                  <div
                    style={{
                      color: "#262626",
                      textAlign: "center",
                      fontFamily: "lexend",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                  >
                    For Individuals
                  </div>
                </button>
                <button
                  style={{
                    borderRadius: "140px",
                    padding: "10px 18px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    border: "1px solid var(--grey-15, #262626)",
                  }}
                  className="w-[136px] h-[41px] "
                >
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "lexend",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                  >
                    For Business
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of ls */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-1">
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              alignSelf: "stretch",
            }}
          >
            <img
              src={Apos}
              alt="app"
              className="justify-center items-center w-[44px] h-[44px] flex gap-[16px]"
              style={{}}
            />
            <p
              style={{
                background:
                  "linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%)",
                color: "var(--absolute-white, #FFF)",
                textAlign: "center",
                fontFamily: "Lexend",
                fontSize: "14px",
                fontStyle: "normal",
              }}
            >
              Your Bank has been my trusted finanace partner for years. Their
              personal service and innovative digital bank solutions have made
              managing my finances a breeze and ood good stuff too. Great xys
              and okay niec okay soft.
            </p>
            <p
              style={{
                color: "var(--green-60, #CAFF33)",
                textAlign: "center",
                fontFamily: "Lexend",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              Sara G
            </p>
          </div>
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              alignSelf: "stretch",
            }}
          >
            <img
              src={Apos}
              alt="app"
              className="justify-center items-center w-[44px] h-[44px] flex gap-[16px]"
              style={{}}
            />
            <p
              style={{
                background:
                  "linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%)",
                color: "var(--absolute-white, #FFF)",
                textAlign: "center",
                fontFamily: "Lexend",
                fontSize: "14px",
                fontStyle: "normal",
              }}
            >
              I recently started my own business, and YourBank has been
              instrumental in helping me set up my business accounts and secure
              the financing I needed. Their expert guidance and tailored
              solutions have been invaluable.
            </p>
            <p
              style={{
                color: "var(--green-60, #CAFF33)",
                textAlign: "center",
                fontFamily: "Lexend",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              John D
            </p>
          </div>

          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              alignSelf: "stretch",
            }}
          >
            <img src={Apos} alt="app" />
            <p
              style={{
                background:
                  "linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%)",
                color: "var(--absolute-white, #FFF)",
                textAlign: "center",
                fontFamily: "Lexend",
                fontSize: "14px",
                fontStyle: "normal",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium aperiam odio ipsa, quis laudantium laborum, optio,
              reprehenderit facere eum similique at accusantium voluptas
              voluptate? Quos animi tenetur sunt totam mollitia.
            </p>
            <p
              style={{
                color: "var(--green-60, #CAFF33)",
                textAlign: "center",
                fontFamily: "Lexend",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              Emily G
            </p>
          </div>
        </div>
      </div>

      {/* for small screens cta */}
      <div>
        <div
          style={{ textAlign: "center" }}
          className="block lg:hidden md:block px-7"
        >
          <div
            style={{
              border: "1px solid #262626",
              borderRadius: "12px",
              height: "370px",
              margin: "auto",
              position: "relative",
            }}
          >
            <img
              src={Abstract}
              alt="abs"
              style={{
                width: "118px",
                height: "112px",
                transform: "rotate(-90deg)",
                position: "absolute",
              }}
            />
            <h1
              style={{
                color: "var(--absolute-white, #FFF)",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "500",
                textAlign: "center",
              }}
              className="px-8 py-5"
            >
              Start your financial journey with{" "}
              <span style={{ color: "var(--green-60, #CAFF33)" }}>
                YourBank today!
              </span>
            </h1>
            <p
              style={{ color: "var(--grey-70, #B3B3B3)", fontFamily: "lexend" }}
              className="px-6"
            >
              Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
              pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
              Nascetur viverra arcu sed amet cursus purus.
            </p>
            <button
              style={{
                borderRadius: "140px",
                padding: "10px 18px",
                background: "#CAFF33",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
              className="w-[136px] h-[41px] mt-4 "
            >
              <div
                style={{
                  color: "#262626",
                  textAlign: "center",
                  fontFamily: "lexend",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "150%",
                }}
                className=""
              >
                Open Account
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* end of small screen */}

      {/* start of large screen */}
      <div className=" hidden lg:block">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          className=" mx-[2.6rem]"
        >
          <div>
            <h1
              style={{
                color: "var(--absolute-white, #FFF)",
                fontSize: "38px",
                fontStyle: "normal",
                fontWeight: "500",
              }}
              className="px- py-4"
            >
              Start your financial journey with{" "}
              <span style={{ color: "var(--green-60, #CAFF33)" }}>
                YourBank today!
              </span>
            </h1>
            <p
              style={{ color: "var(--grey-70, #B3B3B3)", fontFamily: "lexend" }}
              className=""
            >
              Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
              pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
              Nascetur viverra arcu sed amet cursus
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex">
              <div
                style={{
                  display: "flex",
                  padding: "12px",
                  alignItems: "flex-start",
                  borderRadius: "82px",
                  border: "1px solid var(--grey-15, #262626)",
                }}
                className="justify-center items-center"
              >
                <button
                  style={{
                    borderRadius: "140px",
                    padding: "10px 18px",
                    background: "#CAFF33",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="w-[136px] h-[41px]"
                >
                  <div
                    style={{
                      color: "#262626",
                      textAlign: "center",
                      fontFamily: "lexend",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "150%",
                    }}
                    className=""
                  >
                    Open Account
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
