import * as React from "react";

interface SvgBlocksProps extends React.SVGAttributes<SVGElement> {}

const SvgBlocks = React.forwardRef<SVGSVGElement, SvgBlocksProps>(
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
      <path d="M7 2h1v1H7zM8 2h1v1H8zM6 3h1v1H6zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM8 5h1v1H8zM1 6h1v1H1zM4 6h1v1H4zM1 7h1v1H1zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM1 9h1v1H1zM4 9h1v1H4zM7 9h1v1H7zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgBlocks.displayName = "SvgBlocks";

export default SvgBlocks;
