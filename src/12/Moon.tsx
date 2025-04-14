import * as React from "react";

interface SvgMoonProps extends React.SVGAttributes<SVGElement> {}

const SvgMoon = React.forwardRef<SVGSVGElement, SvgMoonProps>(
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
      <path d="M4 1h1v1H4zm1 0h1v1H5zM3 2h1v1H3zm2 0h1v1H5zM2 3h1v1H2zm2 0h1v1H4zM1 4h1v1H1zm3 0h1v1H4zM1 5h1v1H1zm3 0h1v1H4zM1 6h1v1H1zm4 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zM1 7h1v1H1zm5 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zM2 8h1v1H2zm7 0h1v1H9zM3 9h1v1H3zm5 0h1v1H8zm-4 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7z" />
    </svg>
  )
);

SvgMoon.displayName = "SvgMoon";

export default SvgMoon;
