import { Navbar } from "./Navbar";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Layout = ({ className, children }: Props) => {
  
  return (
    <div >
      <main className={className}>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
};


