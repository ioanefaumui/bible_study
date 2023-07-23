export default function Spinner() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="17.5" stroke="#CECECE" strokeWidth="5" />
      <mask
        id="mask0_19_8"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <circle cx="20" cy="20" r="17.5" stroke="#D5D5D5" strokeWidth="5" />
      </mask>
      <g mask="url(#mask0_19_8)">
        <rect x="20" y="20" width="28.9412" height="28.9412" fill="#6366F1" />
      </g>
    </svg>
  );
}
