import * as React from "react";

interface SvgChartScatterProps extends React.SVGAttributes<SVGElement> {}

const SvgChartScatter = React.forwardRef<SVGSVGElement, SvgChartScatterProps>(
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
      <path d="M2 2h1v1H2zm1 0h1v1H3zM2 3h1v1H2zm1 0h1v1H3zM2 4h1v1H2zm1 0h1v1H3zm15 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm14 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 6h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm11 0h1v1h-1zM2 7h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM2 8h1v1H2zm1 0h1v1H3zm4 0h1v1H7zM2 9h1v1H2zm1 0h1v1H3zm-1 1h1v1H2zm1 0h1v1H3zm8 0h1v1h-1zm-9 1h1v1H2zm1 0h1v1H3zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm8 0h1v1h-1zm-9 1h1v1H2zm1 0h1v1H3zm14 0h1v1h-1zM2 14h1v1H2zm1 0h1v1H3zm13 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 15h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm10 0h1v1h-1zM2 16h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm-6 1h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm-5 1h1v1H2zm1 0h1v1H3zm-1 1h1v1H2zm1 0h1v1H3zm-1 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 21h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgChartScatter.displayName = "SvgChartScatter";

export default SvgChartScatter;
