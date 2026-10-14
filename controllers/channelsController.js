import channels from "../data/channels.js";

export const getChannels = (req, res) => {
  try {
    res.status(200).json(channels);
  } catch (error) {
    res.status(500).json({
      message: "Хатогӣ ҳангоми гирифтани каналҳо",
    });
  }
};