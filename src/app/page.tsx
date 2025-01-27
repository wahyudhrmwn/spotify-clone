"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-between min-h-screen">
        <header className="flex fixed top-0 w-full z-10">
          <Navbar />
        </header>
        <main className="flex bg-gray-700 z-0">
          <MainContent />
        </main>
        <footer className="flex fixed bottom-0 w-full items-center z-10">
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}
