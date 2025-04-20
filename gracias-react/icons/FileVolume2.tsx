import * as React from "react";

interface SvgFileVolume2Props extends React.SVGAttributes<SVGElement> {}

const SvgFileVolume2 = React.forwardRef<SVGSVGElement, SvgFileVolume2Props>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM9 6h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM6 7h1v1H6zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM5 8h1v1H5zM8 8h1v1H8zM9 8h1v1H9zM2 9h1v1H2zM7 9h1v1H7zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgFileVolume2.displayName = "SvgFileVolume2";

export default SvgFileVolume2;
