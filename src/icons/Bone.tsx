import * as React from "react";

interface SvgBoneProps extends React.SVGAttributes<SVGElement> {}

const SvgBone = React.forwardRef<SVGSVGElement, SvgBoneProps>(
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
      <path d="M6 1h1v1H6zM7 1h1v1H7zM5 2h1v1H5zM8 2h1v1H8zM5 3h1v1H5zM8 3h1v1H8zM9 3h1v1H9zM4 4h1v1H4zM5 4h1v1H5zM10 4h1v1h-1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM10 5h1v1h-1zM1 6h1v1H1zM7 6h1v1H7zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM6 7h1v1H6zM7 7h1v1H7zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM3 9h1v1H3zM6 9h1v1H6zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgBone.displayName = "SvgBone";

export default SvgBone;
