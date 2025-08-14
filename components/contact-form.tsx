"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format message for WhatsApp
    const whatsappMessage = `*Novo contato do Campus Aberto*
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Assunto:* ${formData.subject}
*Mensagem:* ${formData.message}`

    // WhatsApp number - Replace with your actual number
    const whatsappNumber = "5532988157183"

    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" }) // Reset form
    }, 3000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="h-5 w-5" />
          <span>Entre em Contato</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nome
              </Label>
              <Input 
                id="name"
                className="mt-1.5"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input 
                id="email"
                type="email"
                className="mt-1.5"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-sm font-medium">
              Assunto
            </Label>
            <Input 
              id="subject"
              className="mt-1.5"
              placeholder="Assunto da mensagem"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </Label>
            <Textarea
              id="message"
              className="mt-1.5 min-h-[120px]"
              placeholder="Digite sua mensagem..."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
