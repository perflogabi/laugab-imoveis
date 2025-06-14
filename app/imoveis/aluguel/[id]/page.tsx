import { notFound } from "next/navigation";
import propertiesAluguel from "../propertiesAluguel";
import PropertyDetailsClient from "./PropertyDetailsClient";

interface PropertyDetailsPageProps {
  params: { id: string };
}

function getPropertyById(id: string) {
  return propertiesAluguel.find((p) => p.id === id);
}

export default function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const property = getPropertyById(params.id);

  if (!property) {
    return notFound();
  }

  return <PropertyDetailsClient property={property} />;
} 