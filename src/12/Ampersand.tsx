import * as React from "react";

interface SvgAmpersandProps extends React.SVGAttributes<SVGElement> {}

const SvgAmpersand = React.forwardRef<SVGSVGElement, SvgAmpersandProps>(
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
      <path d="M3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zM2 2h1v1H2zm4 0h1v1H6zM2 3h1v1H2zm4 0h1v1H6zM2 4h1v1H2zm3 0h1v1H5zM3 5h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM2 6h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm4 0h1v1H9zM1 7h1v1H1zm4 0h1v1H5zm4 0h1v1H9zM1 8h1v1H1zm5 0h1v1H6zm2 0h1v1H8zM1 9h1v1H1zm5 0h1v1H6zm1 0h1v1H7zm-5 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgAmpersand.displayName = "SvgAmpersand";

export default SvgAmpersand;
