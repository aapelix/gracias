import * as React from "react";

interface SvgSpeechProps extends React.SVGAttributes<SVGElement> {}

const SvgSpeech = React.forwardRef<SVGSVGElement, SvgSpeechProps>(
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
      <path d="M5 2h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM3 3h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zM2 4h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm8 0h1v1h-1zm1 0h1v1h-1zM1 6h1v1H1zm1 0h1v1H2zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zM1 7h1v1H1zm1 0h1v1H2zm10 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM1 8h1v1H1zm1 0h1v1H2zm10 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zM1 9h1v1H1zm1 0h1v1H2zm10 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM1 10h1v1H1zm1 0h1v1H2zm10 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM1 11h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm9 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm9 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM2 13h1v1H2zm1 0h1v1H3zm9 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM2 14h1v1H2zm1 0h1v1H3zm9 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM2 15h1v1H2zm1 0h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM2 16h1v1H2zm1 0h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm9 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm10 0h1v1h-1zm1 0h1v1h-1zM1 18h1v1H1zm1 0h1v1H2zm6 0h1v1H8zm1 0h1v1H9zm10 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm6 0h1v1H8zm1 0h1v1H9zm-8 1h1v1H1zm1 0h1v1H2zm6 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgSpeech.displayName = "SvgSpeech";

export default SvgSpeech;
