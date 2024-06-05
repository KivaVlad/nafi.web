import {memo} from "react";

const DownloadSvg: React.FC = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.25008 12.8332H8.75008C11.6667 12.8332 12.8334 11.6665 12.8334 8.74984V5.24984C12.8334 2.33317 11.6667 1.1665 8.75008 1.1665H5.25008C2.33341 1.1665 1.16675 2.33317 1.16675 5.24984V8.74984C1.16675 11.6665 2.33341 12.8332 5.25008 12.8332Z" stroke="#5C5EDC" />
      <path d="M5.25 6.71387L7 8.46387L8.75 6.71387" stroke="#5C5EDC" />
      <path d="M7 8.46403V3.79736" stroke="##5C5EDC" />
      <path d="M3.5 9.63037C5.76917 10.3887 8.23083 10.3887 10.5 9.63037" stroke="##5C5EDC"/>
    </svg>
  )
}

export default memo(DownloadSvg);