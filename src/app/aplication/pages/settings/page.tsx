import Breadcrumb from "@/components/dashComponents/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/dashComponents/Layouts/DefaultLaout";
import SettingBoxes from "@/components/dashComponents/SettingBoxes";

export const metadata: Metadata = {
  title: "Added User",
  description: "Pagina destinada a inserção de novos usuários no sistema",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Settings" />
        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
