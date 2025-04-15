import * as React from "react";

interface SvgCakeSliceProps extends React.SVGAttributes<SVGElement> {}

const SvgCakeSlice = React.forwardRef<SVGSVGElement, SvgCakeSliceProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM6 2h1v1H6zM7 2h1v1H7zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM8 3h1v1H8zM2 4h1v1H2zM3 4h1v1H3zM9 4h1v1H9zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM10 6h1v1h-1zM1 7h1v1H1zM10 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM10 8h1v1h-1zM1 9h1v1H1zM10 9h1v1h-1zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCakeSlice.displayName = "SvgCakeSlice";

export default SvgCakeSlice;
