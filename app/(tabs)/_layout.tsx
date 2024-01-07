import { Tabs, router } from 'expo-router';
import {
  HomeIcon,
  DiagnoseIcon,
  MyGardenIcon,
  ProfileIcon,
  ScannerIcon,
} from '@components/Home/TabBarIcons';
import colors from '@constants/colors';
import { TabName } from '@constants/types';
import { useAppDispatch } from '@redux/hooks';
import { useActiveTab } from '@redux/hooks/useTabs';
import { setActiveTab } from '@redux/slices/tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabLayout() {
  const dispatch = useAppDispatch();

  function onPressSetActiveTab(tabName: TabName) {
    dispatch(setActiveTab(tabName));
    router.replace(`/(tabs)/${tabName}`);
  }

  function activeTabCheck(tabName: string): boolean {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useActiveTab(tabName);
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeIcon isFocused={activeTabCheck('home')} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onPressSetActiveTab('home');
          },
        })}
      />
      <Tabs.Screen
        name="diagnose/index"
        options={{
          title: 'Diagnose',
          tabBarIcon: ({ color }) => (
            <DiagnoseIcon isFocused={activeTabCheck('diagnose')} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onPressSetActiveTab('diagnose');
          },
        })}
      />
      <Tabs.Screen
        name="scanner/index"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              accessibilityRole="button"
              style={{ marginTop: -36 }}>
              <ScannerIcon isFocused />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="mygarden/index"
        options={{
          title: 'My Garden',
          tabBarIcon: ({ color }) => (
            <MyGardenIcon isFocused={activeTabCheck('mygarden')} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onPressSetActiveTab('mygarden');
          },
        })}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <ProfileIcon isFocused={activeTabCheck('profile')} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            onPressSetActiveTab('profile');
          },
        })}
      />
    </Tabs>
  );
}
