export const formatTimestamp = (timestamp: number) => {
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

  