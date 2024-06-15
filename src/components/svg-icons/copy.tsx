import {memo} from "react";

const CopySvg: React.FC = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33317 7.52508V9.97508C9.33317 12.0167 8.51651 12.8334 6.47484 12.8334H4.02484C1.98317 12.8334 1.1665 12.0167 1.1665 9.97508V7.52508C1.1665 5.48341 1.98317 4.66675 4.02484 4.66675H6.47484C8.51651 4.66675 9.33317 5.48341 9.33317 7.52508Z" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.8332 4.02484V6.47484C12.8332 8.5165 12.0165 9.33317 9.97484 9.33317H9.33317V7.52484C9.33317 5.48317 8.5165 4.6665 6.47484 4.6665H4.6665V4.02484C4.6665 1.98317 5.48317 1.1665 7.52484 1.1665H9.97484C12.0165 1.1665 12.8332 1.98317 12.8332 4.02484Z" stroke="#5C5EDC" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default memo(CopySvg);