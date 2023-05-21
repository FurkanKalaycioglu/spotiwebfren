import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { formatTimestamp } from "@/utils/formatTimeStamp";
import Activity from "@/components/Activity";

const getFriendActivity = async (sp_dc: string) => {
  const response = await fetch(`/api/getActivity?sp_dc=${sp_dc}`);
  const data = await response.json();
  return data;
};

const setKeyToLocalStorage = (key: string) => {
  localStorage.setItem("sp_dc", key);
};

export default function Home() {
  const [friendActivity, setFriendActivity] = useState([]);
  const [sp_dc, setSp_dc] = useState("");
  const [sp_dcTemp, setSp_dcTemp] = useState("");

  useEffect(() => {
    const sp_dc = localStorage.getItem("sp_dc");
    if (sp_dc) {
      setSp_dc(sp_dc);
    }
    if (sp_dc) {
      getFriendActivity(sp_dc).then((data) => {
        setFriendActivity(data);
      });
    }
  }, []);

  return (
    <main className="flex h-auto min-h-screen w-screen flex-col gap-6 bg-gradient-to-r from-gray-900 to-gray-600 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-4xl font-bold text-white">
          Spotify Friend Activity
        </h1>
        {sp_dc !== "" && (
          <div className="flex flex-row justify-center gap-2">
            <button
              className="h-10 rounded-lg border  bg-transparent p-2 text-xs font-bold text-white hover:bg-green-500"
              onClick={() => {
                localStorage.clear();
                setSp_dc("");
                setSp_dcTemp("");
              }}
            >
              Clear local storage
            </button>
            <button
              className="h-10 rounded-lg border  bg-transparent p-2 text-xs font-bold text-white hover:bg-green-500"
              onClick={() => {
                getFriendActivity(sp_dc).then((data) => {
                  setFriendActivity(data);
                });
              }}
            >
              Refresh
            </button>
          </div>
        )}
      </div>
      {sp_dc === "" ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-2xl text-white">No Key on local storage</h3>
          <input
            placeholder="SP_DC Key"
            type="text"
            onChange={(e) => setSp_dcTemp(e.target.value)}
            className="focus:shadow-outline rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          />
          <button
            onClick={() => {
              setKeyToLocalStorage(sp_dcTemp);
              setSp_dc(sp_dcTemp);
            }}
            className="h-10 rounded-lg border  bg-transparent p-2 text-xs font-bold text-white hover:bg-green-500"
          >
            Save key to local storage
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {friendActivity
            .sort((a: any, b: any) => b.timestamp - a.timestamp)
            .map((activity: any, index: number) => (
              <Activity activity={activity} key={index} />
            ))}
        </div>
      )}
      <Footer />
    </main>
  );
}
