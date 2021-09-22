import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ProjectHeader.css';

interface Props {
  handleChangeColor: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const falsedColors: Record<string, boolean> = {
  gray: false,
  blue: false,
  green: false,
  cyan: false,
  peach: false,
  magenta: false,
};

const ProjectHeader = ({ handleChangeColor }: Props) => {
  const [colorSelected, setColorSelected] = useState<Record<string, boolean>>({
    ...falsedColors,
    gray: true,
  });

  const handleColorOptionClicked = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();

    handleChangeColor(event);

    const color: string = (event.target as HTMLInputElement).value || 'gray';

    setColorSelected({ ...falsedColors, [color]: true });
  };

  return (
    <div>
      <div className='project__toolbar'>
        <div className='toolbar__logo'>
          <Link to='/'>
            <h1 className='toolbar__h1'>coɩɩab</h1>
          </Link>
        </div>
        <div className='toolbar__tools'>
          <span></span>
          {/* Shareable Link Button */}
          <div className='project__toolbar--share project__toolbar--mobile-hidden'>
            <input
              id='project__toolbar--share--input'
              type='text'
              readOnly
              value={window.location.href}
            />
          </div>

          {/* Color Theme Picker Radio Buttons */}
          <div className='toolbar__color-picker'>
            <fieldset>
              <legend aria-label='App Color Picker'></legend>
              <label className='toolbar__color-option-label'>
                <input
                  type='radio'
                  name='color'
                  value='gray'
                  defaultChecked={colorSelected.gray}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    handleColorOptionClicked(e)
                  }
                  className='toolbar__color-option toolbar__color-option--gray'
                />
                <span></span>
              </label>
              <label className='toolbar__color-option-label'>
                <input
                  type='radio'
                  name='color'
                  value='blue'
                  defaultChecked={colorSelected.blue}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    handleColorOptionClicked(e)
                  }
                  className='toolbar__color-option toolbar__color-option--blue'
                />
                <span></span>
              </label>
              <label className='toolbar__color-option-label'>
                <input
                  type='radio'
                  name='color'
                  value='green'
                  defaultChecked={colorSelected.green}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    handleColorOptionClicked(e)
                  }
                  className='toolbar__color-option toolbar__color-option--green'
                />
                <span></span>
              </label>
              <label className='toolbar__color-option-label'>
                <input
                  type='radio'
                  name='color'
                  value='cyan'
                  defaultChecked={colorSelected.cyan}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    handleColorOptionClicked(e)
                  }
                  className='toolbar__color-option toolbar__color-option--cyan'
                />
                <span></span>
              </label>
              <label className='toolbar__color-option-label'>
                <input
                  type='radio'
                  name='color'
                  value='peach'
                  defaultChecked={colorSelected.peach}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    handleColorOptionClicked(e)
                  }
                  className='toolbar__color-option toolbar__color-option--peach'
                />
                <span></span>
              </label>
              <label className='toolbar__color-option-label'>
                <input
                  type='radio'
                  name='color'
                  value='magenta'
                  defaultChecked={colorSelected.magenta}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    handleColorOptionClicked(e)
                  }
                  className='toolbar__color-option toolbar__color-option--magenta'
                />
                <span></span>
              </label>
            </fieldset>
          </div>
        </div>
      </div>
      <div className='toolbar__spacer'></div>
    </div>
  );
};

export default ProjectHeader;
