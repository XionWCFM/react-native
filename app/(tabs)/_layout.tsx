import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'home page',
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="users/[slug]"
        options={{
          headerTitle: 'user page',
          title: 'user',
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
