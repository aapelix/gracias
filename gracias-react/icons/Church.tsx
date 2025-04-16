import * as React from "react";

interface SvgChurchProps extends React.SVGAttributes<SVGElement> {}

const SvgChurch = React.forwardRef<SVGSVGElement, SvgChurchProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM3 2h1v1H3zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM5 3h1v1H5zM8 3h1v1H8zM1 4h1v1H1zM2 4h1v1H2zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM8 4h1v1H8zM9 4h1v1H9zM0 5h1v1H0zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM10 5h1v1h-1zM0 6h1v1H0zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM10 6h1v1h-1zM0 7h1v1H0zM2 7h1v1H2zM8 7h1v1H8zM10 7h1v1h-1zM0 8h1v1H0zM2 8h1v1H2zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM8 8h1v1H8zM10 8h1v1h-1zM0 9h1v1H0zM2 9h1v1H2zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM10 9h1v1h-1zM0 10h1v1H0zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgChurch.displayName = "SvgChurch";

export default SvgChurch;
