type Props = {
  fill?: string;
  flip?: boolean;
  variant?: "gentle" | "choppy" | "layered";
};

const paths = {
  gentle:
    "M0 40C180 80 360 0 540 40C720 80 900 0 1080 40C1260 80 1440 0 1440 0V120H0V40Z",
  choppy:
    "M0 60C120 20 240 80 360 50C480 20 600 90 720 60C840 30 960 70 1080 45C1200 20 1320 75 1440 50V120H0V60Z",
  layered: [
    "M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V120H0V50Z",
    "M0 70C200 100 400 40 600 70C800 100 1000 40 1200 70C1400 100 1440 80 1440 80V120H0V70Z",
  ],
};

export default function WaveDivider({
  fill = "#ffffff",
  flip = false,
  variant = "gentle",
}: Props) {
  const isLayered = variant === "layered";

  return (
    <div
      className="relative w-full -mt-px overflow-hidden pointer-events-none"
      style={{ height: "72px", transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        {isLayered ? (
          <>
            <path d={(paths.layered as string[])[0]} fill={fill} fillOpacity="0.4" />
            <path d={(paths.layered as string[])[1]} fill={fill} />
          </>
        ) : (
          <path d={paths[variant as "gentle" | "choppy"]} fill={fill} />
        )}
      </svg>
    </div>
  );
}
