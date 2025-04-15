import * as React from "react";

interface SvgAlignStartVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignStartVertical = React.forwardRef<SVGSVGElement, SvgAlignStartVerticalProps>(
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
      <path d="M1 1h1v1H1zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM3 2h1v1H3zM10 2h1v1h-1zM1 3h1v1H1zM3 3h1v1H3zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM1 6h1v1H1zM4 6h1v1H4zM5 6h1v1H5zM6 6h1v1H6zM7 6h1v1H7zM1 7h1v1H1zM3 7h1v1H3zM8 7h1v1H8zM1 8h1v1H1zM3 8h1v1H3zM8 8h1v1H8zM1 9h1v1H1zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM1 10h1v1H1z" />
    </svg>
  )
);

SvgAlignStartVertical.displayName = "SvgAlignStartVertical";

export default SvgAlignStartVertical;
