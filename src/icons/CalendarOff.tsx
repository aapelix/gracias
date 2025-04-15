import * as React from "react";

interface SvgCalendarOffProps extends React.SVGAttributes<SVGElement> {}

const SvgCalendarOff = React.forwardRef<SVGSVGElement, SvgCalendarOffProps>(
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
      <path d="M0 0h1v1H0zM7 0h1v1H7zM1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM2 2h1v1H2zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM3 3h1v1H3zM10 3h1v1h-1zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM5 5h1v1H5zM10 5h1v1h-1zM1 6h1v1H1zM6 6h1v1H6zM10 6h1v1h-1zM1 7h1v1H1zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM8 8h1v1H8zM1 9h1v1H1zM9 9h1v1H9zM1 10h1v1H1zM10 10h1v1h-1zM2 11h1v1H2zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8zM9 11h1v1H9zM11 11h1v1h-1z" />
    </svg>
  )
);

SvgCalendarOff.displayName = "SvgCalendarOff";

export default SvgCalendarOff;
