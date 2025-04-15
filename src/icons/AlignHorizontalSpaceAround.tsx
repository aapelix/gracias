import * as React from "react";

interface SvgAlignHorizontalSpaceAroundProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalSpaceAround = React.forwardRef<SVGSVGElement, SvgAlignHorizontalSpaceAroundProps>(
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
      <path d="M2 1h1v1H2zM9 1h1v1H9zM2 2h1v1H2zM9 2h1v1H9zM2 3h1v1H2zM5 3h1v1H5zM6 3h1v1H6zM9 3h1v1H9zM2 4h1v1H2zM4 4h1v1H4zM7 4h1v1H7zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM7 7h1v1H7zM9 7h1v1H9zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM9 8h1v1H9zM2 9h1v1H2zM9 9h1v1H9zM2 10h1v1H2zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAlignHorizontalSpaceAround.displayName = "SvgAlignHorizontalSpaceAround";

export default SvgAlignHorizontalSpaceAround;
