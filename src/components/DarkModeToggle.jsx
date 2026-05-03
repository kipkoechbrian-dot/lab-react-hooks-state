import React from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={onToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
