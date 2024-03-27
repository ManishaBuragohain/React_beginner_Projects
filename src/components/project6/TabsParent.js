import Tabs from "./Tab";
import "./tab.css";

function RandomContent() {
  return <div>Some random content</div>;
}

export default function TabsParent() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1 </div>,
    },

    {
      label: "Tab 2",
      content: <div>This is content for Tab 2 </div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
