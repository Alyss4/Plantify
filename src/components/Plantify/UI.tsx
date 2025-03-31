import React from 'react';

const Card = ({
  title,
  content,
  footer,
}: {
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
}) => (
  <div className="card border rounded-lg p-4 bg-white shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="content mb-4">{content}</div>
    <div className="footer mt-4">{footer}</div>
  </div>
);

const Row = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {children}
    </div>
  );
};

const Col = ({
  children,
  size = 12,
  className,
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) => {
  const colSize = `w-full sm:w-${size} lg:w-${size} xl:w-${size}`;
  return (
    <div className={`p-4 ${colSize} ${className}`}>
      {children}
    </div>
  );
};

const UI = {
  Card,
  Row,
  Col,
};

export default UI;
