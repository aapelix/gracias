import * as React from "react";

interface SvgBookCopyProps extends React.SVGAttributes<SVGElement> {}

const SvgBookCopy = React.forwardRef<SVGSVGElement, SvgBookCopyProps>(
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
      <path d="M1 0h1v1H1zM2 0h1v1H2zM3 0h1v1H3zM4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM0 1h1v1H0zM0 2h1v1H0zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM0 3h1v1H0zM3 3h1v1H3zM10 3h1v1h-1zM0 4h1v1H0zM3 4h1v1H3zM10 4h1v1h-1zM0 5h1v1H0zM3 5h1v1H3zM10 5h1v1h-1zM0 6h1v1H0zM3 6h1v1H3zM10 6h1v1h-1zM0 7h1v1H0zM1 7h1v1H1zM3 7h1v1H3zM10 7h1v1h-1zM0 8h1v1H0zM3 8h1v1H3zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM1 9h1v1H1zM3 9h1v1H3zM4 9h1v1H4zM10 9h1v1h-1zM3 10h1v1H3zM10 10h1v1h-1zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7zM8 11h1v1H8zM9 11h1v1H9zM10 11h1v1h-1z" />
    </svg>
  )
);

SvgBookCopy.displayName = "SvgBookCopy";

export default SvgBookCopy;
