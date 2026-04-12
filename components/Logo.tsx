import Image from "next/image";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <Image
        src="/prologo.png"
        alt="Proxion Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
