import Image from "next/image";

const FACE_ICONS = [
  "/icons-real-faces/Ellipse 6720.svg",
  "/icons-real-faces/Ellipse 6721.svg",
  "/icons-real-faces/Ellipse 6722.svg",
  "/icons-real-faces/Ellipse 6723.svg",
  "/icons-real-faces/Ellipse 6724.svg",
];

export function AvatarStack() {
  return (
    <div className="flex items-center">
      {FACE_ICONS.map((src, i) => (
        <div
          key={src}
          className="relative rounded-full overflow-hidden border-2 border-[#0a4535]"
          style={{
            width: 28,
            height: 28,
            marginLeft: i === 0 ? 0 : -10,
            zIndex: FACE_ICONS.length - i,
            background: "#1a2e24",
          }}
        >
          <Image
            src={src}
            alt={`Community member ${i + 1}`}
            width={28}
            height={28}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
