import Image from "next/image";
import Sidebar from "@/components/ui/sidebar";
import MobileNav from "@/components/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Shubham', lastname: 'Bhardwaj'};
  return (
    <main className="flex h-full  w-full font-inter overflow-hidden">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
            <MobileNav user={loggedIn}/>
          </div>
        {children}
        </div>
    </main>
  );
}
