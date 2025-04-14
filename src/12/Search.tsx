import * as React from "react";

interface SvgSearchProps extends React.SVGAttributes<SVGElement> {}

const SvgSearch = React.forwardRef<SVGSVGElement, SvgSearchProps>(
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
      <path d="M3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zM2 2h1v1H2zm5 0h1v1H7zM1 3h1v1H1zm7 0h1v1H8zM1 4h1v1H1zm7 0h1v1H8zM1 5h1v1H1zm7 0h1v1H8zM1 6h1v1H1zm7 0h1v1H8zM2 7h1v1H2zm5 0h1v1H7zM3 8h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm2 0h1v1H8zm1 1h1v1H9zm1 1h1v1h-1z" />
    </svg>
  )
);

SvgSearch.displayName = "SvgSearch";

export default SvgSearch;
