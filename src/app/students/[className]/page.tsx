'use client';
import { useParams } from "next/navigation";
import { StudentsTable } from "@/components/StudentsTable";
import Link from "next/link";

export default function FindStudentPage() {
  const { className } = useParams<{ className: string }>();
  
  return (
    <>
      <StudentsTable storageName="students" className={className} />
      <Link className="underline text-blue-600" href="/">&lt; Back to home page</Link>
    </>
  );
} 