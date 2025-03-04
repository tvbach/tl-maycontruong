const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0386684246"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors ring-2 ring-white shadow-lg"
      >
        <img src="/images/zalo-icon.svg" alt="Zalo" className="w-8 h-8" />
      </a>

      {/* Messenger Button */}
      <a
        href="https://www.facebook.com/thanh.lich.830842"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0099FF] hover:bg-[#0088FF] transition-colors ring-2 ring-white shadow-lg"
      >
        <img src="/images/messenger-icon.svg" alt="Messenger" className="w-8 h-8" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:0386684246"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-colors ring-2 ring-white shadow-lg animate-bounce"
      >
        <img src="/images/phone-icon.svg" alt="Call" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default FloatingButtons;