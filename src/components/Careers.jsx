import React from "react";
import Man from "../assets/Image.png";
import Abstract from "../assets/Abstract Design.png";
import Icon35 from "../assets/Icon-35.png";
import Icon36 from "../assets/Icon-36.png";
import Icon37 from "../assets/Icon-37.png";
import Icon38 from "../assets/Icon-38.png";
import DownA from "../assets/Icon-33.png";
import Briefcase from "../assets/briefcase.fill-3.png";

const Careers = () => {
  return (
    <div style={{ background: "var(--grey-10, #1A1A1A)" }}>
      <div className="lg:block hidden">
        <div
          style={{
            display: "flex",
            height: "648px",
            padding: "40px",
            gap: "-174px",
            borderRadius: "20px",
          }}
          className="lg:block hidden"
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
          <div className="grid grid-cols-2">
            <div
              className="h-[408px] w-[658px]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "23px",
                padding: "60px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px 0px 80px 20px",
                  background: "var(--grey-10, #1A1A1A)",
                }}
              >
                <h1
                  style={{
                    color: "var(--absolute-white, #FFF",
                    fontSize: "48px",
                    fontFamily: "lexend",
                  }}
                >
                  Welcome to{" "}
                  <span
                    style={{
                      color: "var(--green-60, #CAFF33",
                      fontSize: "48px",
                      fontFamily: "lexend",
                    }}
                  >
                    YourBank
                  </span>
                  <br></br>Careers!
                </h1>
                <p
                  style={{ color: "var(--grey-70, #B3B3B3", fontSize: "16px" }}
                >
                  Join our team and embark on a rewarding journey in the banking
                  industry. At YourBank, we are committed to fostering a culture
                  of excellence and providing opportunities for professional
                  growth. With a focus on innovation, customer service, and
                  integrity, we strive to make a positive impact in the lives of
                  our customers and communities. Join us today and be a part of
                  our mission to shape the future of banking.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: "16px" }}>
              <img src={Man} alt="man" className="w-[715px] h-[568px]" />
            </div>
          </div>
          {/* end of grid */}
        </div>
      </div>
      {/* end of the first div */}

      {/* for ss */}
      <div className="block lg:hidden justify-center items-center text-center p-[24px]">
        <img src={Man} alt="man" className="h-[253px] w-[100%]" />
        <h1
          style={{
            color: "var(--absolute-white, #FFF",
            fontSize: "28px",
            fontFamily: "lexend",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              color: "var(--green-60, #CAFF33",
              fontSize: "28px",
              fontFamily: "lexend",
            }}
          >
            YourBank
          </span>
          <br></br>Careers!
        </h1>
        <p
          style={{
            color: "var(--grey-70, #B3B3B3",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </p>
      </div>
      {/* end of ss */}

      {/* main code */}
      {/* begining of values */}
      <div className="lg:pl-10 p-[2rem]">
        <h1
          className="text-center lg:text-start "
          style={{
            color: "var(--absolute-white, #FFF",
            fontSize: "28px",
            fontFamily: "lexend",
          }}
        >
          Our{" "}
          <span
            style={{
              color: "var(--green-60, #CAFF33",
              fontSize: "28px",
              fontFamily: "lexend",
            }}
          >
            Values
          </span>
        </h1>
        <p
          style={{ color: "var(--grey-70, #B3B3B3" }}
          className="text-sm lg:text-lg text-center lg:text-start"
        >
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>

        {/* the grid beginnning */}
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 py-[3rem]">
          <div
            style={{
              display: "flex",
              paddingLeft: "0px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              flex: "1 0 0",
              borderLeft: "1px solid var(--green-60, #CAFF33",
            }}
          >
            <h1
              className="text-xl lg:text-2xl font-bold"
              style={{ color: "var(--grey-30, #4C4C4D", paddingLeft: "10px" }}
            >
              Integrity
            </h1>
            <p
              className="text-sm lg:text-md"
              style={{
                color: "var(--grey-30, #4C4C4D",
                fontFamily: "lexend",
                paddingLeft: "10px",
              }}
            >
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We believe in doing what is right for our
              customers, colleagues, and stakeholders, even when faced with
              difficult choices.
            </p>
          </div>

          <div className="lg:pl-[2rem] pt-[2rem]">
            <div
              style={{
                display: "flex",
                paddingLeft: "0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                flex: "1 0 0",
                borderLeft: "1px solid var(--green-60, #CAFF33",
              }}
            >
              <h1
                className="text-xl lg:text-2xl font-bold"
                style={{ color: "var(--grey-30, #4C4C4D", paddingLeft: "10px" }}
              >
                Customer Centricity
              </h1>
              <p
                className="text-sm lg:text-md"
                style={{
                  color: "var(--grey-30, #4C4C4D",
                  fontFamily: "lexend",
                  paddingLeft: "10px",
                }}
              >
                Our customers are at the heart of everything we do. We are
                dedicated to understanding their needs, providing personalized
                solutions, and delivering exceptional service that exceeds
                expectations.
              </p>
            </div>
          </div>

          <div className="pt-[2rem]">
            <div
              style={{
                display: "flex",
                paddingLeft: "0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                flex: "1 0 0",
                borderLeft: "1px solid var(--green-60, #CAFF33",
              }}
            >
              <h1
                className="text-xl lg:text-2xl font-bold"
                style={{ color: "var(--grey-30, #4C4C4D", paddingLeft: "10px" }}
              >
                Collaboration
              </h1>
              <p
                className="text-sm lg:text-md"
                style={{
                  color: "var(--grey-30, #4C4C4D",
                  fontFamily: "lexend",
                  paddingLeft: "10px",
                }}
              >
                We foster a collaborative and inclusive work environment, where
                teamwork and diversity are celebrated. By leveraging the unique
                strengths and perspectives of our employees, we drive innovation
                and achieve greater success together.
              </p>
            </div>
          </div>

          <div className="lg:pl-[2rem] pt-[2rem]">
            <div
              style={{
                display: "flex",
                paddingLeft: "0px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                flex: "1 0 0",
                borderLeft: "1px solid var(--green-60, #CAFF33",
              }}
            >
              <h1
                className="text-xl lg:text-2xl font-bold"
                style={{ color: "var(--grey-30, #4C4C4D", paddingLeft: "10px" }}
              >
                Innovation
              </h1>
              <p
                className="text-sm lg:text-md"
                style={{
                  color: "var(--grey-30, #4C4C4D",
                  fontFamily: "lexend",
                  paddingLeft: "10px",
                }}
              >
                We embrace change and constantly seek innovative solutions to
                meet the evolving needs of our customers. We encourage our
                employees to think creatively, challenge conventions, and
                explore new ideas to drive the future of banking.
              </p>
            </div>
          </div>
        </div>
        {/* end of the grid */}
      </div>
      {/* end of values*/}

      {/* beginning of benefits */}
      <div className="lg:pl-10 p-[2rem]">
        <h1
          className="text-center lg:text-start "
          style={{
            color: "var(--absolute-white, #FFF",
            fontSize: "28px",
            fontFamily: "lexend",
          }}
        >
          Our{" "}
          <span
            style={{
              color: "var(--green-60, #CAFF33",
              fontSize: "28px",
              fontFamily: "lexend",
            }}
          >
            Benefits
          </span>
        </h1>
        <p
          style={{ color: "var(--grey-70, #B3B3B3" }}
          className="text-sm lg:text-lg text-center lg:text-start"
        >
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>

        {/* the grid beginnning */}
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 py-[3rem]">
          <div className="pb-7 ">
            <div
              style={{
                borderRadius: "40px 14px",
                border: "1px solid rgba(202, 255, 51, 0.10",
                padding: "20px",
              }}
              className=""
            >
              <div className="py-[1.7rem]">
                <div className="flex ">
                  <img src={Icon35} alt="icon" className="pl-6" />
                  <h1
                    className="text-xl lg:text-2xl font-bold"
                    style={{
                      color: "var(--grey-30, #4C4C4D",
                      paddingLeft: "10px",
                    }}
                  >
                    Competitive Compensation
                  </h1>
                </div>
                <p
                  className="text-sm lg:text-md pt-6"
                  style={{
                    color: "var(--grey-30, #4C4C4D",
                    fontFamily: "lexend",
                    paddingLeft: "10px",
                  }}
                >
                  We provide a competitive salary package that recognizes the
                  skills and expertise of our employees. YourBank believes in
                  rewarding exceptional performance and offering opportunities
                  for financial growth.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-7 lg:pl-6">
            <div
              style={{
                borderRadius: "40px 14px",
                border: "1px solid rgba(202, 255, 51, 0.10",
                padding: "20px",
              }}
            >
              <div className="lg:pl-[2rem] py-[1.7rem]">
                <div className="flex">
                  <img src={Icon36} alt="icon" className="pl-6" />
                  <h1
                    className="text-xl lg:text-2xl font-bold"
                    style={{
                      color: "var(--grey-30, #4C4C4D",
                      paddingLeft: "10px",
                    }}
                  >
                    Health and Wellness
                  </h1>
                </div>
                <p
                  className="text-sm lg:text-md pt-6"
                  style={{
                    color: "var(--grey-30, #4C4C4D",
                    fontFamily: "lexend",
                    paddingLeft: "10px",
                  }}
                >
                  We prioritize the health and well-being of our employees by
                  providing comprehensive medical, dental, and vision insurance
                  plans. We also offer wellness programs, gym memberships, and
                  resources to support a healthy lifestyle.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-7">
            <div
              style={{
                borderRadius: "40px 14px",
                border: "1px solid rgba(202, 255, 51, 0.10",
                padding: "20px",
              }}
            >
              <div className="py-[1.7rem]">
                <div className="flex">
                  <img src={Icon37} alt="icon" className="pl-6" />
                  <h1
                    className="text-xl lg:text-2xl font-bold"
                    style={{
                      color: "var(--grey-30, #4C4C4D",
                      paddingLeft: "10px",
                    }}
                  >
                    Retirement Planning
                  </h1>
                </div>
                <p
                  className="text-sm lg:text-md pt-6"
                  style={{
                    color: "var(--grey-30, #4C4C4D",
                    fontFamily: "lexend",
                    paddingLeft: "10px",
                  }}
                >
                  YourBank is committed to helping employees plan for their
                  future. We offer a retirement savings plan with a generous
                  employer match to help them build a secure financial
                  foundation for the long term.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-7 lg:pl-6">
            <div
              style={{
                borderRadius: "40px 14px",
                border: "1px solid rgba(202, 255, 51, 0.10",
                padding: "20px",
              }}
            >
              <div className="lg:pl-[2rem] py-[1.7rem]">
                <div className="flex">
                  <img src={Icon38} alt="icon" className="pl-6" />
                  <h1
                    className="text-xl lg:text-2xl font-bold"
                    style={{
                      color: "var(--grey-30, #4C4C4D",
                      paddingLeft: "10px",
                    }}
                  >
                    Work-Life Balance
                  </h1>
                </div>
                <p
                  className="text-sm lg:text-md pt-6"
                  style={{
                    color: "var(--grey-30, #4C4C4D",
                    fontFamily: "lexend",
                    paddingLeft: "10px",
                  }}
                >
                  We understand the importance of maintaining a healthy
                  work-life balance. YourBank offers flexible work arrangements,
                  paid time off, parental leave, and other programs that support
                  employees in managing their personal and professional
                  commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of bene */}

      {/* beginning of job openings */}
      <div className="lg:pl-10 px-8">
        <h1
          className="text-center lg:text-start font-bold"
          style={{ color: "var(--green-60, #CAFF33", fontSize: "28px" }}
        >
          Job Openings
        </h1>
        <p
          style={{ color: "var(--grey-70, #B3B3B3" }}
          className="text-sm lg:text-lg text-center lg:text-start"
        >
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 py-[3rem]">
          {/* start of first col */}
          <div>
            <h1
              className="text-lg lg:text-2xl font-bold"
              style={{ color: "var(--absolute-white, #FFF" }}
            >
              Relationship Manager
            </h1>

            <div className="flex py-6 ">
              <div
                style={{
                  padding: "12px 20px",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "2rem",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    background: "var(--grey-10, #1C1C1C)",
                    width: "115px",
                    height: "45px",
                    color: "var(--absolute-white, #FFF",
                  }}
                >
                  <p>Location: India</p>
                </button>
              </div>

              <div
                style={{
                  padding: "12px 20px",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "2rem",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    background: "var(--grey-10, #1C1C1C)",
                    width: "115px",
                    height: "45px",
                    color: "var(--absolute-white, #FFF",
                  }}
                >
                  <p>Department: Retail Banking</p>
                </button>
              </div>
            </div>
            {/* about this job */}
            <div>
              <h1
                className="text-lg lg:text-2xl  font-bold"
                style={{ color: "var(--absolute-white, #FFF" }}
              >
                About This Job
              </h1>
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="text-sm lg:text-md "
              >
                As a Relationship Manager at YourBank, you will be responsible
                for developing and maintaining relationships with our valued
                customers. You will proactively identify their financial needs
                and offer tailored solutions to help them achieve their goals.
                We are seeking individuals with excellent communication skills,
                a strong sales acumen, and a passion for delivering exceptional
                customer service.
              </p>
            </div>
            {/* requirements */}
            <h1
              className="text-lg lg:text-2xl  font-bold pt-4"
              style={{ color: "var(--absolute-white, #FFF" }}
            >
              Requirements & Qualifications
            </h1>
            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Bachelor's degree in Business, Finance, or a related field
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Minimum of 3 years of experience in sales or relationship
                management in the banking industry
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Proven track record of meeting and exceeding sales targets
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Excellent interpersonal and negotiation skills
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Strong knowledge of banking products and services
              </p>
            </div>

            {/* button */}
            <div
              style={{
                padding: "12px 20px",
                alignItems: "center",
                gap: "10px",
                paddingTop: "2rem",
              }}
            >
              <button
                style={{
                  borderRadius: "82px",
                  background: "var(--green-60, #CAFF33)",
                  width: "115px",
                  height: "45px",
                }}
              >
                <p>Apply Now</p>
              </button>
            </div>
          </div>
          {/* the end first col */}

          {/*start of the second */}
          <div>
            <h1
              className="text-lg lg:text-2xl font-bold"
              style={{ color: "var(--absolute-white, #FFF" }}
            >
              Risk Analyst
            </h1>
            <div className="flex py-6 ">
              <div
                style={{
                  padding: "12px 20px",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "2rem",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    background: "var(--grey-10, #1C1C1C)",
                    width: "115px",
                    height: "45px",
                    color: "var(--absolute-white, #FFF",
                  }}
                >
                  <p>Location: India</p>
                </button>
              </div>

              <div
                style={{
                  padding: "12px 20px",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "2rem",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    background: "var(--grey-10, #1C1C1C)",
                    width: "115px",
                    height: "45px",
                    color: "var(--absolute-white, #FFF",
                  }}
                >
                  <p>Department: Risk Manager</p>
                </button>
              </div>
            </div>
            {/* about this job */}
            <div>
              <h1
                className="text-lg lg:text-2xl  font-bold"
                style={{ color: "var(--absolute-white, #FFF" }}
              >
                About This Job
              </h1>
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="text-sm lg:text-md "
              >
                As a Risk Analyst at YourBank, you will play a vital role in
                identifying and assessing potential risks to our organization.
                You will analyze data, conduct risk assessments, and develop
                strategies to mitigate risks. We are looking for detail-oriented
                individuals with strong analytical skills and a solid
                understanding of risk management principles.
              </p>
            </div>
            {/* requirements */}
            <h1
              className="text-lg lg:text-2xl  font-bold pt-4"
              style={{ color: "var(--absolute-white, #FFF" }}
            >
              Requirements & Qualifications
            </h1>
            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Bachelor's degree in Finance, Economics, or a related field
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Minimum of 2 years of experience in risk management or a similar
                role
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Proficiency in risk analysis tools and techniques
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Strong analytical and problem-solving skills
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Knowledge of regulatory requirements and industry best practices
              </p>
            </div>

            {/* button */}
            <div
              style={{
                padding: "12px 20px",
                alignItems: "center",
                gap: "10px",
                paddingTop: "2rem",
              }}
            >
              <button
                style={{
                  borderRadius: "82px",
                  background: "var(--green-60, #CAFF33)",
                  width: "115px",
                  height: "45px",
                }}
              >
                <p>Apply Now</p>
              </button>
            </div>
          </div>
          {/* the end second col */}

          {/* start of the third */}
          <div className="pt-7">
            <h1
              className="text-lg lg:text-2xl font-bold"
              style={{ color: "var(--absolute-white, #FFF" }}
            >
              IT Security Specialist
            </h1>
            <div className="flex py-6 ">
              <div
                style={{
                  padding: "12px 20px",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "2rem",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    background: "var(--grey-10, #1C1C1C)",
                    width: "115px",
                    height: "45px",
                    color: "var(--absolute-white, #FFF",
                  }}
                >
                  <p>Location: India</p>
                </button>
              </div>

              <div
                style={{
                  padding: "12px 20px",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "2rem",
                }}
              >
                <button
                  style={{
                    borderRadius: "82px",
                    background: "var(--grey-10, #1C1C1C)",
                    width: "115px",
                    height: "45px",
                    color: "var(--absolute-white, #FFF",
                  }}
                >
                  <p>Department: Information Technology</p>
                </button>
              </div>
            </div>
            {/* about this job */}
            <div>
              <h1
                className="text-lg lg:text-2xl  font-bold"
                style={{ color: "var(--absolute-white, #FFF" }}
              >
                About This Job
              </h1>
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="text-sm lg:text-md "
              >
                As an IT Security Specialist at YourBank, you will be
                responsible for ensuring the security and integrity of our
                information systems. You will develop and implement security
                protocols, conduct vulnerability assessments, and respond to
                security incidents. We are seeking individuals with a strong
                technical background, knowledge of cybersecurity best practices,
                and a commitment to maintaining the confidentiality of customer
                data.
              </p>
            </div>
            {/* requirements */}
            <h1
              className="text-lg lg:text-2xl  font-bold pt-4"
              style={{ color: "var(--absolute-white, #FFF" }}
            >
              Requirements & Qualifications
            </h1>
            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Bachelor's degree in Computer Science, Information Security, or
                a related field
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Minimum of 5 years of experience in IT security or a similar
                role
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                In-depth knowledge of network security protocols and
                technologies
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Familiarity with regulatory frameworks such as PCI DSS and GDPR
              </p>
            </div>

            <div className="flex pt-4">
              <img
                src={Briefcase}
                alt="briefcase"
                className="w-[18.571px] h-[15.714px]"
              />
              <p
                style={{ color: "var(--grey-70, #B3B3B3)" }}
                className="pl-3 text-sm lg:text-md"
              >
                Professional certifications such as CISSP or CISM are preferred
              </p>
            </div>
            {/* button */}
            <div
              style={{
                padding: "12px 20px",
                alignItems: "center",
                gap: "10px",
                paddingTop: "2rem",
              }}
            >
              <button
                style={{
                  borderRadius: "82px",
                  background: "var(--green-60, #CAFF33)",
                  width: "115px",
                  height: "45px",
                }}
              >
                <p>Apply Now</p>
              </button>
            </div>
          </div>
          {/* the end third col */}
        </div>
      </div>
      {/* end of job openenings */}

      {/* beginning of FAQ */}
      {/* FAQ */}
      <div className="px-[4rem]">
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
              <p className="w-[278px] text-gray-400 lg:block hidden">
                -------------------------------------
              </p>
              <p className="w-[278px] text-gray-400 lg:hidden block">
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
              <p className="w-[278px] text-gray-400 lg:block hidden">
                -------------------------------------
              </p>
              <p className="w-[278px] text-gray-400 lg:hidden block">
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
              <p className="w-[278px] text-gray-400 lg:block hidden">
                -------------------------------------
              </p>
              <p className="w-[278px] text-gray-400 lg:hidden block">
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
              <p className="w-[278px] text-gray-400 lg:block hidden">
                -------------------------------------
              </p>
              <p className="w-[278px] text-gray-400 lg:hidden block">
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

      {/* start your ... lg */}
      <div className="block lg:hidden pt-6">
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

      {/* start of large screen */}

      <div className=" hidden lg:block pt-[3rem]">
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
    // end of code
  );
};

export default Careers;
