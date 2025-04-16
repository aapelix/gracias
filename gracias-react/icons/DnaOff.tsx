import * as React from "react";

interface SvgDnaOffProps extends React.SVGAttributes<SVGElement> {}

const SvgDnaOff = React.forwardRef<SVGSVGElement, SvgDnaOffProps>(
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
      <path d="M1 1h1v1H1zM7 1h1v1H7zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM3 3h1v1H3zM6 3h1v1H6zM7 3h1v1H7zM4 4h1v1H4zM8 4h1v1H8zM10 4h1v1h-1zM4 5h1v1H4zM5 5h1v1H5zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM6 6h1v1H6zM0 7h1v1H0zM1 7h1v1H1zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM7 7h1v1H7zM3 8h1v1H3zM5 8h1v1H5zM8 8h1v1H8zM4 9h1v1H4zM5 9h1v1H5zM9 9h1v1H9zM4 10h1v1H4zM5 10h1v1H5zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgDnaOff.displayName = "SvgDnaOff";

export default SvgDnaOff;
