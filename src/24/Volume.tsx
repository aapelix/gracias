import * as React from "react";

interface SvgVolumeProps extends React.SVGAttributes<SVGElement> {}

const SvgVolume = React.forwardRef<SVGSVGElement, SvgVolumeProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M9 3h1v1H9zm1 0h1v1h-1zM8 4h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM7 5h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM6 6h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zm1 0h1v1h-1zM2 7h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zM1 8h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zM1 9h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zM1 10h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zM1 11h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zM1 12h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zM1 13h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zM1 14h1v1H1zm1 0h1v1H2zm8 0h1v1h-1zm1 0h1v1h-1zM1 15h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1H9zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgVolume.displayName = "SvgVolume";

export default SvgVolume;
