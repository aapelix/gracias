import * as React from "react";

interface SvgTally2Props extends React.SVGAttributes<SVGElement> {}

const SvgTally2 = React.forwardRef<SVGSVGElement, SvgTally2Props>(
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
      <path d="M3 3h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM3 4h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM3 5h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM3 6h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM3 7h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM3 8h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zM3 9h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgTally2.displayName = "SvgTally2";

export default SvgTally2;
