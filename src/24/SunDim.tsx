import * as React from "react";

interface SvgSunDimProps extends React.SVGAttributes<SVGElement> {}

const SvgSunDim = React.forwardRef<SVGSVGElement, SvgSunDimProps>(
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
      <path d="M11 3h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zM6 5h1v1H6zm11 0h1v1h-1zM5 6h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 8h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 9h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM7 13h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM6 18h1v1H6zm11 0h1v1h-1zm-6 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgSunDim.displayName = "SvgSunDim";

export default SvgSunDim;
