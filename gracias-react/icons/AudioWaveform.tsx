import * as React from "react";

interface SvgAudioWaveformProps extends React.SVGAttributes<SVGElement> {}

const SvgAudioWaveform = React.forwardRef<SVGSVGElement, SvgAudioWaveformProps>(
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
      <path d="M7 1h1v1H7zM3 2h1v1H3zM6 2h1v1H6zM8 2h1v1H8zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM2 4h1v1H2zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM2 5h1v1H2zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM11 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM4 8h1v1H4zM6 8h1v1H6zM9 8h1v1H9zM4 9h1v1H4zM6 9h1v1H6zM5 10h1v1H5z" />
    </svg>
  )
);

SvgAudioWaveform.displayName = "SvgAudioWaveform";

export default SvgAudioWaveform;
