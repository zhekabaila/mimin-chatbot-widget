interface IProps {
  onClickStartChat: () => void;
}

export const StartChatSection = ({ onClickStartChat }: IProps) => {
  return (
    <div className="mimin-h-full mimin-overflow-y-auto mimin-bg-[#0096A2] mimin-flex mimin-flex-col mimin-justify-between">
      <div className="mimin-flex mimin-flex-col mimin-items-center mimin-justify-center mimin-py-11 mimin-px-11">
        <h2 className="mimin-text-sm mimin-font-bold mimin-text-white">
          MINA AGENT
        </h2>
        <img
          src="https://res.cloudinary.com/dctqloe37/image/upload/v1752571979/Icon_AI_Agent_lrdrhr.png"
          alt=" "
          width={1000}
          height={1000}
          className="mimin-w-40 mimin-h-w-40 mimin-rounded-full mimin-mt-10"
        />
      </div>
      <div className="mimin-flex mimin-flex-col mimin-items-center mimin-justify-center mimin-px-6 mimin-py-10 mimin-rounded-t-3xl mimin-mt-6 mimin-bg-white mimin-h-max">
        <h3 className="mimin-text-lg mimin-font-bold mimin-text-[#0096A2] mimin-text-center mimin-px-8">
          Hai, Aku Mina – AI Agent Kamu! 🤖
        </h3>
        <p className="mimin-text-sm mimin-text-gray-500 mimin-text-center mimin-mt-7 mimin-mb-7">
          Butuh bantuan atau info lainnya? Chat dengan Mina sekarang juga, ya!
        </p>
        <button
          onClick={onClickStartChat}
          className="mimin-bg-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};
