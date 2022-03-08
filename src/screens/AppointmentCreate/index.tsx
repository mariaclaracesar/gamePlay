import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { Text, View } from 'react-native'
import { styles } from './styles' 

import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { theme } from '../../global/styles/theme'
import { Header } from '../../components/Header'
import { GuildIcon } from '../../components/GuildIcon'




export function AppointmentCreate() {
  const [category, setCategory] = useState('')

  return (
    <Background>
      <Header 
        title="Agendar partida"
      />

      <Text style={[
        styles.label, 
        { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
        >
          Categoria
      </Text>

      <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
         <View style={styles.select}>
           {
           /* <View style={styles.image}/> */
            <GuildIcon />
           }
            
            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />

         </View>
        </RectButton>

      </View>
    </Background>
  )
}