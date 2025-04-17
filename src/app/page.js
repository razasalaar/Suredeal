import LoginPage from "./login/page";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 ">
      <div className="mb-6 mt-10">
        <Image
          src="/images/logo.png"
          alt="SureDeal Logo"
          width={140}
          height={40}
          className="object-contain "
        />
      </div>

      <LoginPage />
    </div>
  );
}
