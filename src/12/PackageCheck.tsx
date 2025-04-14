import * as React from "react";

interface SvgPackageCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgPackageCheck = React.forwardRef<SVGSVGElement, SvgPackageCheckProps>(
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
      <path d="M5 1h1v1H5zm1 0h1v1H6zM3 2h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zM1 3h1v1H1zm1 0h1v1H2zm3 0h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm1 0h1v1h-1zM1 4h1v1H1zm2 0h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zM1 5h1v1H1zm4 0h1v1H5zm1 0h1v1H6zM1 6h1v1H1zm4 0h1v1H5zM1 7h1v1H1zm4 0h1v1H5zm5 0h1v1h-1zM1 8h1v1H1zm1 0h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm3 0h1v1H8zm-3 1h1v1H5zm1 0h1v1H6z" />
    </svg>
  )
);

SvgPackageCheck.displayName = "SvgPackageCheck";

export default SvgPackageCheck;
