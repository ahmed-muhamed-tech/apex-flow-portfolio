
import Image from "next/image";

export default function MyPhoto() {
  return (
    <div className="bg-surface border border-border rounded-2xl row-span-4 col-span-1 overflow-hidden">
      <Image
        src="/myPhoto.png"
        alt="my_photo"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
