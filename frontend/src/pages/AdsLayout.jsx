import { Outlet } from "react-router-dom";

export default function AdsLayout() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <Outlet />
    </div>
  );
}
