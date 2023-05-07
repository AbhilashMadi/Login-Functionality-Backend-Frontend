import React from 'react';
import resources from '../../constants/resources';

interface ICustomAvatar {
  src?: string;
  size?: number;
  name: string;
  role?: string;
}

const CustomAvatar: React.FC<ICustomAvatar> = (props) => {
  const { src = { resources }, size=150, name,role='img' } = props;
  const fallbackInitials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div
      className="custom-avatar"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${src})`,
      }}
      title={name}
      role={role}
      aria-label={name}
    >
      {src ? null : <span>{fallbackInitials}</span>}
    </div>
  );
};

export default CustomAvatar;
