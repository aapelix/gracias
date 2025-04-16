import * as React from "react";

interface SvgDnaProps extends React.SVGAttributes<SVGElement> {}

const SvgDna = React.forwardRef<SVGSVGElement, SvgDnaProps>(
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
      <path d="M7 1h1v1H7zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM6 3h1v1H6zM7 3h1v1H7zM8 4h1v1H8zM10 4h1v1h-1zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM7 6h1v1H7zM8 6h1v1H8zM0 7h1v1H0zM1 7h1v1H1zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM3 8h1v1H3zM5 8h1v1H5zM4 9h1v1H4zM5 9h1v1H5zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgDna.displayName = "SvgDna";

export default SvgDna;
