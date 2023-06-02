import React from 'react'
import Switch from '@mui/material/Switch';
import { purple, gray } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

const switchLabel = { inputProps: { 'aria-label': 'Color switch demo' } };

const ThemeSwitcher = () => {
  return (
    <div className='h-10 bg-zinc-800 relative bottom-0 flex items-center justify-evenly rounded-sm text-sm text-gray-500'>
      <p>Dark mode</p>
      <PurpleSwitch defaultChecked />
    </div>
  )
}

export default ThemeSwitcher

const PurpleSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: purple[900],
    '&:hover': {
      backgroundColor: alpha(purple[200], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: purple[900],
  },

}));