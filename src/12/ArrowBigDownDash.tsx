import * as React from "react";

interface SvgArrowBigDownDashProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigDownDash = React.forwardRef<SVGSVGElement, SvgArrowBigDownDashProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M4 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zM4 3h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zM3 4h1v1H3zm5 0h1v1H8zM3 5h1v1H3zm5 0h1v1H8zM1 6h1v1H1zm1 0h1v1H2zm7 0h1v1H9zm1 0h1v1h-1zM2 7h1v1H2zm7 0h1v1H9zM3 8h1v1H3zm5 0h1v1H8zM4 9h1v1H4zm3 0h1v1H7zm-2 1h1v1H5zm1 0h1v1H6z" />
    </svg>
  )
);

SvgArrowBigDownDash.displayName = "SvgArrowBigDownDash";

export default SvgArrowBigDownDash;
