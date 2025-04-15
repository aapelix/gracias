import * as React from "react";

interface SvgAlignEndVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignEndVertical = React.forwardRef<SVGSVGElement, SvgAlignEndVerticalProps>(
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
      <path d="M10 1h1v1h-1zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM10 2h1v1h-1zM1 3h1v1H1zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM8 4h1v1H8zM10 4h1v1h-1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM10 5h1v1h-1zM10 6h1v1h-1zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM4 8h1v1H4zM8 8h1v1H8zM10 8h1v1h-1zM4 9h1v1H4zM8 9h1v1H8zM10 9h1v1h-1zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgAlignEndVertical.displayName = "SvgAlignEndVertical";

export default SvgAlignEndVertical;
