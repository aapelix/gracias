import * as React from "react";

interface SvgAlignHorizontalJustifyStartProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalJustifyStart = React.forwardRef<SVGSVGElement, SvgAlignHorizontalJustifyStartProps>(
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
      <path d="M1 1h1v1H1zM1 2h1v1H1zM3 2h1v1H3zM4 2h1v1H4zM1 3h1v1H1zM2 3h1v1H2zM5 3h1v1H5zM1 4h1v1H1zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM2 5h1v1H2zM5 5h1v1H5zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM5 6h1v1H5zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM2 7h1v1H2zM5 7h1v1H5zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM2 8h1v1H2zM5 8h1v1H5zM8 8h1v1H8zM9 8h1v1H9zM1 9h1v1H1zM3 9h1v1H3zM4 9h1v1H4zM1 10h1v1H1z" />
    </svg>
  )
);

SvgAlignHorizontalJustifyStart.displayName = "SvgAlignHorizontalJustifyStart";

export default SvgAlignHorizontalJustifyStart;
