import { Redirect } from 'expo-router';
import { useIsSeenGuiding } from '@redux/hooks/useGuiding';

export default function App() {
  const { isSeenGuiding } = useIsSeenGuiding();

  return isSeenGuiding ? (
    <Redirect href="/onboarding/" />
  ) : (
    <Redirect href="/welcome/" />
  );
}
