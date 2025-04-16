import * as React from "react";

interface SvgChevronsRightLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronsRightLeft = React.forwardRef<SVGSVGElement, SvgChevronsRightLeftProps>(
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
      <path d="M1 2h1v1H1zM10 2h1v1h-1zM2 3h1v1H2zM9 3h1v1H9zM3 4h1v1H3zM8 4h1v1H8zM4 5h1v1H4zM7 5h1v1H7zM3 6h1v1H3zM8 6h1v1H8zM2 7h1v1H2zM9 7h1v1H9zM1 8h1v1H1zM10 8h1v1h-1z" />
    </svg>
  )
);

SvgChevronsRightLeft.displayName = "SvgChevronsRightLeft";

export default SvgChevronsRightLeft;
