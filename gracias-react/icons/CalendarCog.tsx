import * as React from "react";

interface SvgCalendarCogProps extends React.SVGAttributes<SVGElement> {}

const SvgCalendarCog = React.forwardRef<SVGSVGElement, SvgCalendarCogProps>(
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
      <path d="M4 0h1v1H4zM7 0h1v1H7zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM4 2h1v1H4zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM10 3h1v1h-1zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM8 6h1v1H8zM1 7h1v1H1zM8 7h1v1H8zM9 7h1v1H9zM10 7h1v1h-1zM1 8h1v1H1zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1h-1zM1 9h1v1H1zM7 9h1v1H7zM10 9h1v1h-1zM11 9h1v1h-1zM1 10h1v1H1zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1zM2 11h1v1H2zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM8 11h1v1H8z" />
    </svg>
  )
);

SvgCalendarCog.displayName = "SvgCalendarCog";

export default SvgCalendarCog;
