import * as React from "react";

interface SvgCircleDotDashedProps extends React.SVGAttributes<SVGElement> {}

const SvgCircleDotDashed = React.forwardRef<SVGSVGElement, SvgCircleDotDashedProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM2 1h1v1H2zM8 1h1v1H8zM1 2h1v1H1zM9 2h1v1H9zM0 4h1v1H0zM5 4h1v1H5zM10 4h1v1h-1zM0 5h1v1H0zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM10 5h1v1h-1zM0 6h1v1H0zM5 6h1v1H5zM10 6h1v1h-1zM1 8h1v1H1zM9 8h1v1H9zM2 9h1v1H2zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgCircleDotDashed.displayName = "SvgCircleDotDashed";

export default SvgCircleDotDashed;
