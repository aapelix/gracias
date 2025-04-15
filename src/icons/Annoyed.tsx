import * as React from "react";

interface SvgAnnoyedProps extends React.SVGAttributes<SVGElement> {}

const SvgAnnoyed = React.forwardRef<SVGSVGElement, SvgAnnoyedProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM2 2h1v1H2zM9 2h1v1H9zM1 3h1v1H1zM10 3h1v1h-1zM1 4h1v1H1zM3 4h1v1H3zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM10 8h1v1h-1zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgAnnoyed.displayName = "SvgAnnoyed";

export default SvgAnnoyed;
