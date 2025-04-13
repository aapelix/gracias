import * as React from "react";

interface SvgStarHalfProps extends React.SVGAttributes<SVGElement> {}

const SvgStarHalf = React.forwardRef<SVGSVGElement, SvgStarHalfProps>(
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
      <path d="M11 1h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zM9 4h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM9 5h1v1H9zm1 0h1v1h-1zM8 6h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM1 8h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM1 9h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm-2 1h1v1H2zm1 0h1v1H3zm-1 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm0 1h1v1H4zm1 0h1v1H5zm0 1h1v1H5zm1 0h1v1H6zm-1 1h1v1H5zm1 0h1v1H6zm-1 1h1v1H5zm1 0h1v1H6zm-1 1h1v1H5zm1 0h1v1H6zm-1 1h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm-6 1h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-5 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm-4 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7z" />
    </svg>
  )
);

SvgStarHalf.displayName = "SvgStarHalf";

export default SvgStarHalf;
