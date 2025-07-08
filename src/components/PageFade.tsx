import React, { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  trigger: string; // заменил any на string
};

const PageFade: React.FC<Props> = ({ children, trigger }) => {
  const [show, setShow] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setShow(false); // запускаем fade out
    const timeout = setTimeout(() => {
      setDisplayChildren(children); // меняем контент после fade out
      setShow(true); // запускаем fade in
    }, 600); // время fade out

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [trigger]);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transition: 'opacity 0.6s',
      }}
    >
      {displayChildren}
    </div>
  );
};

export default PageFade;
