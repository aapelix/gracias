import * as React from "react";

interface SvgClipboardPlusProps extends React.SVGAttributes<SVGElement> {}

const SvgClipboardPlus = React.forwardRef<SVGSVGElement, SvgClipboardPlusProps>(
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
      <path d="M4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM9 3h1v1H9zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM9 5h1v1H9zM2 6h1v1H2zM5 6h1v1H5zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM2 8h1v1H2zM5 8h1v1H5zM9 8h1v1H9zM2 9h1v1H2zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgClipboardPlus.displayName = "SvgClipboardPlus";

export default SvgClipboardPlus;
