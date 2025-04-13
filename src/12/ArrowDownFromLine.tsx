import * as React from "react";

interface SvgArrowDownFromLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowDownFromLine = React.forwardRef<SVGSVGElement, SvgArrowDownFromLineProps>(
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
      <path d="M2 2h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM5 4h1v1H5zm0 1h1v1H5zm0 1h1v1H5zm0 1h1v1H5zM3 8h1v1H3zm2 0h1v1H5zm2 0h1v1H7zM4 9h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm-1 1h1v1H5z" />
    </svg>
  )
);

SvgArrowDownFromLine.displayName = "SvgArrowDownFromLine";

export default SvgArrowDownFromLine;
