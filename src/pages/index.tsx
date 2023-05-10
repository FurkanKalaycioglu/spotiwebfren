import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const formatTimestamp = (timestamp: number) => {
  const now = new Date().getTime();
  const difference = now - timestamp;
  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (minutes < 60) {
    return `${minutes} min`;
  } else if (hours < 24) {
    return `${hours} hr`;
  } else {
    return `${days} d`;
  }
};

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
    <main className="flex flex-col w-screen min-h-screen h-auto from-gray-900 to-gray-600 bg-gradient-to-r p-4 gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center text-white">
          Spotify Friend Activity
        </h1>
        {sp_dc !== "" && (
          <div className="flex flex-row gap-2 justify-center">
            <button
              className="p-2 rounded-lg border  bg-transparent text-xs text-white font-bold hover:bg-green-500 h-10"
              onClick={() => {
                localStorage.clear();
                setSp_dc("");
                setSp_dcTemp("");
              }}
            >
              Clear local storage
            </button>
            <button
              className="p-2 rounded-lg border  bg-transparent text-xs text-white font-bold hover:bg-green-500 h-10"
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
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="text-2xl">No Key on local storage</h3>
          <input
            placeholder="SP_DC Key"
            type="text"
            onChange={(e) => setSp_dcTemp(e.target.value)}
            className="px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={() => {
              setKeyToLocalStorage(sp_dcTemp);
              setSp_dc(sp_dcTemp);
            }}
            className="p-2 rounded-lg border  bg-transparent text-xs text-white font-bold hover:bg-green-500 h-10"
          >
            Save key to local storage
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {friendActivity
            .sort((a: any, b: any) => b.timestamp - a.timestamp)
            .map((activity: any, index: number) => (
              <div
                className="flex flex-row gap-3 py-2 px-3 items-center rounded-lg border-gray-500 border"
                key={index}
              >
                <div className="w-12 h-12">
                  {activity.user.imageUrl ? (
                    <Image
                      src={activity.user.imageUrl}
                      width={40}
                      height={40}
                      className="rounded-full "
                      alt={activity.user.name + " profile picture"}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
                      <p className="text-white text-sm">
                        {activity.user.name.charAt(0)}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row gap-1 justify-between">
                    <a
                      href={activity.user.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:text-green-500"
                    >
                      {activity.user.name}
                    </a>
                    <p className="text-gray-500 text-xs">
                      {formatTimestamp(activity.timestamp)}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href={activity.track.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-green-500"
                    >
                      {activity.track.name} - {activity.track.artist.name}
                    </a>
                    <a
                      href={activity.track.context.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-green-500"
                    >
                      {activity.track.context.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </main>
  );
}
