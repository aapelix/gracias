import * as React from "react";

interface SvgBinocularsProps extends React.SVGAttributes<SVGElement> {}

const SvgBinoculars = React.forwardRef<SVGSVGElement, SvgBinocularsProps>(
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
      <path d="M3 1h1v1H3zM7 1h1v1H7zM2 2h1v1H2zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM4 9h1v1H4zM6 9h1v1H6zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBinoculars.displayName = "SvgBinoculars";

export default SvgBinoculars;
