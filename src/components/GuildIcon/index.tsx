import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon() {
  const uri = 'https://i.pinimg.com/736x/07/90/82/07908213f7acf40375c51eb427a24d9c.jpg'

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />

  )
}