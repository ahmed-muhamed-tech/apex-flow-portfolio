export default function MyPhoto() {
  return (
    <div className="bg-surface border border-border rounded-2xl row-span-4 col-span-1 overflow-hidden">
      <img
        src="/myPhoto.png"
        alt="my_photo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
