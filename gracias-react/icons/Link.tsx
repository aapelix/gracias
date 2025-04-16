import * as React from "react";

interface SvgLinkProps extends React.SVGAttributes<SVGElement> {}

const SvgLink = React.forwardRef<SVGSVGElement, SvgLinkProps>(
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
      <path d="M7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM6 2h1v1H6zM10 2h1v1h-1zM10 3h1v1h-1zM4 4h1v1H4zM5 4h1v1H5zM10 4h1v1h-1zM3 5h1v1H3zM6 5h1v1H6zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM8 6h1v1H8zM1 7h1v1H1zM6 7h1v1H6zM7 7h1v1H7zM1 8h1v1H1zM1 9h1v1H1zM5 9h1v1H5zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4z" />
    </svg>
  )
);

SvgLink.displayName = "SvgLink";

export default SvgLink;
