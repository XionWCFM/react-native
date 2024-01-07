import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="users/[slug]" />
    </Tabs>
  );
};

export default TabsLayout;
