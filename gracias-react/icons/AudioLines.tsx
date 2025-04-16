import * as React from "react";

interface SvgAudioLinesProps extends React.SVGAttributes<SVGElement> {}

const SvgAudioLines = React.forwardRef<SVGSVGElement, SvgAudioLinesProps>(
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
      <path d="M5 2h1v1H5zM3 3h1v1H3zM5 3h1v1H5zM9 3h1v1H9zM3 4h1v1H3zM5 4h1v1H5zM7 4h1v1H7zM9 4h1v1H9zM1 5h1v1H1zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM9 5h1v1H9zM11 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM7 6h1v1H7zM9 6h1v1H9zM11 6h1v1h-1zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM9 7h1v1H9zM3 8h1v1H3zM5 8h1v1H5zM9 8h1v1H9zM5 9h1v1H5z" />
    </svg>
  )
);

SvgAudioLines.displayName = "SvgAudioLines";

export default SvgAudioLines;
