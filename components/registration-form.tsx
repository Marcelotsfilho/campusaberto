"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

const activities = ["Futebol", "Vôlei", "Basquete", "Natação", "Tênis de Mesa", "Atletismo", "Handebol", "Futsal"]

const timeSlots = ["Manhã (7h às 11h)", "Tarde (13h às 17h)", "Noite (18h às 22h)"]

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    activity: "",
    timeSlot: "",
    experience: "",
    terms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto text-center">
        <CardContent className="pt-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Cadastro Realizado!</h3>
          <p className="text-gray-600 mb-6">
            Obrigado por se cadastrar! Em breve entraremos em contato para confirmar sua participação.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Fazer Novo Cadastro
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Formulário de Cadastro</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="age">Idade *</Label>
              <Input
                id="age"
                type="number"
                required
                min="6"
                max="80"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Endereço *</Label>
            <Input
              id="address"
              type="text"
              required
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Atividade de Interesse *</Label>
              <Select onValueChange={(value) => handleInputChange("activity", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione uma atividade" />
                </SelectTrigger>
                <SelectContent>
                  {activities.map((activity) => (
                    <SelectItem key={activity} value={activity}>
                      {activity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Horário de Preferência *</Label>
              <Select onValueChange={(value) => handleInputChange("timeSlot", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione um horário" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="experience">Experiência Anterior (opcional)</Label>
            <Textarea
              id="experience"
              placeholder="Conte-nos sobre sua experiência com a atividade escolhida..."
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              Aceito os termos e condições do Campus Aberto e autorizo o uso de minha imagem em materiais de divulgação
              *
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting || !formData.terms}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Finalizar Cadastro"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
