import * as React from "react";

interface SvgLinkProps extends React.SVGAttributes<SVGElement> {}

const SvgLink = React.forwardRef<SVGSVGElement, SvgLinkProps>(
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
      <path d="M7 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM6 2h1v1H6zm4 0h1v1h-1zm0 1h1v1h-1zM4 4h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zM3 5h1v1H3zm3 0h1v1H6zm3 0h1v1H9zM2 6h1v1H2zm3 0h1v1H5zm3 0h1v1H8zM1 7h1v1H1zm5 0h1v1H6zm1 0h1v1H7zM1 8h1v1H1zm0 1h1v1H1zm4 0h1v1H5zm-3 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4z" />
    </svg>
  )
);

SvgLink.displayName = "SvgLink";

export default SvgLink;
