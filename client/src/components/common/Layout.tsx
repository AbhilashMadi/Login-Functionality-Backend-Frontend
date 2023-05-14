import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface ILayout {
  child: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { child } = props
  return (
    <>
      <Header />
      <main>
        {child}
      </main>
      <Footer />
    </>
  )
}

export default Layout;