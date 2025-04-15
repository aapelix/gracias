import * as React from "react";

interface SvgAlignHorizontalJustifyEndProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalJustifyEnd = React.forwardRef<SVGSVGElement, SvgAlignHorizontalJustifyEndProps>(
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
      <path d="M10 1h1v1h-1zM2 2h1v1H2zM3 2h1v1H3zM10 2h1v1h-1zM1 3h1v1H1zM4 3h1v1H4zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM7 4h1v1H7zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM9 7h1v1H9zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM7 8h1v1H7zM8 8h1v1H8zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM10 9h1v1h-1zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgAlignHorizontalJustifyEnd.displayName = "SvgAlignHorizontalJustifyEnd";

export default SvgAlignHorizontalJustifyEnd;
