import * as React from "react";

interface SvgBoomBoxProps extends React.SVGAttributes<SVGElement> {}

const SvgBoomBox = React.forwardRef<SVGSVGElement, SvgBoomBoxProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM9 3h1v1H9zM2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM7 7h1v1H7zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM4 8h1v1H4zM7 8h1v1H7zM8 8h1v1H8zM10 8h1v1h-1zM1 9h1v1H1zM10 9h1v1h-1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBoomBox.displayName = "SvgBoomBox";

export default SvgBoomBox;
