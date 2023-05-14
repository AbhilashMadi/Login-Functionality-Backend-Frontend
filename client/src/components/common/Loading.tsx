import { FC } from 'react';
import '../../scss/loading.scss';

const Loading: FC = () => {
  return (
    <div className="gooey">
      <div className="dot"></div>
      <div className="dots">
        <span className="dot-item"></span>
        <span className="dot-item"></span>
        <span className="dot-item"></span>
      </div>
    </div>
  )
}

export default Loading;