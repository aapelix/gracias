import * as React from "react";

interface SvgAlignHorizontalJustifyCenterProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalJustifyCenter = React.forwardRef<SVGSVGElement, SvgAlignHorizontalJustifyCenterProps>(
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
      <path d="M6 1h1v1H6zM2 2h1v1H2zM3 2h1v1H3zM6 2h1v1H6zM1 3h1v1H1zM4 3h1v1H4zM6 3h1v1H6zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM9 8h1v1H9zM2 9h1v1H2zM3 9h1v1H3zM6 9h1v1H6zM6 10h1v1H6z" />
    </svg>
  )
);

SvgAlignHorizontalJustifyCenter.displayName = "SvgAlignHorizontalJustifyCenter";

export default SvgAlignHorizontalJustifyCenter;
