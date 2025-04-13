import * as React from "react";

interface SvgPoundSterlingProps extends React.SVGAttributes<SVGElement> {}

const SvgPoundSterling = React.forwardRef<SVGSVGElement, SvgPoundSterlingProps>(
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
      <path d="M12 2h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM9 5h1v1H9zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM9 6h1v1H9zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM9 7h1v1H9zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM9 8h1v1H9zm1 0h1v1h-1zM9 9h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-5 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 13h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-1 1h1v1H9zm1 0h1v1h-1zm-5 1h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 21h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgPoundSterling.displayName = "SvgPoundSterling";

export default SvgPoundSterling;
