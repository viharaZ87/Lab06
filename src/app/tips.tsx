import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Why Hydrate? 🌊</Text>
      
      <View style={styles.tipCard}>
        <Text style={styles.tipText}>• Boosts skin health and beauty</Text>
        <Text style={styles.tipText}>• Regulates body temperature</Text>
        <Text style={styles.tipText}>• Flushes body waste</Text>
        <Text style={styles.tipText}>• Maintains blood pressure</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0EA5E9',
    marginBottom: 20,
  },
  tipCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tipText: {
    fontSize: 16,
    color: '#334155',
    marginVertical: 8,
  },
});