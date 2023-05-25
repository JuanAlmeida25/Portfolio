import * as React from 'react';

interface Props {
    imagen?: string;
}

const Iconos: React.FC<Props> = ({ imagen }) => {

    return (
      <>
            <img className='iconos-aboutMe' src={ imagen } />
      </>
    );
};

export default Iconos;