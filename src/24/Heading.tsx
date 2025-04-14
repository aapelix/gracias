import * as React from "react";

interface SvgHeadingProps extends React.SVGAttributes<SVGElement> {}

const SvgHeading = React.forwardRef<SVGSVGElement, SvgHeadingProps>(
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
      <path d="M5 3h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 4h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 5h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 6h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 8h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 10h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 11h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 12h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 13h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 14h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 15h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 16h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 17h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 18h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 19h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 20h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgHeading.displayName = "SvgHeading";

export default SvgHeading;
