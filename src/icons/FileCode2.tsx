import * as React from "react";

interface SvgFileCode2Props extends React.SVGAttributes<SVGElement> {}

const SvgFileCode2 = React.forwardRef<SVGSVGElement, SvgFileCode2Props>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM5 2h1v1H5zM7 2h1v1H7zM2 3h1v1H2zM5 3h1v1H5zM8 3h1v1H8zM2 4h1v1H2zM5 4h1v1H5zM9 4h1v1H9zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM9 6h1v1H9zM1 7h1v1H1zM5 7h1v1H5zM9 7h1v1H9zM2 8h1v1H2zM4 8h1v1H4zM9 8h1v1H9zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFileCode2.displayName = "SvgFileCode2";

export default SvgFileCode2;
