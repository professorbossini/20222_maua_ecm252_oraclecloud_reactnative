import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import {
  Button,
  Card,
  Input
} from '@rneui/themed'
import * as pessoaService from '../services/PessoaService'

const PessoaAddComponent = ({navigation}) => {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [hobby, setHobby] = useState('')
  const addPessoa = async () => {
    try{
      const res = await pessoaService.cadastrarPessoa({nome, idade, hobby})
      console.log(res)
      ToastAndroid.show("Pessoa cadastrada com sucesso", ToastAndroid.LONG)
    }
    catch(erro){
      console.log(erro)
      ToastAndroid.show("Falha técnica", ToastAndroid.LONG)
    }
    //navigation.goBack()
  }
  return (
    <>
      <Card>
        <Card.Title>Cadastro de pessoa</Card.Title>
        <Card.Divider/>
        <Input 
          placeholder='Nome'
          leftIcon={{type: 'font-awesome', name: 'user'}}
          style={styles.textInput}
          onChangeText={nome => setNome(nome)}
        />
        <Input 
          placeholder='Idade'
          leftIcon={{type: 'font-awesome', name: 'info'}}
          style={styles.textInput}
          onChangeText={idade => setIdade(idade)}
        />
        <Input 
          placeholder='Hobby'
          leftIcon={{type: 'font-awesome', name: 'heart'}}
          style={styles.textInput}
          onChangeText={(hobby) => setHobby(hobby)}
        />
        <Button 
          title="OK"
          buttonStyle={styles.button}
          onPress={addPessoa}
        />
      </Card>
    </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
  textInput: {
    textAlign: 'center'
  },
  button: {
    borderRadius: 8
  }
})