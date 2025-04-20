import * as React from "react";

interface SvgExternalLinkProps extends React.SVGAttributes<SVGElement> {}

const SvgExternalLink = React.forwardRef<SVGSVGElement, SvgExternalLinkProps>(
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
      <path d="M7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM10 1h1v1h-1zM9 2h1v1H9zM10 2h1v1h-1zM2 3h1v1H2zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM7 4h1v1H7zM10 4h1v1h-1zM1 5h1v1H1zM6 5h1v1H6zM1 6h1v1H1zM5 6h1v1H5zM8 6h1v1H8zM1 7h1v1H1zM8 7h1v1H8zM1 8h1v1H1zM8 8h1v1H8zM1 9h1v1H1zM8 9h1v1H8zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgExternalLink.displayName = "SvgExternalLink";

export default SvgExternalLink;
