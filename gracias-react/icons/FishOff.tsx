import * as React from "react";

interface SvgFishOffProps extends React.SVGAttributes<SVGElement> {}

const SvgFishOff = React.forwardRef<SVGSVGElement, SvgFishOffProps>(
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
      <path d="M1 1h1v1H1zM2 2h1v1H2zM5 2h1v1H5zM6 2h1v1H6zM1 3h1v1H1zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM0 4h1v1H0zM2 4h1v1H2zM4 4h1v1H4zM8 4h1v1H8zM0 5h1v1H0zM3 5h1v1H3zM5 5h1v1H5zM9 5h1v1H9zM1 6h1v1H1zM3 6h1v1H3zM6 6h1v1H6zM10 6h1v1h-1zM0 7h1v1H0zM3 7h1v1H3zM7 7h1v1H7zM0 8h1v1H0zM2 8h1v1H2zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM1 9h1v1H1zM4 9h1v1H4zM6 9h1v1H6zM7 9h1v1H7zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgFishOff.displayName = "SvgFishOff";

export default SvgFishOff;
