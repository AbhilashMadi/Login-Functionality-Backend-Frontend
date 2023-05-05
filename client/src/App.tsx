import { FC, Suspense } from 'react';
import Layout from './components/common/Layout';
import { Routes, Route } from 'react-router-dom';
import { routes, IRouteObject } from './routes/routes';
import { ThemeProvider } from './context/ThemeProvider';
import MyComponent from './components/MyComponent';

const App: FC = (props) => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <ThemeProvider>
        <Routes>
          {
            routes.map((item: IRouteObject) => {
              return <Route key={item.name} path={item.path} element={<Layout child={<item.element />} />} />
            })
          }
        </Routes>
        <MyComponent />
      </ThemeProvider>
    </Suspense>
  )
}

export default App;