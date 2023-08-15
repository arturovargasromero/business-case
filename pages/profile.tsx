import ProfileComponent from "../components/Profile/Profile";
import Content from "@/components/Layout/Content";

export default function Profile() {
  return (
    <>
      <Content topbar>
        <ProfileComponent />
      </Content>
    </>
  );
}
