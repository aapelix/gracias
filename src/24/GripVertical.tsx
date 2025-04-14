import * as React from "react";

interface SvgGripVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgGripVertical = React.forwardRef<SVGSVGElement, SvgGripVerticalProps>(
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
      <path d="M8 3h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zM7 4h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 5h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 6h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 4h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 4h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgGripVertical.displayName = "SvgGripVertical";

export default SvgGripVertical;
