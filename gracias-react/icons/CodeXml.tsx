import * as React from "react";

interface SvgCodeXmlProps extends React.SVGAttributes<SVGElement> {}

const SvgCodeXml = React.forwardRef<SVGSVGElement, SvgCodeXmlProps>(
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
      <path d="M7 1h1v1H7zM7 2h1v1H7zM3 3h1v1H3zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM6 4h1v1H6zM9 4h1v1H9zM1 5h1v1H1zM5 5h1v1H5zM10 5h1v1h-1zM2 6h1v1H2zM5 6h1v1H5zM9 6h1v1H9zM3 7h1v1H3zM5 7h1v1H5zM8 7h1v1H8zM4 8h1v1H4zM4 9h1v1H4z" />
    </svg>
  )
);

SvgCodeXml.displayName = "SvgCodeXml";

export default SvgCodeXml;
