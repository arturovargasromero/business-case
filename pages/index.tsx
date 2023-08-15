import Home from "../components/Home";
import Content from "@/components/Layout/Content";

export default function Page() {
  return (
    <>
      <Content topbar>
        <Home />
      </Content>
    </>
  );
}
