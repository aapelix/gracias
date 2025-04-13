import * as React from "react";

interface SvgAArrowUpProps extends React.SVGAttributes<SVGElement> {}

const SvgAArrowUp = React.forwardRef<SVGSVGElement, SvgAArrowUpProps>(
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
      <path d="M1 3h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm4 0h1v1H8zM1 4h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM1 5h1v1H1zm3 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zM1 6h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm4 0h1v1H8zM1 7h1v1H1zm3 0h1v1H4zm4 0h1v1H8zM1 8h1v1H1zm3 0h1v1H4zm4 0h1v1H8z" />
    </svg>
  )
);

SvgAArrowUp.displayName = "SvgAArrowUp";

export default SvgAArrowUp;
