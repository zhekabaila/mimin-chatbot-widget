interface IProps {
  onClickStartChat: () => void;
}

const StartChatSection = ({ onClickStartChat }: IProps) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col gap-3 items-center justify-center bg-[#D1CDCD80] py-11 px-11">
        <img
          src="https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg"
          alt=" "
          width={1000}
          height={1000}
          className="w-16 h-16 rounded-full"
        />
        <p className="text-base text-center text-[#0096A2] font-semibold">
          Halo! Saya Mina <br />
          AI Customer Care MIMIN 🤖 <br />
          Kamu butuh bantuan apa, nih?
        </p>
      </div>
      <div className="flex items-center justify-center px-4 mt-6">
        <button
          onClick={onClickStartChat}
          className="bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default StartChatSection;
