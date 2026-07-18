export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const startResendTimer = (setResendTimer) => {
  setResendTimer(120);
  const timer = setInterval(() => {
    setResendTimer((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
};

export const getPersianMonth = (date) => {
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
  }).format(new Date(date));
};
