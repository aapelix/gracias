import * as React from "react";

interface SvgArrowBigLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowBigLeft = React.forwardRef<SVGSVGElement, SvgArrowBigLeftProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zm1 0h1v1H5zM3 3h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM2 4h1v1H2zm7 0h1v1H9zM1 5h1v1H1zm8 0h1v1H9zM1 6h1v1H1zm8 0h1v1H9zM2 7h1v1H2zm7 0h1v1H9zM3 8h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM4 9h1v1H4zm1 0h1v1H5zm0 1h1v1H5z" />
    </svg>
  )
);

SvgArrowBigLeft.displayName = "SvgArrowBigLeft";

export default SvgArrowBigLeft;
