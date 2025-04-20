import * as React from "react";

interface SvgFacebookProps extends React.SVGAttributes<SVGElement> {}

const SvgFacebook = React.forwardRef<SVGSVGElement, SvgFacebookProps>(
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
      <path d="M5 0h1v1H5zM6 0h1v1H6zM7 0h1v1H7zM8 0h1v1H8zM4 1h1v1H4zM8 1h1v1H8zM4 2h1v1H4zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM4 3h1v1H4zM6 3h1v1H6zM3 4h1v1H3zM4 4h1v1H4zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM4 6h1v1H4zM6 6h1v1H6zM7 6h1v1H7zM4 7h1v1H4zM6 7h1v1H6zM4 8h1v1H4zM6 8h1v1H6zM4 9h1v1H4zM6 9h1v1H6zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgFacebook.displayName = "SvgFacebook";

export default SvgFacebook;
