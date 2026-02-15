import { Student } from "@/types/student";

const API_URL = "https://actkdback-production.up.railway.app";

export async function createStudent(
  student: Omit<Student, "id" | "createdAt" | "updatedAt">
) {
  const response = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: student.name,
      motherName: student.motherName,
      fatherName: student.fatherName,
      age: student.age, 
      belt: student.belt,
      bloodType: student.bloodType,
      phone: student.phone,
      observations: student.observations,
      address: student.address,
      enrollmentDate: student.enrollmentDate,
      monthlyFee: student.monthlyFee,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar aluno");
  }

  return response.json();
}
