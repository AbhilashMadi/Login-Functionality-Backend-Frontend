import { FC, Suspense } from 'react';
import Layout from './components/common/Layout';
import { Routes, Route } from 'react-router-dom';
import { routes, IRouteObject } from './routes/routes';

const App: FC = (props) => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Routes>
        {
          routes.map((item: IRouteObject) => {
            return <Route key={item.name} path={item.path} element={<Layout child={<item.element />} />} />
          })
        }
      </Routes>
    </Suspense>
  )
}

export default App;