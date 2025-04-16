import * as React from "react";

interface SvgClubProps extends React.SVGAttributes<SVGElement> {}

const SvgClub = React.forwardRef<SVGSVGElement, SvgClubProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM3 1h1v1H3zM7 1h1v1H7zM2 2h1v1H2zM8 2h1v1H8zM2 3h1v1H2zM8 3h1v1H8zM1 4h1v1H1zM2 4h1v1H2zM8 4h1v1H8zM9 4h1v1H9zM0 5h1v1H0zM10 5h1v1h-1zM0 6h1v1H0zM10 6h1v1h-1zM0 7h1v1H0zM5 7h1v1H5zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM9 8h1v1H9zM2 9h1v1H2zM3 9h1v1H3zM5 9h1v1H5zM7 9h1v1H7zM8 9h1v1H8zM5 10h1v1H5z" />
    </svg>
  )
);

SvgClub.displayName = "SvgClub";

export default SvgClub;
