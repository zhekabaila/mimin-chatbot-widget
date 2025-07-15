interface IProps {
  onClickStartChat: () => void;
}

export const StartChatSection = ({ onClickStartChat }: IProps) => {
  return (
    <div className="h-full overflow-y-auto bg-[#0096A2] flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center py-11 px-11">
        <h2 className="text-sm font-bold text-white">MINA AGENT</h2>
        <img
          src="https://res.cloudinary.com/dctqloe37/image/upload/v1752571979/Icon_AI_Agent_lrdrhr.png"
          alt=" "
          width={1000}
          height={1000}
          className="w-40 h-w-40 rounded-full mt-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-10 rounded-t-4xl mt-6 bg-white h-max">
        <h3 className="text-lg font-bold text-[#0096A2] text-center px-8">
          Hai, Aku Mina – AI Agent Kamu! 🤖
        </h3>
        <p className="text-sm text-gray-500 text-center mt-7 mb-7">
          Butuh bantuan atau info lainnya? Chat dengan Mina sekarang juga, ya!
        </p>
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