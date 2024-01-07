import { useIsSeenGuiding } from '@redux/hooks/useGuiding';
import { Redirect } from 'expo-router';

export default function App() {
  const { isSeenGuiding } = useIsSeenGuiding();

  return isSeenGuiding ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/welcome/" />
  );
}
