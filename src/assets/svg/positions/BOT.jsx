const Setting = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={fill} fillRule="nonzero">
          <g>
            <path
              d="M19 3l-4 4H7v8l-4 4V3h16z"
              opacity=".2"
              transform="translate(-2164.000000, -827.000000) translate(2164.000000, 827.000000)"
            />
            <path
              d="M21 5l-4 4H9v8l-4 4V5h16z"
              transform="translate(-2164.000000, -827.000000) translate(2164.000000, 827.000000) translate(13.000000, 13.000000) rotate(-180.000000) translate(-13.000000, -13.000000)"
            />
            <path
              d="M10 10H14V14H10z"
              opacity=".2"
              transform="translate(-2164.000000, -827.000000) translate(2164.000000, 827.000000)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

Setting.defaultProps = {
  width: "14px",
  height: "14px",
  fill: "#ffffff",
};

export default Setting;