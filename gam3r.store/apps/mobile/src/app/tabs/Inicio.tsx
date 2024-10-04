import { StyleSheet, Text , SafeAreaView, Pressable } from 'react-native'


export default function Inicio({ navigation }: any) {
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: 'white'}}>Inicio</Text>
            <Pressable onPress={() => navigation.navigate('ProdutoDetalhes')}>
                <Text style={{ color: 'white'}}>Produto Detalhe</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E001D',
        width: '100%',
    },
})
