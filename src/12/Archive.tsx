import * as React from "react";

interface SvgArchiveProps extends React.SVGAttributes<SVGElement> {}

const SvgArchive = React.forwardRef<SVGSVGElement, SvgArchiveProps>(
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
      <path d="M2 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM1 2h1v1H1zm9 0h1v1h-1zM1 3h1v1H1zm9 0h1v1h-1zM2 4h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM2 5h1v1H2zm7 0h1v1H9zM2 6h1v1H2zm2 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm2 0h1v1H9zM2 7h1v1H2zm7 0h1v1H9zM2 8h1v1H2zm7 0h1v1H9zM2 9h1v1H2zm7 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8z" />
    </svg>
  )
);

SvgArchive.displayName = "SvgArchive";

export default SvgArchive;
