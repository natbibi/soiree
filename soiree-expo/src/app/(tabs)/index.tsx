import { Text, View, StyleSheet } from 'react-native';
import AddPoopButton from '@/components/add-poop-button';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <AddPoopButton label="I POOPED 💩" />
        <AddPoopButton label="Use this photo" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
