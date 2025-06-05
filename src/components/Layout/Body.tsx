interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Body = ({ children, className }: MainLayoutProps) => {
  return (
    <section
      className={`min-h-[calc(100vh-244px)] bg-gray-100 flex flex-col ${className}`}
    >
      {children}
    </section>
  );
};

export default Body;
