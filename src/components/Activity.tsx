import { formatTimestamp } from "@/utils/formatTimeStamp";
import Image from "next/image";
import React from "react";

function Activity({ activity }: { activity: any }) {
  return (
    <div className="flex flex-row items-center gap-3 rounded-lg border border-gray-500 px-3 py-2">
      <div className="h-12 w-12">
        {activity.user.imageUrl ? (
          <Image
            src={activity.user.imageUrl}
            width={40}
            height={40}
            className="rounded-full "
            alt={activity.user.name + " profile picture"}
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
            <p className="text-sm text-white">{activity.user.name.charAt(0)}</p>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex flex-row justify-between gap-1">
          <a
            href={activity.user.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-green-500"
          >
            {activity.user.name}
          </a>
          <p className="text-xs text-gray-500">
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
  );
}

export default Activity;
