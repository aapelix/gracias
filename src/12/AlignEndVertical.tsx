import * as React from "react";

interface SvgAlignEndVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignEndVertical = React.forwardRef<SVGSVGElement, SvgAlignEndVerticalProps>(
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
      <path d="M10 1h1v1h-1zM2 2h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zM1 3h1v1H1zm7 0h1v1H8zm2 0h1v1h-1zM1 4h1v1H1zm7 0h1v1H8zm2 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zm0 1h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zM4 8h1v1H4zm4 0h1v1H8zm2 0h1v1h-1zM4 9h1v1H4zm4 0h1v1H8zm2 0h1v1h-1zm-5 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1z" />
    </svg>
  )
);

SvgAlignEndVertical.displayName = "SvgAlignEndVertical";

export default SvgAlignEndVertical;
