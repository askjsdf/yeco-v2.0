import { Metadata } from "next";
import HomeYecoPage from "./(homes)/home-yeco/page";

export const metadata: Metadata = {
  title: "YECO - 香水包装设计",
};

export default function Home() {
  return <HomeYecoPage />;
}
