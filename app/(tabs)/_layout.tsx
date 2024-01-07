import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'home page',
          title: 'Home',
          tabBarIcon: (props) => <FontAwesome name={'home'} {...props} />,
        }}
      />
      <Tabs.Screen
        name="users/[slug]"
        options={{
          headerTitle: 'user page',
          title: 'user',
          tabBarIcon: (props) => <FontAwesome name={'user'} {...props} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
