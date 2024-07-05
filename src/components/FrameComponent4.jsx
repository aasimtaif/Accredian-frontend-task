import { useCallback } from "react";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://home.accredian.com/");
  }, []);

  const onLinkClick = useCallback(() => {
    window.open("https://home.accredian.com/login");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://trial.accredian.com/");
  }, []);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[39.8px] box-border max-w-full text-center text-mini-9 text-homeaccrediancom-nero font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center py-[9.6px] px-5 box-border max-w-full">
        <div className="w-[1360px] flex flex-row items-center justify-between py-2.5 px-0 box-border max-w-[1360px] min-h-[60px] gap-[0px] [row-gap:20px] mq1650:max-w-full">
          <div className="w-[560px] flex flex-row items-center justify-start py-0 pr-[287px] pl-0 box-border gap-[32px] max-w-full mq900:gap-[16px] mq900:pr-[143px] mq900:box-border mq450:pr-5 mq450:box-border">
            <div
              className="flex-1 flex flex-col items-start justify-start cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <img
                className="w-full h-[36.7px] relative max-w-[125px] overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/logopng@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-md bg-homeaccrediancom-royal-blue flex flex-row items-center justify-start py-2 px-[18px] gap-[4px]">
                <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[60px] whitespace-nowrap">
                  Courses
                </a>
                <img className="h-4 w-4 relative" alt="" src="/svg.svg" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end py-0 pr-0 pl-[268px] box-border gap-[32px] max-w-full text-left text-mini-8 text-homeaccrediancom-mirage mq900:pl-[134px] mq900:box-border mq450:gap-[16px] mq450:pl-5 mq450:box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] capitalize font-medium inline-block min-w-[87px] whitespace-nowrap">{`Refer & Earn`}</div>
            </div>
            <div className="w-[173px] flex flex-row items-center justify-between gap-[20px] mq900:hidden">
              <div className="flex flex-col items-start justify-start">
                <a className="[text-decoration:none] relative leading-[24px] capitalize font-medium text-[inherit] inline-block min-w-[75px]">
                  Resources
                </a>
              </div>
              <div className="flex flex-col items-start justify-start text-mini">
                <a className="[text-decoration:none] relative leading-[24px] capitalize font-medium text-[inherit] inline-block min-w-[67px] whitespace-nowrap">
                  About us
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[16px] text-center text-homeaccrediancom-nero">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start"
                onClick={onLinkClick}
              >
                <div className="rounded-md bg-homeaccrediancom-gull-gray-20 flex flex-row items-start justify-start py-2 px-[18px]">
                  <a className="[text-decoration:none] relative text-base-3 leading-[24px] font-medium font-inter text-homeaccrediancom-mirage text-center inline-block min-w-[41px] whitespace-nowrap">
                    Login
                  </a>
                </div>
              </button>
              <div
                className="flex flex-col items-start justify-start cursor-pointer"
                onClick={onLinkContainerClick1}
              >
                <div className="rounded-md bg-homeaccrediancom-royal-blue flex flex-row items-start justify-start py-2 px-[18px] whitespace-nowrap">
                  <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[79px]">
                    Try for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
