import * as React from "react";

interface SvgFileAudioProps extends React.SVGAttributes<SVGElement> {}

const SvgFileAudio = React.forwardRef<SVGSVGElement, SvgFileAudioProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM2 2h1v1H2zM6 2h1v1H6zM7 2h1v1H7zM2 3h1v1H2zM6 3h1v1H6zM8 3h1v1H8zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM9 5h1v1H9zM2 6h1v1H2zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM7 7h1v1H7zM9 7h1v1H9zM1 8h1v1H1zM2 8h1v1H2zM6 8h1v1H6zM7 8h1v1H7zM9 8h1v1H9zM1 9h1v1H1zM3 9h1v1H3zM5 9h1v1H5zM7 9h1v1H7zM9 9h1v1H9zM1 10h1v1H1zM2 10h1v1H2zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgFileAudio.displayName = "SvgFileAudio";

export default SvgFileAudio;
