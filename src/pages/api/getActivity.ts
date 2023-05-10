// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const getWebAccessToken = async ({ cookie }: { cookie: string }) => {
  const res = await fetch(
    "https://open.spotify.com/get_access_token?reason=transport&productType=web_player",
    {
      headers: {
        Cookie: `sp_dc=${cookie}`,
      },
    }
  );
  const data = await res.json();
  return data["accessToken"];
};

const getFriendActivity = async ({ cookie }: { cookie: string }) => {
  const token = await getWebAccessToken({ cookie });
  const res = await fetch(
    "https://spclient.wg.spotify.com/presence-view/v1/buddylist",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data.friends;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.query.sp_dc as string;
  if (!cookie) {
    res.status(400).json({ error: "sp_dc cookie is required" });
    return;
  }

  getFriendActivity({ cookie }).then((data) => {
    res.status(200).json(data);
  });
}
