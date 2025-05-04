import Link from "next/link";
import { IStudent } from "@/interfaces/student";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  /*TableFooter,*/
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useStorage from "@/hooks/useStorage";

export function StudentsTable({ storageName, className }: { storageName: string; className: string }) {
  const [students, setStudents] = useStorage(storageName);
  const classStudents = students.filter((studentItem: IStudent) => studentItem.className === className);
  const averageGrade = (classStudents.reduce((acc: number, student: IStudent) => acc + student.averageGrade, 0) / classStudents.length).toFixed(2) || "Brak danych";

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Class <Link className="underline text-blue-600" href={"/students/"+className}>{className}</Link>.</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Student</TableHead>
            <TableHead>Average Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classStudents.map((student: IStudent, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.averageGrade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>Average Grade: {averageGrade}</TableCaption>
      </Table>
    </>
  );
}