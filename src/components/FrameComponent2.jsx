import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-[25px] pb-[63px] pr-5 pl-[25px] box-border relative gap-[78px] min-h-[876px] max-w-full text-center text-8xl-7 text-homeaccrediancom-mirage font-homeaccrediancom-roboto-bold-17 mq900:gap-[39px] mq900:pt-5 mq900:pb-[41px] mq900:box-border mq450:gap-[19px] mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div
        className="w-[1934px] h-[calc(100%_-_91px)] absolute !m-[0] top-[0px] right-[-8px] bottom-[91px] bg-aliceblue-100"
        data-scroll-to="rectangle"
      />
      <div className="w-[1387px] flex flex-col items-start justify-start gap-[56px] max-w-full mq900:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[26px] pl-5 box-border max-w-full">
          <div className="w-[321px] relative leading-[43px] font-semibold flex items-center shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[34px]">
            <span className="w-full">
              <span>{`How Do I `}</span>
              <span className="text-homeaccrediancom-royal-blue">Refer?</span>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-base text-black">
          <img
            className="h-[491px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/18512590ai-1-1@2x.png"
          />
          <img
            className="h-[67px] w-[88px] absolute !m-[0] top-[144px] left-[257px] z-[2]"
            loading="lazy"
            alt=""
            src="/layer-2-00000166652077678251612620000003541000192939887504.svg"
          />
          <img
            className="h-[67.4px] w-[65.1px] absolute !m-[0] top-[144px] left-[658px] z-[2]"
            loading="lazy"
            alt=""
            src="/layer-10.svg"
          />
          <img
            className="h-[67.2px] w-[65px] absolute !m-[0] top-[144px] right-[282px] z-[2]"
            loading="lazy"
            alt=""
            src="/group-22036.svg"
          />
          <div className="w-[193px] absolute !m-[0] bottom-[188px] left-[191px] leading-[22px] flex items-center justify-center z-[2]">
            Submit referrals easily via our website’s referral section.
          </div>
          <div className="w-[193px] absolute !m-[0] bottom-[182px] left-[591px] leading-[22px] flex items-center justify-center z-[2]">
            Earn rewards once your referral joins an Accredian program.
          </div>
          <div className="w-[193px] absolute !m-[0] right-[214px] bottom-[182px] leading-[22px] flex items-center justify-center z-[2]">
            Both parties receive a bonus 30 days after program enrollment.
          </div>
        </div>
      </div>
      <div className="w-[1387px] flex flex-row items-start justify-center py-0 pr-[25px] pl-5 box-border max-w-full">
        <button className="cursor-pointer [border:none] py-5 px-[72px] bg-homeaccrediancom-royal-blue w-[236px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-dodgerblue-100">
          <div className="flex-1 relative text-xl leading-[24px] font-source-sans-pro text-homeaccrediancom-nero text-center inline-block min-w-[92px]">
            Refer Now
          </div>
        </button>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
