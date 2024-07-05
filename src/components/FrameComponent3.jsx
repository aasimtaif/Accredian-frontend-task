import { useCallback } from "react";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  const onBenefitsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFAQsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSupportTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ctaCircled94f7e66bfe364d78b6']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[42px] box-border max-w-full text-center text-6xl text-darkslategray-100 font-homeaccrediancom-roboto-bold-17 mq900:pb-[27px] mq900:box-border mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-[1360px] flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[797px] rounded-19xl bg-royalblue-100 overflow-x-auto shrink-0 flex flex-row items-start justify-between pt-3.5 px-[52px] pb-2 box-border gap-[20px] max-w-full mq900:pl-[26px] mq900:pr-[26px] mq900:box-border">
            <div className="h-[63px] w-[797px] relative rounded-19xl bg-royalblue-100 shrink-0 hidden max-w-full" />
            <div className="w-[127px] shrink-0 flex flex-col items-start justify-start gap-[13px] text-homeaccrediancom-royal-blue">
              <div className="self-stretch relative leading-[22px] z-[1] mq450:text-xl mq450:leading-[18px]">
                Refer
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[61px] pl-[60px]">
                <div className="h-1.5 w-1.5 relative rounded-[50%] bg-homeaccrediancom-royal-blue z-[1]" />
              </div>
            </div>
            <div
              className="h-8 w-[132px] relative leading-[22px] flex items-center justify-center shrink-0 cursor-pointer z-[1] mq450:text-xl mq450:leading-[18px]"
              onClick={onBenefitsTextClick}
            >
              Benefits
            </div>
            <div
              className="h-7 w-[127px] relative leading-[22px] flex items-center justify-center shrink-0 cursor-pointer z-[1] mq450:text-xl mq450:leading-[18px]"
              onClick={onFAQsTextClick}
            >
              FAQs
            </div>
            <div
              className="h-7 w-[127px] relative leading-[22px] flex items-center justify-center shrink-0 cursor-pointer z-[1] mq450:text-xl mq450:leading-[18px]"
              onClick={onSupportTextClick}
            >
              Support
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-0 box-border max-w-full text-left text-69xl text-homeaccrediancom-mirage">
          <div className="flex-1 shadow-[0px_4px_65px_1px_rgba(0,_7,_43,_0.21)] rounded-10xl bg-aliceblue-100 flex flex-row items-start justify-between pt-0 pb-[83px] pr-[13px] pl-0 box-border max-w-[103%] shrink-0 gap-[20px] mq900:pb-[54px] mq900:box-border mq1300:flex-wrap mq1300:justify-center mq1300:pl-[13px] mq1300:pt-[13px] mq1300:box-border">
            <div className="h-[692px] w-[1360px] relative shadow-[0px_4px_65px_1px_rgba(0,_7,_43,_0.21)] rounded-10xl bg-aliceblue-100 hidden max-w-full" />
            <div className="w-[867px] flex flex-row items-start justify-start gap-[163px] max-w-full mq900:flex-wrap mq900:gap-[81px] mq450:gap-[41px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq900:gap-[20px] mq900:min-w-full">
                <img
                  className="w-[157px] h-[87px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/anniversary-8-4@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[11px] box-border max-w-full">
                  <h1 className="m-0 w-[502px] relative text-inherit leading-[88px] font-bold font-inherit flex items-center shrink-0 max-w-full z-[1] mq900:text-25xl mq900:leading-[53px] mq450:text-7xl mq450:leading-[35px]">{`Let’s Learn & Earn`}</h1>
                </div>
                <div className="w-[505px] flex flex-row items-start justify-start pt-0 px-[45px] pb-[21px] box-border max-w-full text-21xl mq900:pl-[22px] mq900:pr-[22px] mq900:box-border">
                  <div className="h-[140px] flex-1 relative leading-[65px] flex items-center max-w-full z-[1] mq900:text-13xl mq900:leading-[52px] mq450:text-5xl mq450:leading-[39px]">
                    <span>
                      <p className="m-0">{`Get a chance to win `}</p>
                      <p className="m-0">
                        <span>{`up-to `}</span>
                        <b className="text-35xl font-homeaccrediancom-roboto-bold-17 text-homeaccrediancom-royal-blue">
                          Rs. 15,000
                        </b>
                      </p>
                    </span>
                  </div>
                </div>
                <div className="w-[282px] flex flex-row items-start justify-start py-0 px-[45px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <button className="cursor-pointer [border:none] py-[15px] px-[52px] bg-homeaccrediancom-royal-blue flex-1 rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dodgerblue-100">
                    <div className="flex-1 relative text-xl leading-[24px] font-source-sans-pro text-homeaccrediancom-nero text-center inline-block min-w-[88px]">
                      Refer Now
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="h-[157px] w-[157px] relative object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/anniversary-8-2@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[180px]">
              <img
                className="w-[157px] h-[87px] relative object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/anniversary-8-5@2x.png"
              />
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-3">
                <img
                  className="h-[157px] w-[157px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/anniversary-8-3@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="h-[725px] w-[814px] flex flex-row items-end justify-start py-[79px] px-[45px] box-border bg-[url('/public/anniversary-7-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] ml-[-852px]">
            <img
              className="h-[725px] w-[814px] relative object-cover hidden max-w-full"
              alt=""
              src="/anniversary-7-1@2x.png"
            />
            <img
              className="h-[157px] w-[157px] relative object-contain z-[3]"
              loading="lazy"
              alt=""
              src="/anniversary-8-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
