import React from 'react';


type LayoutProps = {
  children: React.ReactNode;
};

type BannerProps = {
  children: React.ReactNode;
  src: string;
};

const Layout: React.FC<LayoutProps> & {
  Banner: React.FC<BannerProps>;
  Container: React.FC<LayoutProps>;
  Sidebar: React.FC<LayoutProps>;
  Content: React.FC<LayoutProps> & {
    Header: React.FC<LayoutProps>;
    Footer: React.FC<LayoutProps>;
  };
} = ({ children }) => {
  return (
    <div className='max-w-6xl mx-auto min-h-screen relative px-4 py-16'>
      {children}
    </div>
  );
};

const Container: React.FC<LayoutProps> = ({ children }) => {
  return <div className="grid xl:grid-cols-9 lg:gap-x-8 gap-y-6">
    {children}
  </div>
}

// Banner Subcomponent
const Banner: React.FC<BannerProps> = ({ children, src }) => {
  return (
    <div className='mb-8 relative rounded-2xl shadow-2xl shadow-slate-300/5 border h-56 overflow-hidden'>
      <img src={src}
        width={600} height={600} alt='Hotels'
        className='rounded-2xl w-full h-56 object-cover object-center'
      />
      <div className='absolute bg-black/40 backdrop-blur-sm inset-0 flex flex-col gap-4 px-6 items-center justify-center'>
        {children}
      </div>
    </div>
  );
}

const Sidebar: React.FC<LayoutProps> = ({ children }) => {
  return <div className="xl:col-span-2 space-y-8 p-8 rounded-2xl border">
    {children}
  </div>;
};

const Content: React.FC<LayoutProps> & {
  Header: React.FC<LayoutProps>;
  Footer: React.FC<LayoutProps>;
} = ({ children }) => {
  return (
    <div className="xl:col-span-7 mx-auto space-y-8 w-full bg-background">
      {children}
    </div>
  );
};

// Header Subcomponent
const Header: React.FC<LayoutProps> = ({ children }) => {
  return <header className="content-header p-8 rounded-2xl border">{children}</header>;
};

// Footer Subcomponent
const Footer: React.FC<LayoutProps> = ({ children }) => {
  return <div className="content-footer p-8 rounded-2xl border">{children}</div>;
};

Content.Header = Header;
Content.Footer = Footer;
Layout.Sidebar = Sidebar;
Layout.Content = Content;
Layout.Banner = Banner;
Layout.Container = Container;

export default Layout;