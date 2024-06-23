import {memo} from "react";

const UploadSvg: React.FC = () => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.25 17H11.75C15.5 17 17 15.5 17 11.75V7.25C17 3.5 15.5 2 11.75 2H7.25C3.5 2 2 3.5 2 7.25V11.75C2 15.5 3.5 17 7.25 17Z" stroke="#5C5EDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.25 7.63257L9.5 5.38257L11.75 7.63257" stroke="#5C5EDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 5.38257V11.3826" stroke="#5C5EDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12.8826C7.9175 13.8576 11.0825 13.8576 14 12.8826" stroke="#5C5EDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default memo(UploadSvg);