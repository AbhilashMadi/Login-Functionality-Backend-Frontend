import { FC, Suspense } from 'react';
import Layout from './components/common/Layout';
import { Routes, Route } from 'react-router-dom';
import { routes, IRouteObject } from './routes/routes';
import { ThemeProvider } from './context/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const App: FC = (props) => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <ThemeProvider>
        <Toaster
          position='top-right'
          reverseOrder={false} />
        <Routes>
          {
            routes.map((item: IRouteObject) => {
              return <Route key={item.name} path={item.path} element={<Layout child={<item.element />} />} />
            })
          }
        </Routes>
      </ThemeProvider>
    </Suspense>
  )
}

export default App;