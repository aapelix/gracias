import * as React from "react";

interface SvgAlignCenterVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignCenterVertical = React.forwardRef<SVGSVGElement, SvgAlignCenterVerticalProps>(
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
      <path d="M5 1h1v1H5zM1 2h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM0 3h1v1H0zm5 0h1v1H5zm5 0h1v1h-1zM0 4h1v1H0zm5 0h1v1H5zm5 0h1v1h-1zM1 5h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM5 6h1v1H5zM2 7h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zM1 8h1v1H1zm4 0h1v1H5zm4 0h1v1H9zM1 9h1v1H1zm4 0h1v1H5zm4 0h1v1H9zm-7 1h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8z" />
    </svg>
  )
);

SvgAlignCenterVertical.displayName = "SvgAlignCenterVertical";

export default SvgAlignCenterVertical;
