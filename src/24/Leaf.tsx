import * as React from "react";

interface SvgLeafProps extends React.SVGAttributes<SVGElement> {}

const SvgLeaf = React.forwardRef<SVGSVGElement, SvgLeafProps>(
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
      <path d="M18 1h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zM8 5h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM6 6h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm12 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm14 0h1v1h-1zm1 0h1v1h-1zM4 9h1v1H4zm1 0h1v1H5zm15 0h1v1h-1zm1 0h1v1h-1zM3 10h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm15 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm8 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM3 13h1v1H3zm1 0h1v1H4zm5 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM3 14h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm9 0h1v1h-1zm1 0h1v1h-1zM3 15h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm10 0h1v1h-1zm1 0h1v1h-1zM3 16h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm12 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 18h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 20h1v1H1zm1 0h1v1H2zm6 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 21h1v1H1zm1 0h1v1H2z" />
    </svg>
  )
);

SvgLeaf.displayName = "SvgLeaf";

export default SvgLeaf;
