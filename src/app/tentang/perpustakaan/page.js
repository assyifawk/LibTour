
"use client";
import PageHeader from "@/app/components/fragments/PageHeader";
import LibraryProfile from "@/app/components/sections/About/LibraryProfile";
import Leader from "@/app/components/sections/About/Leader";
const page = () => {
  return (
    <div>
      <PageHeader title="Perpustakaan " />
      <LibraryProfile />
      <Leader />
    </div>
  );
};

export default page;
