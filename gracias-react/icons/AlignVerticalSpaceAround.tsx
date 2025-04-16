import * as React from "react";

interface SvgAlignVerticalSpaceAroundProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignVerticalSpaceAround = React.forwardRef<SVGSVGElement, SvgAlignVerticalSpaceAroundProps>(
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
      <path d="M1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM10 2h1v1h-1zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM8 6h1v1H8zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM10 9h1v1h-1z" />
    </svg>
  )
);

SvgAlignVerticalSpaceAround.displayName = "SvgAlignVerticalSpaceAround";

export default SvgAlignVerticalSpaceAround;
