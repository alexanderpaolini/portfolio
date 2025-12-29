"use client";

import { FooterNav } from "@/components/footer";
import { Photo, photos } from "@/constants/photos";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [selectedPhoto, setSelectedPhoto] = useState<undefined | Photo>(
    undefined
  );

  return (
    <main className="min-h-screen flex flex-col px-4">
      <Link href="/" className="link">
        󰌍 Back
      </Link>
      <h1 className="border-b-4 mb-6">Photos</h1>
      <p className="mb-8 max-w-2xl">
        Here are some of my favorite photos I&apos;ve taken. Click on them -- they expand.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6 w-fit h-fit">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center max-h-76 overflow-hidden rounded-xl"
          >
            <Image
              className="rounded-xl cursor-zoom-in bg-neutral-900 overflow-hidden"
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              onClick={() => setSelectedPhoto(photo)}
            />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(undefined)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="rounded-lg p-2 shadow-lg flex flex-col items-center relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: selectedPhoto.width,
              width: "auto",
              background: "transparent",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="object-contain rounded-lg"
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
      <FooterNav />
    </main>
  );
}
