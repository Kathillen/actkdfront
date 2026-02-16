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
      mother_name: student.mother_name,
      father_name: student.father_name,
      age: student.age, 
      belt: student.belt,
      blood_type: student.blood_type,
      phone: student.phone,
      observations: student.observations,
      address: student.address,
      enrollment_date: student.enrollment_date,
      monthly_fee: student.monthly_fee,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar aluno");
  }

  return response.json();
}
