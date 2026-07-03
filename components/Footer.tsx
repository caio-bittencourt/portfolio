"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-4 w-full max-w-4xl pb-8">
      <div className="pt-4">
        <p className="text-sm text-gray-500">
          {"\u00A9"} {new Date().getFullYear()} Caio Bittencourt
        </p>
      </div>
    </footer>
  );
}
