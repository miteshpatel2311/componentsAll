import React, { ReactNode, useMemo } from "react";
import { Tooltip as ReactTooltip, ITooltip } from "react-tooltip";

interface TooltipProps extends ITooltip {
  children: ReactNode;
}

const ToolTip: React.FC<TooltipProps> = ({ children, ...props }) => {
  const uniqueId = useMemo(() => Math.random().toString(16).slice(2), []);

  return (
    <>
      <div data-tooltip-id={uniqueId}>{children}</div>
      <ReactTooltip id={uniqueId} {...props} />
    </>
  );
};

export default ToolTip;
