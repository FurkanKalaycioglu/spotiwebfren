import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const navigation = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/w33baker/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/W33baker",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/FurkanKalaycioglu",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/furkankalaycioglu/",
    icon: (props: any) => (
      <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    ),
  },
];

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
      <footer className="mt-auto">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-gray-500">
              Furkan Kalaycıoğlu
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
