import * as React from "react";

interface SvgTreeDeciduousProps extends React.SVGAttributes<SVGElement> {}

const SvgTreeDeciduous = React.forwardRef<SVGSVGElement, SvgTreeDeciduousProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M4 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zM3 2h1v1H3zm4 0h1v1H7zM2 3h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm1 0h1v1H8zM1 4h1v1H1zm8 0h1v1H9zM1 5h1v1H1zm8 0h1v1H9zM2 6h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm1 0h1v1H8zM1 7h1v1H1zm8 0h1v1H9zM1 8h1v1H1zm8 0h1v1H9zM2 9h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm-3 1h1v1H5z" />
    </svg>
  )
);

SvgTreeDeciduous.displayName = "SvgTreeDeciduous";

export default SvgTreeDeciduous;
