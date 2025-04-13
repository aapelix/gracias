import * as React from "react";

interface SvgAlignHorizontalDistributeCenterProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalDistributeCenter = React.forwardRef<SVGSVGElement, SvgAlignHorizontalDistributeCenterProps>(
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
      <path d="M2 1h1v1H2zm5 0h1v1H7zM2 2h1v1H2zm1 0h1v1H3zm4 0h1v1H7zM1 3h1v1H1zm3 0h1v1H4zm3 0h1v1H7zM1 4h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zM1 5h1v1H1zm3 0h1v1H4zm2 0h1v1H6zm3 0h1v1H9zM1 6h1v1H1zm3 0h1v1H4zm2 0h1v1H6zm3 0h1v1H9zM1 7h1v1H1zm3 0h1v1H4zm2 0h1v1H6zm3 0h1v1H9zM1 8h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zM2 9h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm-5 1h1v1H2zm5 0h1v1H7z" />
    </svg>
  )
);

SvgAlignHorizontalDistributeCenter.displayName = "SvgAlignHorizontalDistributeCenter";

export default SvgAlignHorizontalDistributeCenter;
