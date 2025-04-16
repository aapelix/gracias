import * as React from "react";

interface SvgCpuProps extends React.SVGAttributes<SVGElement> {}

const SvgCpu = React.forwardRef<SVGSVGElement, SvgCpuProps>(
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
      <path d="M4 1h1v1H4zM7 1h1v1H7zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM9 3h1v1H9zM1 4h1v1H1zM2 4h1v1H2zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM10 4h1v1h-1zM2 5h1v1H2zM4 5h1v1H4zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM1 7h1v1H1zM2 7h1v1H2zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM10 7h1v1h-1zM2 8h1v1H2zM9 8h1v1H9zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM4 10h1v1H4zM7 10h1v1H7z" />
    </svg>
  )
);

SvgCpu.displayName = "SvgCpu";

export default SvgCpu;
