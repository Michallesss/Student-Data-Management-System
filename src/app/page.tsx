'use client';
import { StudentsTable } from "@/components/StudentsTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useStorage from "@/hooks/useStorage";

export default function HomePage() {
  const [classes, setClasses] = useStorage("classes");

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Classes list \/</h1>
      <Accordion type="single" collapsible className="w-full">
        {classes.map((className: string) => (
          <AccordionItem value={className} key={className}>
            <AccordionTrigger>{className}</AccordionTrigger>
            <AccordionContent>
              <StudentsTable storageName="students" className={className} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button className="mt-4" variant="outline">
        <a href="/students/add">Add Student</a>
      </Button>
    </>
  );
}
