import * as React from "react";

interface SvgDicesProps extends React.SVGAttributes<SVGElement> {}

const SvgDices = React.forwardRef<SVGSVGElement, SvgDicesProps>(
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
      <path d="M7 1h1v1H7zM6 2h1v1H6zM8 2h1v1H8zM5 3h1v1H5zM7 3h1v1H7zM9 3h1v1H9zM8 4h1v1H8zM10 4h1v1h-1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM9 5h1v1H9zM1 6h1v1H1zM6 6h1v1H6zM8 6h1v1H8zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM1 8h1v1H1zM3 8h1v1H3zM6 8h1v1H6zM1 9h1v1H1zM6 9h1v1H6zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgDices.displayName = "SvgDices";

export default SvgDices;
