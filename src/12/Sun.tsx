import * as React from "react";

interface SvgSunProps extends React.SVGAttributes<SVGElement> {}

const SvgSun = React.forwardRef<SVGSVGElement, SvgSunProps>(
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
      <path d="M6 0h1v1H6zM2 1h1v1H2zm4 0h1v1H6zM3 2h1v1H3zm7 0h1v1h-1zM5 3h1v1H5zm1 0h1v1H6zm3 0h1v1H9zM4 4h1v1H4zm3 0h1v1H7zM0 5h1v1H0zm1 0h1v1H1zm2 0h1v1H3zm5 0h1v1H8zM3 6h1v1H3zm5 0h1v1H8zm2 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm3 0h1v1H7zM2 8h1v1H2zm3 0h1v1H5zm1 0h1v1H6zM1 9h1v1H1zm7 0h1v1H8zm-3 1h1v1H5zm4 0h1v1H9zm-4 1h1v1H5z" />
    </svg>
  )
);

SvgSun.displayName = "SvgSun";

export default SvgSun;
