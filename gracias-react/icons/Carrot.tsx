import * as React from "react";

interface SvgCarrotProps extends React.SVGAttributes<SVGElement> {}

const SvgCarrot = React.forwardRef<SVGSVGElement, SvgCarrotProps>(
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
      <path d="M7 1h1v1H7zM6 2h1v1H6zM8 2h1v1H8zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM9 3h1v1H9zM4 4h1v1H4zM7 4h1v1H7zM10 4h1v1h-1zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM9 5h1v1H9zM3 6h1v1H3zM7 6h1v1H7zM8 6h1v1H8zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM7 7h1v1H7zM2 8h1v1H2zM5 8h1v1H5zM1 9h1v1H1zM3 9h1v1H3zM4 9h1v1H4zM1 10h1v1H1zM2 10h1v1H2z" />
    </svg>
  )
);

SvgCarrot.displayName = "SvgCarrot";

export default SvgCarrot;
