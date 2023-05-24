import * as React from 'react';

interface Props {
    title?: string;
}

const Botones: React.FC<Props> = ({ title }) => {

    return (
      <>
            <input type="button" className='btnHabilidades btn-aboutMe' value={title} />
      </>
    );
};

export default Botones;