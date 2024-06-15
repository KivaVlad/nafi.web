import {memo} from "react";

const ShareSvg: React.FC = () => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.18359 6.41676L12.9669 1.63342" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.4333 3.96663V1.16663H10.6333" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.0166 1.16663H5.84994C2.93327 1.16663 1.7666 2.33329 1.7666 5.24996V8.74996C1.7666 11.6666 2.93327 12.8333 5.84994 12.8333H9.34994C12.2666 12.8333 13.4333 11.6666 13.4333 8.74996V7.58329" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default memo(ShareSvg);