import * as React from "react";

interface SvgArrowUpDownProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpDown = React.forwardRef<SVGSVGElement, SvgArrowUpDownProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M6 3h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM5 4h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm8 0h1v1h-1zm1 0h1v1h-1zM4 5h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm7 0h1v1h-1zm1 0h1v1h-1zM3 6h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM2 7h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm1 0h1v1H7zm2 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM6 9h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 10h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 11h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 12h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 13h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 14h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 15h1v1H6zm1 0h1v1H7zm5 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM6 16h1v1H6zm1 0h1v1H7zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 17h1v1H6zm1 0h1v1H7zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 18h1v1H6zm1 0h1v1H7zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 19h1v1H6zm1 0h1v1H7zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 20h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgArrowUpDown.displayName = "SvgArrowUpDown";

export default SvgArrowUpDown;
