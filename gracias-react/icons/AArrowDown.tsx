import * as React from "react";

interface SvgAArrowDownProps extends React.SVGAttributes<SVGElement> {}

const SvgAArrowDown = React.forwardRef<SVGSVGElement, SvgAArrowDownProps>(
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
      <path d="M1 3h1v1H1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM8 3h1v1H8zM1 4h1v1H1zM4 4h1v1H4zM8 4h1v1H8zM1 5h1v1H1zM4 5h1v1H4zM8 5h1v1H8zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM7 7h1v1H7zM8 7h1v1H8zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM8 8h1v1H8z" />
    </svg>
  )
);

SvgAArrowDown.displayName = "SvgAArrowDown";

export default SvgAArrowDown;
