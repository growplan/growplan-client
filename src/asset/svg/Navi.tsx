interface IconProps {
  isSelected: boolean;
}

function Home({ isSelected }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3013 3.78968C16.5524 3.14795 15.4475 3.14795 14.6986 3.78968L1.92771 14.7329C1.50818 15.0924 1.45993 15.7243 1.81963 16.1436C2.17908 16.5627 2.81037 16.6114 3.2296 16.2522L4.79064 14.9146V27.3252C4.79064 28.4298 5.68607 29.3252 6.79064 29.3252H25.2133C26.3179 29.3252 27.2133 28.4298 27.2133 27.3252V14.9172L28.7703 16.2519C29.1895 16.6113 29.8209 16.5626 30.1804 16.1435C30.5401 15.7242 30.4918 15.0924 30.0722 14.7329L17.3013 3.78968Z"
        fill={isSelected ? "#699BFF" : "#AFB9CA"}
      />
      <path
        d="M12.7273 26L12.7273 24L19.2726 24L19.2726 26L12.7273 26Z"
        fill="#292E3A"
      />
    </svg>
  );
}

function Record({ isSelected }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 26.6627C4 27.7672 4.89543 28.6627 6 28.6627H26.6133C27.7179 28.6627 28.6133 27.7672 28.6133 26.6627V6C28.6133 4.89543 27.7179 4 26.6133 4H6C4.89543 4 4 4.89543 4 6V26.6627Z"
        fill={isSelected ? "#699BFF" : "#AFB9CA"}
      />
      <path
        d="M16.6291 12.7144L19.3756 15.4609L21.0899 13.7465L18.3434 11L16.6291 12.7144Z"
        fill="#292E3A"
      />
      <path
        d="M10.9999 18.3443L11.0023 21.0876L13.7456 21.0908L18.5358 16.3007L15.7901 13.5542L10.9999 18.3443Z"
        fill="#292E3A"
      />
    </svg>
  );
}

function Center({ isSelected }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6068 4.30027C28.4306 4.11593 28.1661 4.0457 27.9216 4.11837L4.45313 11.0957L4.42669 11.1057C4.16982 11.2033 4 11.4495 4 11.7243C4 11.9452 4.1103 12.1516 4.29402 12.2744L13.3411 18.3205L14.0453 18.787L14.6689 19.6774L20.6646 28.6489L20.6862 28.6765C20.8108 28.8364 21.0021 28.9299 21.2048 28.9299C21.4962 28.9299 21.7528 28.738 21.8353 28.4585L28.7767 4.93917L28.7866 4.87754C28.8202 4.66758 28.7537 4.45398 28.6068 4.30027Z"
        fill={isSelected ? "#699BFF" : "#AFB9CA"}
      />
      <path
        d="M22.4367 9.2749L15.2853 16.4263L16.613 17.7832L23.7796 10.6178L22.4367 9.2749Z"
        fill="#292E3A"
      />
    </svg>
  );
}

function MyPage({ isSelected }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.96 29.3334C23.3238 29.3334 29.2933 23.3638 29.2933 16C29.2933 8.63622 23.3238 2.66669 15.96 2.66669C8.59618 2.66669 2.62665 8.63622 2.62665 16C2.62665 23.3638 8.59618 29.3334 15.96 29.3334Z"
        fill={isSelected ? "#699BFF" : "#AFB9CA"}
      />
      <path
        d="M9.61334 21.3333C11.0133 23.3466 13.36 24.6666 16 24.6666C18.64 24.6666 20.9733 23.3466 22.3867 21.3333"
        fill={isSelected ? "#699BFF" : "#AFB9CA"}
      />
      <path
        d="M9.61334 21.3333C11.0133 23.3466 13.36 24.6666 16 24.6666C18.64 24.6666 20.9733 23.3466 22.3867 21.3333"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Navi = {
  Home,
  Record,
  Center,
  MyPage,
};

export default Navi;
