import { AppBar, Toolbar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

export const Header: React.VFC = () => {
  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <p className="text-lg flex-grow">diclog</p>
        <p className="text-lg">使い方</p>
        <IconButton size="large" edge="end" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
