import * as React from "react";

interface SvgArrowDown10Props extends React.SVGAttributes<SVGElement> {}

const SvgArrowDown10 = React.forwardRef<SVGSVGElement, SvgArrowDown10Props>(
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
      <path d="M8 1h1v1H8zm1 0h1v1H9zM3 2h1v1H3zm6 0h1v1H9zM3 3h1v1H3zm6 0h1v1H9zM3 4h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM3 5h1v1H3zm0 1h1v1H3zm5 0h1v1H8zm1 0h1v1H9zM1 7h1v1H1zm2 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zM3 9h1v1H3zm5 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgArrowDown10.displayName = "SvgArrowDown10";

export default SvgArrowDown10;
