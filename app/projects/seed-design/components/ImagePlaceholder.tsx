type Props = {
  src: string;
  label: string;
  ratio?: "wide" | "landscape" | "portrait";
};

const ratioMap = {
  wide: "aspect-[16/10]",
  landscape: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
};

export default function ImagePlaceholder({
  src,
  label,
  ratio = "wide",
}: Props) {
  return (
    <div
      className={`flex ${ratioMap[ratio]} items-center justify-center overflow-hidden rounded-[28px] border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center`}
    >
      <div>
        <p className="text-sm font-medium text-zinc-700">{label}</p>
        <p className="mt-2 break-all text-xs leading-5 text-zinc-400">{src}</p>
      </div>
    </div>
  );
}
