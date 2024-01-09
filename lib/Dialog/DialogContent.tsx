import { forwardRef } from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const DialogContent = forwardRef<HTMLDivElement, IProps>(
  ({ className, children }, ref) => {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

export default DialogContent;
