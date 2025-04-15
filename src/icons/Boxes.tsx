import * as React from "react";

interface SvgBoxesProps extends React.SVGAttributes<SVGElement> {}

const SvgBoxes = React.forwardRef<SVGSVGElement, SvgBoxesProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM2 2h1v1H2zM3 2h1v1H3zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM4 3h1v1H4zM5 3h1v1H5zM7 3h1v1H7zM2 4h1v1H2zM4 4h1v1H4zM7 4h1v1H7zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM0 6h1v1H0zM1 6h1v1H1zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM9 6h1v1H9zM10 6h1v1h-1zM0 7h1v1H0zM2 7h1v1H2zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM8 7h1v1H8zM10 7h1v1h-1zM0 8h1v1H0zM2 8h1v1H2zM5 8h1v1H5zM7 8h1v1H7zM10 8h1v1h-1zM0 9h1v1H0zM1 9h1v1H1zM2 9h1v1H2zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM9 9h1v1H9zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBoxes.displayName = "SvgBoxes";

export default SvgBoxes;
