import * as React from "react";

interface SvgBellElectricProps extends React.SVGAttributes<SVGElement> {}

const SvgBellElectric = React.forwardRef<SVGSVGElement, SvgBellElectricProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM9 1h1v1H9zM3 2h1v1H3zM7 2h1v1H7zM10 2h1v1h-1zM2 3h1v1H2zM8 3h1v1H8zM10 3h1v1h-1zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM2 5h1v1H2zM8 5h1v1H8zM3 6h1v1H3zM7 6h1v1H7zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM10 7h1v1h-1zM3 8h1v1H3zM7 8h1v1H7zM9 8h1v1H9zM10 8h1v1h-1zM3 9h1v1H3zM7 9h1v1H7zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBellElectric.displayName = "SvgBellElectric";

export default SvgBellElectric;
