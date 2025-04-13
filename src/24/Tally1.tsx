import * as React from "react";

interface SvgTally1Props extends React.SVGAttributes<SVGElement> {}

const SvgTally1 = React.forwardRef<SVGSVGElement, SvgTally1Props>(
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
      <path d="M3 3h1v1H3zm1 0h1v1H4zM3 4h1v1H3zm1 0h1v1H4zM3 5h1v1H3zm1 0h1v1H4zM3 6h1v1H3zm1 0h1v1H4zM3 7h1v1H3zm1 0h1v1H4zM3 8h1v1H3zm1 0h1v1H4zM3 9h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4z" />
    </svg>
  )
);

SvgTally1.displayName = "SvgTally1";

export default SvgTally1;
