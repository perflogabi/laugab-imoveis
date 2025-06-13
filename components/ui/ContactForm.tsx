"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./select";

interface ContactFormProps {
  title?: string;
  description?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  contactMethodPlaceholder?: string;
  buttonLabel?: string;
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    contactMethod: string;
  }) => Promise<void> | void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Simule seu Financiamento",
  description = "Preencha os dados e entraremos em contato com você!",
  namePlaceholder = "Seu nome",
  emailPlaceholder = "Seu e-mail",
  phonePlaceholder = "Seu telefone",
  contactMethodPlaceholder = "Como prefere ser contatado?",
  buttonLabel = "Simular Financiamento",
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!email.trim()) newErrors.email = "E-mail é obrigatório.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = "E-mail inválido.";
    if (!phone.trim()) newErrors.phone = "Telefone é obrigatório.";
    if (!contactMethod) newErrors.contactMethod = "Selecione uma forma de contato.";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    setLoading(true);
    try {
      await onSubmit?.({ name, email, phone, contactMethod });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setContactMethod("");
    } catch (err) {
      setErrors({ form: "Erro ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="max-w-md mx-auto w-full bg-white/80 border-green-200 shadow-lg rounded-2xl p-4 backdrop-blur-md">
      <form onSubmit={handleSubmit} noValidate>
        <CardHeader className="mb-2">
          <CardTitle className="text-2xl font-bold text-green-800 drop-shadow-sm">{title}</CardTitle>
          {description && <CardDescription className="text-base text-green-900/80 mb-4">{description}</CardDescription>}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="text-green-900 font-semibold mb-1">Nome</Label>
            <Input
              id="name"
              placeholder={namePlaceholder}
              value={name}
              onChange={e => setName(e.target.value)}
              aria-invalid={!!errors.name}
              className="border-green-300  focus:border-green-500 focus:ring-green-200/60 bg-white/90"
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-green-900 font-semibold mb-1">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              className="border-green-300 focus:border-green-500 focus:ring-green-200/60 bg-white/90"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="phone" className="text-green-900 font-semibold mb-1">Telefone</Label>
            <Input
              id="phone"
              placeholder={phonePlaceholder}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              aria-invalid={!!errors.phone}
              className="border-green-300 focus:border-green-500 focus:ring-green-200/60 bg-white/90"
            />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="contactMethod" className="text-green-900 font-semibold mb-1">Forma de contato</Label>
            <Select value={contactMethod} onValueChange={setContactMethod}>
              <SelectTrigger id="contactMethod" aria-invalid={!!errors.contactMethod} className="border-green-300 focus:border-green-500 focus:ring-green-200/60 bg-white/90">
                <SelectValue placeholder={contactMethodPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="ligacao">Ligação</SelectItem>
                <SelectItem value="email">E-mail</SelectItem>
              </SelectContent>
            </Select>
            {errors.contactMethod && <span className="text-red-500 text-xs">{errors.contactMethod}</span>}
          </div>
          {errors.form && <span className="text-red-500 text-xs">{errors.form}</span>}
          {success && <span className="text-green-600 text-xs">Enviado com sucesso! Em breve entraremos em contato.</span>}
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full h-12 mt-6 text-lg cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-colors duration-200"
            disabled={loading}
          >
            {loading ? "Enviando..." : buttonLabel}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}; 