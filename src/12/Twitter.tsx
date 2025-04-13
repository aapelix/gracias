import * as React from "react";

interface SvgTwitterProps extends React.SVGAttributes<SVGElement> {}

const SvgTwitter = React.forwardRef<SVGSVGElement, SvgTwitterProps>(
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
      <path d="M6 2h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zM1 3h1v1H1zm1 0h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zM1 4h1v1H1zm2 0h1v1H3zm2 0h1v1H5zm4 0h1v1H9zM1 5h1v1H1zm3 0h1v1H4zm5 0h1v1H9zM1 6h1v1H1zm8 0h1v1H9zM2 7h1v1H2zm1 0h1v1H3zm6 0h1v1H9zM2 8h1v1H2zm6 0h1v1H8zM1 9h1v1H1zm6 0h1v1H7zm-5 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6z" />
    </svg>
  )
);

SvgTwitter.displayName = "SvgTwitter";

export default SvgTwitter;
