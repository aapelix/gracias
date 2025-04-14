import * as React from "react";

interface SvgHashProps extends React.SVGAttributes<SVGElement> {}

const SvgHash = React.forwardRef<SVGSVGElement, SvgHashProps>(
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
      <path d="M9 2h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM9 3h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM9 4h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM9 5h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM9 6h1v1H9zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM8 7h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 8h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 10h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM3 14h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 15h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 16h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H7zm1 0h1v1H8zm5 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgHash.displayName = "SvgHash";

export default SvgHash;
