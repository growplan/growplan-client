function Kakao() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1161_4753)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.50005 0.533304C4.0815 0.533304 0.5 3.30039 0.5 6.71314C0.5 8.83558 1.88525 10.7066 3.9947 11.8195L3.10715 15.0618C3.02873 15.3483 3.35638 15.5766 3.60798 15.4106L7.49856 12.8429C7.82688 12.8746 8.16054 12.893 8.50005 12.893C12.9182 12.893 16.5 10.1261 16.5 6.71314C16.5 3.30039 12.9182 0.533304 8.50005 0.533304Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1161_4753">
          <rect
            width="16"
            height="16.0001"
            fill="white"
            transform="translate(0.5 -3.14713e-05)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function Naver() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1161_4319)">
        <path
          d="M10.8491 8.56267L4.91687 0H0V16H5.15088V7.436L11.0831 16H16V0H10.8491V8.56267Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1161_4319">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const Auth = {
  Kakao,
  Naver,
};
export default Auth;
