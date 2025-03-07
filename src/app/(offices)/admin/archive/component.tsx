'use client';
import DocumentTypePickerPage from "@/app/(offices)/_components/doctype-picker";
import { Roles } from "@/lib/modelInterfaces";
import { useMemo } from "react";


type Params = {
  searchParams: { id: string }
}

export default function ArchivedPageComponent({ searchParams }: Params) {
  const search = useMemo(() => new URLSearchParams(searchParams), [searchParams])
  return <DocumentTypePickerPage title="Archived Memo/Letter" url={["/" + Roles.Admin + "/archive/memo?" + search.toString(), "/" + Roles.Admin + "/archive/letter?" + search.toString()]} />
}
