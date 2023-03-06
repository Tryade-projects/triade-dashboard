import React from 'react';

/**
 * @param {object} props - The props object.
 * @param {string} props.background - The background color of the icon.
 * @param {string} props.image - The image of the icon.
 * @returns  {JSX.Element} - A div with a className of formatIcon and a style of background. It also returns an image with a source of image, an alt of icon, a height of 40, and a width of 40.
 */
const FormatIcon = ({ background, image }) => {
  return (
    <div
      className='formatIcon'
      style={{ background: `${background}` }}>
      <img
        src={image}
        alt='icon'
        height={40}
        width={40}
      />
    </div>
  );
};

export default FormatIcon;
