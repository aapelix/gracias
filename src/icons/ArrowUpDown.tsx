import * as React from "react";

interface SvgArrowUpDownProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpDown = React.forwardRef<SVGSVGElement, SvgArrowUpDownProps>(
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
      <path d="M3 2h1v1H3zM8 2h1v1H8zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM5 4h1v1H5zM8 4h1v1H8zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM8 6h1v1H8zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM3 8h1v1H3zM7 8h1v1H7zM8 8h1v1H8zM9 8h1v1H9zM3 9h1v1H3zM8 9h1v1H8z" />
    </svg>
  )
);

SvgArrowUpDown.displayName = "SvgArrowUpDown";

export default SvgArrowUpDown;
