import * as React from "react";

interface SvgActivityProps extends React.SVGAttributes<SVGElement> {}

const SvgActivity = React.forwardRef<SVGSVGElement, SvgActivityProps>(
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
      <path d="M4 2h1v1H4zM3 3h1v1H3zm2 0h1v1H5zM3 4h1v1H3zm2 0h1v1H5zM1 5h1v1H1zm1 0h1v1H2zm3 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zM6 6h1v1H6zm2 0h1v1H8zM6 7h1v1H6zm2 0h1v1H8zM7 8h1v1H7z" />
    </svg>
  )
);

SvgActivity.displayName = "SvgActivity";

export default SvgActivity;
