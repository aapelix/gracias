import * as React from "react";

interface SvgAmbulanceProps extends React.SVGAttributes<SVGElement> {}

const SvgAmbulance = React.forwardRef<SVGSVGElement, SvgAmbulanceProps>(
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
      <path d="M2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM1 3h1v1H1zM6 3h1v1H6zM1 4h1v1H1zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM1 5h1v1H1zM3 5h1v1H3zM6 5h1v1H6zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM4 6h1v1H4zM6 6h1v1H6zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM6 7h1v1H6zM10 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM2 9h1v1H2zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM9 9h1v1H9zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAmbulance.displayName = "SvgAmbulance";

export default SvgAmbulance;
