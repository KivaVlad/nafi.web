import {memo} from "react";

const LogoutSvg: React.FC = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.67499 5.67005C6.90749 2.97005 8.29499 1.86755 11.3325 1.86755H11.43C14.7825 1.86755 16.125 3.21005 16.125 6.56255V11.4526C16.125 14.8051 14.7825 16.1476 11.43 16.1476H11.3325C8.31749 16.1476 6.92999 15.0601 6.68249 12.4051" stroke="#7179B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.25 9H2.715" stroke="#7179B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.3875 6.48749L1.875 8.99999L4.3875 11.5125" stroke="#7179B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default memo(LogoutSvg);